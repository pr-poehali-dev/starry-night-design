export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-500 font-geist font-semibold tracking-widest uppercase text-sm mb-3">О музее</p>
          <h2 className="text-4xl font-bold text-foreground mb-4 font-orbitron">История создания</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed font-geist">
              Музей «Белем» — первый в Татарстане государственный музей, полностью посвящённый
              истории образования. Он открылся <strong className="text-foreground">13 августа 2025 года</strong> в
              Казани, на базе Казанского федерального университета.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-geist">
              Основа коллекции — фонд Музея народного образования Республики Татарстан, созданного в 1985 году
              и насчитывающего более <strong className="text-foreground">5 000 единиц хранения</strong>. Экспозиция
              охватывает период с XII по XXI век.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-geist">
              Музей создан в Год педагога и наставника, объявленный в Республике Татарстан в 2023 году.
              Его главная миссия — повышение авторитета профессии учителя и сохранение педагогического
              наследия республики.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 font-orbitron">5000+</div>
                <div className="text-sm text-muted-foreground mt-1 font-geist">экспонатов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 font-orbitron">8+</div>
                <div className="text-sm text-muted-foreground mt-1 font-geist">веков истории</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 font-orbitron">0 ₽</div>
                <div className="text-sm text-muted-foreground mt-1 font-geist">вход бесплатный</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <blockquote className="relative bg-card border border-amber-500/20 rounded-2xl p-8">
              <div className="text-amber-500 text-6xl font-orbitron leading-none mb-4">"</div>
              <p className="text-foreground text-lg leading-relaxed font-geist italic mb-6">
                Учителя формируют наше будущее. Здесь, в нашем самом большом центре по подготовке
                педагогов, открывается музей образования, при создании которого мы опирались
                на нашу историю, традиции, династии учителей.
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold text-lg font-orbitron">
                  РМ
                </div>
                <div>
                  <p className="font-semibold text-foreground font-geist">Рустам Минниханов</p>
                  <p className="text-sm text-muted-foreground font-geist">Раис Республики Татарстан</p>
                </div>
              </footer>
            </blockquote>

            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
