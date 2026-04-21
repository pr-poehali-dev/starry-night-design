import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const schedule = [
  {
    category: "Индивидуальные посетители",
    icon: "User",
    hours: "9:00 — 17:00",
    note: "Аудиогид бесплатно",
    highlight: false,
  },
  {
    category: "Группы (10–25 человек)",
    icon: "Users",
    hours: "8:00 — 20:00",
    note: "По предварительной записи",
    highlight: true,
  },
]

const highlights = [
  { icon: "Ticket", text: "Вход бесплатный для всех" },
  { icon: "Headphones", text: "Аудиогиды бесплатно" },
  { icon: "GraduationCap", text: "Экскурсии бесплатные" },
  { icon: "MapPin", text: "Ул. Татарстан, 2, Казань" },
]

export function SafetySection() {
  return (
    <section id="visitors" className="py-24 px-6 bg-[hsl(214,55%,8%)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-500 font-geist font-semibold tracking-widest uppercase text-sm mb-3">Посетителям</p>
          <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">Как нас посетить</h2>
          <p className="text-blue-100/70 text-xl max-w-2xl mx-auto leading-relaxed font-geist">
            Музей открыт для всех. Вход, экскурсии и аудиогиды — полностью бесплатны
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {highlights.map((item, i) => (
            <div key={i} className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 text-center">
              <Icon name={item.icon as "Ticket"} size={28} className="text-amber-400 mx-auto mb-3" />
              <p className="text-white text-sm font-geist font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {schedule.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl p-7 border ${
                item.highlight
                  ? "bg-amber-500/10 border-amber-500/40"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon name={item.icon as "User"} size={22} className="text-amber-400" />
                <h3 className="text-white font-semibold text-lg font-geist">{item.category}</h3>
              </div>
              <div className="text-3xl font-bold text-amber-400 font-orbitron mb-2">{item.hours}</div>
              <p className="text-blue-200/60 text-sm font-geist">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
              <Icon name="CalendarCheck" size={22} className="text-amber-400" />
            </div>
            <div>
              <p className="text-white font-semibold font-geist">Хотите прийти группой?</p>
              <p className="text-blue-200/60 text-sm font-geist">Оставьте заявку — мы организуем экскурсию в удобное время</p>
            </div>
          </div>
          <Button className="bg-amber-500 hover:bg-amber-400 text-[hsl(214,60%,5%)] font-geist font-bold px-8 whitespace-nowrap pulse-button">
            Записаться на экскурсию
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-blue-200/40 text-sm font-geist">
            Выходной — воскресенье · Технический день — четверг
          </p>
        </div>
      </div>
    </section>
  )
}
