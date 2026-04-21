import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "XII–XVIII века",
      content: (
        <div>
          <p className="text-blue-100/80 text-sm md:text-base font-normal mb-6 leading-relaxed font-geist">
            Зарождение образования на территории Волжской Булгарии и Казанского ханства. Медресе как центры знания,
            арабская письменность, первые рукописные книги на татарском языке.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-amber-400 text-sm font-geist">
              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
              Медресе как главные центры образования
            </div>
            <div className="flex items-center gap-3 text-amber-400 text-sm font-geist">
              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
              Рукописные книги на арабской графике
            </div>
            <div className="flex items-center gap-3 text-amber-400 text-sm font-geist">
              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
              Первые буквари «алифба» для детей
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "XIX–начало XX века",
      content: (
        <div>
          <p className="text-blue-100/80 text-sm md:text-base font-normal mb-6 leading-relaxed font-geist">
            Эпоха просвещения и реформ. Развитие светского образования, книгоиздание, появление первых учебников
            на татарском языке. Казань становится культурным центром татарского мира.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-amber-400 text-sm font-geist">
              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
              Зарождение светских школ
            </div>
            <div className="flex items-center gap-3 text-amber-400 text-sm font-geist">
              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
              Расцвет татарского книгоиздания
            </div>
            <div className="flex items-center gap-3 text-amber-400 text-sm font-geist">
              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
              Педагогические реформы Исмаила Гаспринского
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "XX век",
      content: (
        <div>
          <p className="text-blue-100/80 text-sm md:text-base font-normal mb-6 leading-relaxed font-geist">
            Советская школа, пионерское движение, массовое образование. Переход на латинскую, затем кириллическую
            графику. Педагогические династии, формировавшие республику.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-amber-400 text-sm font-geist">
              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
              Всеобщее начальное образование
            </div>
            <div className="flex items-center gap-3 text-amber-400 text-sm font-geist">
              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
              Школьная форма и атрибуты пионерии
            </div>
            <div className="flex items-center gap-3 text-amber-400 text-sm font-geist">
              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
              Легендарные учителя Татарстана
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Сегодня и завтра",
      content: (
        <div>
          <p className="text-blue-100/80 text-sm md:text-base font-normal mb-6 leading-relaxed font-geist">
            Цифровая трансформация образования. Интерактивные зоны музея дают возможность заглянуть в будущее:
            Атлас профессий, тесты профориентации и мультимедийные технологии.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-amber-400 text-sm font-geist">
              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
              Интерактивный Атлас профессий будущего
            </div>
            <div className="flex items-center gap-3 text-amber-400 text-sm font-geist">
              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
              Тест на профориентацию «Трамвай желаний»
            </div>
            <div className="flex items-center gap-3 text-amber-400 text-sm font-geist">
              <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
              Карта педагогических вузов республики
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-[hsl(214,60%,5%)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-amber-500 font-geist font-semibold tracking-widest uppercase text-sm mb-3">История</p>
          <h2 className="font-orbitron text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Восемь веков просвещения
          </h2>
          <p className="text-blue-100/70 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-geist">
            Музей «Белем» хранит непрерывную историю образования татарского народа — от средневековых
            медресе до современных цифровых технологий.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}