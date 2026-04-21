import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-[hsl(214,60%,5%)]/95 backdrop-blur-md border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="font-orbitron text-xl font-bold text-white">
              Белем<span className="text-amber-400"> · Знание</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#exposition" className="font-geist text-white hover:text-amber-400 transition-colors duration-200">
                Экспозиция
              </a>
              <a href="#visitors" className="font-geist text-white hover:text-amber-400 transition-colors duration-200">
                Посетителям
              </a>
              <a href="#about" className="font-geist text-white hover:text-amber-400 transition-colors duration-200">
                О музее
              </a>
              <a href="#faq" className="font-geist text-white hover:text-amber-400 transition-colors duration-200">
                Вопросы
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-amber-500 hover:bg-amber-600 text-[hsl(214,60%,5%)] font-geist font-semibold border-0">
              Записаться на экскурсию
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-400 transition-colors duration-200"
            >
              {isOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[hsl(214,60%,5%)]/98 border-t border-amber-500/20">
              <a
                href="#exposition"
                className="block px-3 py-2 font-geist text-white hover:text-amber-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Экспозиция
              </a>
              <a
                href="#visitors"
                className="block px-3 py-2 font-geist text-white hover:text-amber-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Посетителям
              </a>
              <a
                href="#about"
                className="block px-3 py-2 font-geist text-white hover:text-amber-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                О музее
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 font-geist text-white hover:text-amber-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Вопросы
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-[hsl(214,60%,5%)] font-geist font-semibold border-0">
                  Записаться на экскурсию
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
