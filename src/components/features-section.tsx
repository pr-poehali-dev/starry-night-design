import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Письменность и книги",
    description: "История татарской письменности с XII века, уникальные рукописи, буквари «алифба», коллекция учебников на русском и татарском языках.",
    emoji: "📜",
    badge: "XII–XIX в.",
  },
  {
    title: "Эволюция школы",
    description: "Интерьер дореволюционных медресе, школьная форма 1950-х, атрибуты пионерской организации — живая история образования.",
    emoji: "🏫",
    badge: "История",
  },
  {
    title: "Педагогические династии",
    description: "Документы, награды и личные истории семей, посвятивших поколения педагогическому призванию Татарстана.",
    emoji: "👨‍👩‍👧‍👦",
    badge: "Наследие",
  },
  {
    title: "Интерактивные зоны",
    description: "Тест на профориентацию «Трамвай желаний», цифровой Атлас профессий будущего, мультимедийные методические комплексы.",
    emoji: "🖥️",
    badge: "Интерактив",
  },
  {
    title: "Награды педагогов",
    description: "Экспозиция почётных знаков, медалей и орденов, отражающая вклад учителей в историю республики.",
    emoji: "🏅",
    badge: "Гордость",
  },
  {
    title: "Карта учебных заведений",
    description: "Интерактивная карта всех учебных заведений Республики Татарстан, готовящих педагогов нового поколения.",
    emoji: "🗺️",
    badge: "РТ",
  },
]

export function FeaturesSection() {
  return (
    <section id="exposition" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-500 font-geist font-semibold tracking-widest uppercase text-sm mb-3">Экспозиция</p>
          <h2 className="text-4xl font-bold text-foreground mb-4 font-orbitron">Что вы увидите в музее</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-geist">
            Путешествие сквозь века — от средневековых медресе до цифровой школы будущего
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{feature.emoji}</span>
                  <Badge variant="secondary" className="bg-accent/20 text-amber-500 border border-amber-500/30">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground font-orbitron">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed font-geist">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
