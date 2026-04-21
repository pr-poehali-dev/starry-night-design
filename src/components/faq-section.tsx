import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Сколько стоит посещение музея?",
      answer:
        "Вход в музей полностью бесплатный для всех категорий посетителей. Экскурсии и аудиогиды также предоставляются бесплатно.",
    },
    {
      question: "Как записаться на групповую экскурсию?",
      answer:
        "Для групп от 10 до 25 человек обязательна предварительная заявка через Яндекс.Форму. Музей принимает группы с 8:00 до 20:00. Оставьте заявку на сайте — мы свяжемся с вами для подтверждения времени.",
    },
    {
      question: "Какой режим работы музея?",
      answer:
        "Для индивидуальных посетителей музей открыт с 9:00 до 17:00. Для групп — с 8:00 до 20:00 по предварительной записи. Выходной день — воскресенье. Технический день — четверг.",
    },
    {
      question: "Где находится музей?",
      answer:
        "Музей расположен в Казани по адресу: улица Татарстан, дом 2 — первый этаж Института филологии и межкультурной коммуникации Казанского федерального университета (КФУ).",
    },
    {
      question: "Что такое интерактивные зоны?",
      answer:
        "В музее есть несколько интерактивных зон: «Трамвай желаний» — тест на профориентацию, цифровой Атлас профессий будущего, интерактивная карта учебных заведений республики и мультимедийные методические комплексы. Они подходят как для детей, так и для взрослых.",
    },
    {
      question: "Можно ли прийти с детьми?",
      answer:
        "Конечно! Музей рассчитан на посетителей всех возрастов — от школьников до ветеранов педагогического труда. Интерактивные зоны особенно понравятся детям и подросткам. Семейное посещение абсолютно бесплатно.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-[hsl(214,60%,5%)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-amber-500 font-geist font-semibold tracking-widest uppercase text-sm mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-blue-100/70 max-w-3xl mx-auto font-geist">
            Всё, что нужно знать перед визитом в музей «Белем»
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-amber-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-amber-400 font-geist px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-blue-100/70 leading-relaxed px-6 pb-4 font-geist">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
