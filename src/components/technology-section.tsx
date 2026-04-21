import Icon from "@/components/ui/icon"

const stats = [
  { icon: "BookOpen", value: "5 000+", label: "экспонатов в фондах" },
  { icon: "Calendar", value: "1985", label: "год основания коллекции" },
  { icon: "Users", value: "110 млн", label: "рублей вложено в создание" },
  { icon: "Award", value: "XII–XXI", label: "века истории образования" },
]

export function TechnologySection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-amber-500 font-geist font-semibold tracking-widest uppercase text-sm mb-3">Цифры</p>
          <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Музей в цифрах
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-0 text-left sm:text-center p-5 sm:p-8 rounded-2xl bg-background border border-border hover:border-amber-500/40 transition-all duration-300 slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Icon name={stat.icon as "BookOpen"} size={28} className="text-amber-500 flex-shrink-0 sm:mx-auto sm:mb-4" />
              <div className="flex-1 sm:flex-none">
                <div className="text-2xl sm:text-3xl font-bold text-foreground font-orbitron sm:mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-geist">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}