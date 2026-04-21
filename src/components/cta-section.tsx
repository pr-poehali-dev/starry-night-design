import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[hsl(214,60%,8%)] via-[hsl(214,50%,10%)] to-[hsl(214,60%,8%)]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <p className="text-amber-500 font-geist font-semibold tracking-widest uppercase text-sm mb-4">
            Приходите в гости
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron text-balance">
            Откройте для себя восемь веков знаний
          </h2>
          <p className="text-base sm:text-xl text-blue-100/70 mb-4 leading-relaxed max-w-2xl mx-auto font-geist">
            Музей «Белем» ждёт школьников, студентов, педагогов и всех, кто ценит историю образования.
            Вход, экскурсии и аудиогиды — полностью бесплатны.
          </p>
          <p className="text-amber-400/80 text-base mb-10 font-geist">
            📍 Казань, ул. Татарстан, 2 · Пн–Сб: 9:00–17:00
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-[hsl(214,60%,5%)] font-geist font-bold pulse-button text-lg px-8 py-4"
            >
              Посетить бесплатно
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white font-geist text-lg px-8 py-4 bg-transparent"
            >
              Записаться группой
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}