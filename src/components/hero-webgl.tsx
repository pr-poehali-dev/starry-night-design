import { Canvas, extend, useFrame } from "@react-three/fiber"
import { useAspect, useTexture } from "@react-three/drei"
import { useMemo, useRef, useState, useEffect } from "react"
import * as THREE from "three"
import { Button } from "@/components/ui/button"

const TEXTUREMAP = { src: "https://i.postimg.cc/XYwvXN8D/img-4.png" }
const DEPTHMAP = { src: "https://i.postimg.cc/2SHKQh2q/raw-4.webp" }

extend(THREE as unknown as Record<string, unknown>)

const WIDTH = 300
const HEIGHT = 300

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src])
  const meshRef = useRef<THREE.Mesh>(null)

  const material = useMemo(() => {
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      uniform sampler2D uTexture;
      uniform sampler2D uDepthMap;
      uniform vec2 uPointer;
      uniform float uProgress;
      uniform float uTime;
      varying vec2 vUv;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
        vec2 uv = vUv;

        float depth = texture2D(uDepthMap, uv).r;
        vec2 displacement = depth * uPointer * 0.01;
        vec2 distortedUv = uv + displacement;

        vec4 baseColor = texture2D(uTexture, distortedUv);

        // Apply dark blue tint for museum feel
        vec3 blueShift = mix(baseColor.rgb, vec3(0.02, 0.08, 0.22), 0.55);

        float aspect = ${WIDTH}.0 / ${HEIGHT}.0;
        vec2 tUv = vec2(uv.x * aspect, uv.y);
        vec2 tiling = vec2(120.0);
        vec2 tiledUv = mod(tUv * tiling, 2.0) - 1.0;

        float brightness = noise(tUv * tiling * 0.5);
        float dist = length(tiledUv);
        float dot = smoothstep(0.5, 0.49, dist) * brightness;

        float flow = 1.0 - smoothstep(0.0, 0.02, abs(depth - uProgress));

        // Gold scanning overlay instead of red
        vec3 mask = vec3(dot * flow * 8.0, dot * flow * 5.5, 0.0);

        vec3 final = blueShift + mask;

        gl_FragColor = vec4(final, 1.0);
      }
    `

    return new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: rawMap },
        uDepthMap: { value: depthMap },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uProgress: { value: 0 },
        uTime: { value: 0 },
      },
      vertexShader,
      fragmentShader,
    })
  }, [rawMap, depthMap])

  const [w, h] = useAspect(WIDTH, HEIGHT)

  useFrame(({ clock, pointer }) => {
    if (material.uniforms) {
      material.uniforms.uProgress.value = Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5
      material.uniforms.uPointer.value = pointer
      material.uniforms.uTime.value = clock.getElapsedTime()
    }
  })

  const scaleFactor = 0.3
  return (
    <mesh ref={meshRef} scale={[w * scaleFactor, h * scaleFactor, 1]} material={material}>
      <planeGeometry />
    </mesh>
  )
}

export const Hero3DWebGL = () => {
  const titleLine1 = "Музей образования"
  const titleLine2 = "Республики Татарстан"
  const museumName = "«Белем»"
  const subtitle = "Знание. История. Наставничество."
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400)
    const t2 = setTimeout(() => setPhase(2), 1000)
    const t3 = setTimeout(() => setPhase(3), 1600)
    const t4 = setTimeout(() => setPhase(4), 2200)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [])

  return (
    <div className="h-screen bg-[hsl(214,60%,5%)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[hsl(214,60%,5%)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[hsl(214,60%,5%)] to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[hsl(214,60%,5%)] to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[hsl(214,60%,5%)] to-transparent" />
      </div>

      <div className="h-screen items-center w-full absolute z-[60] pointer-events-none px-6 md:px-10 flex justify-center flex-col">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className={`font-geist text-sm md:text-base text-amber-400 font-semibold tracking-widest uppercase mb-4 transition-all duration-700 ${phase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Казань · КФУ · Открыт с 2025 года
          </div>

          <div
            className={`font-orbitron text-2xl md:text-4xl xl:text-5xl font-bold text-white leading-tight mb-1 transition-all duration-700 ${phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {titleLine1}
          </div>
          <div
            className={`font-orbitron text-2xl md:text-4xl xl:text-5xl font-bold text-white leading-tight mb-2 transition-all duration-700 delay-100 ${phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {titleLine2}
          </div>
          <div
            className={`font-orbitron text-3xl md:text-5xl xl:text-6xl font-extrabold text-amber-400 mb-6 transition-all duration-700 delay-200 ${phase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {museumName}
          </div>

          <div
            className={`font-geist text-lg md:text-2xl text-blue-100/80 font-light tracking-wide mb-10 transition-all duration-700 ${phase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {subtitle}
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto transition-all duration-700 ${phase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-[hsl(214,60%,5%)] font-geist font-bold text-lg px-8 pulse-button"
            >
              Посетить бесплатно
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white font-geist text-lg px-8 bg-transparent"
            >
              Об экспозиции
            </Button>
          </div>

          <div
            className={`mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-200/60 font-geist transition-all duration-700 ${phase >= 4 ? "opacity-100" : "opacity-0"}`}
          >
            <span>✦ Вход бесплатный</span>
            <span>✦ Экскурсии бесплатные</span>
            <span>✦ XII–XXI век</span>
          </div>
        </div>
      </div>

      <Canvas
        flat
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 1] }}
        style={{ background: "hsl(214,60%,5%)" }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

export default Hero3DWebGL
