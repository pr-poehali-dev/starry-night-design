import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-[hsl(214,60%,3%)] border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-2 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-1">
              Музей <span className="text-amber-400">«Белем»</span>
            </h2>
            <p className="text-amber-500/70 text-sm font-geist mb-4">Музей образования Республики Татарстан</p>
            <p className="font-geist text-blue-100/60 mb-6 max-w-md">
              Первый в Татарстане государственный музей, полностью посвящённый истории образования.
              Структурное подразделение КФУ.
            </p>
            <div className="space-y-2 text-blue-100/60 text-sm font-geist">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-amber-400 flex-shrink-0" />
                <span>г. Казань, ул. Татарстан, д. 2, 1-й этаж ИФМК КФУ</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-amber-400 flex-shrink-0" />
                <span>Пн–Ср, Пт–Сб: 9:00–17:00</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-geist text-white font-semibold mb-4">Музей</h3>
            <ul className="space-y-2">
              <li>
                <a href="#exposition" className="font-geist text-blue-100/60 hover:text-amber-400 transition-colors duration-200">
                  Экспозиция
                </a>
              </li>
              <li>
                <a href="#applications" className="font-geist text-blue-100/60 hover:text-amber-400 transition-colors duration-200">
                  История образования
                </a>
              </li>
              <li>
                <a href="#about" className="font-geist text-blue-100/60 hover:text-amber-400 transition-colors duration-200">
                  О музее
                </a>
              </li>
              <li>
                <a href="#faq" className="font-geist text-blue-100/60 hover:text-amber-400 transition-colors duration-200">
                  Вопросы и ответы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-geist text-white font-semibold mb-4">Посетителям</h3>
            <ul className="space-y-2">
              <li>
                <a href="#visitors" className="font-geist text-blue-100/60 hover:text-amber-400 transition-colors duration-200">
                  Режим работы
                </a>
              </li>
              <li>
                <a href="#visitors" className="font-geist text-blue-100/60 hover:text-amber-400 transition-colors duration-200">
                  Записаться на экскурсию
                </a>
              </li>
              <li>
                <a href="#" className="font-geist text-blue-100/60 hover:text-amber-400 transition-colors duration-200">
                  Для школ и вузов
                </a>
              </li>
              <li>
                <a href="#" className="font-geist text-blue-100/60 hover:text-amber-400 transition-colors duration-200">
                  Новости и события
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-amber-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-geist text-blue-100/40 text-sm">
              © 2025 Музей «Белем». Структурное подразделение КФУ. Все права защищены.
            </p>
            <p className="font-geist text-blue-100/40 text-sm text-center">
              «Белем» — в переводе с татарского «<span className="text-amber-500/70">Знание</span>»
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}