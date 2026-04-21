import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Лилия Мухаметова",
    role: "Учитель татарского языка, Казань",
    initials: "ЛМ",
    content:
      "Привела свой класс в музей — дети были в восторге. Интерактивный тест на профориентацию увлёк даже самых непоседливых. Такого я не ожидала!",
  },
  {
    name: "Айдар Хасанов",
    role: "Студент КФУ, педагогический факультет",
    initials: "АХ",
    content:
      "Удивительно, как много можно узнать о профессии учителя через эти экспонаты. Это вдохновляет и укрепляет желание стать педагогом.",
  },
  {
    name: "Наталья Ефимова",
    role: "Ветеран педагогического труда, 40 лет в школе",
    initials: "НЕ",
    content:
      "Нашла здесь учебники, по которым сама училась в детстве. Слёзы радости! Музей сохраняет нашу память и передаёт её следующим поколениям.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-500 font-geist font-semibold tracking-widest uppercase text-sm mb-3">Отзывы</p>
          <h2 className="text-4xl font-bold text-foreground mb-4 font-orbitron">Говорят посетители</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-geist">
            Живые впечатления тех, кто уже открыл для себя музей «Белем»
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <div className="text-amber-500 text-4xl font-orbitron leading-none mb-4">"</div>
                <p className="text-card-foreground mb-6 leading-relaxed font-geist">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-amber-500/20 text-amber-500 font-bold font-geist">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-amber-500 font-geist">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground font-geist">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
