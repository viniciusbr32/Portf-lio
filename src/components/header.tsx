import {
  BugOff,
  Code,
  FolderIcon,
  Github,
  HomeIcon,
  LinkedinIcon,
  MenuIcon,
  User,
} from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeSheet = () => setIsOpen(false)

  return (
    <header className="w-full pb-24 ">
      <div className="fixed top-0 left-0 right-0 mx-auto px-4 z-50 w-full max-w-5xl py-5 backdrop-blur-[3px]">
        <div className="flex items-center justify-between">
          <div className="p-2 transition-all rounded-sm bg-zinc-900 hover:bg-zinc-800">
            <BugOff />
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              className="p-2 transition-all rounded-sm bg-zinc-900 hover:bg-zinc-800"
              onClick={() => setIsOpen(true)}
            >
              <MenuIcon />
            </SheetTrigger>
            <SheetContent className="pt-16">
              <div className="flex flex-col h-full">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex-1">
                  <nav>
                    <ul className="flex flex-col pt-5 space-y-3">
                      {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                      <a href="#">
                        <button
                          type="button"
                          className="flex items-center w-full gap-3 px-2 py-2 rounded-sm w-fukl hover:bg-zinc-800 hover:text-accent-foreground"
                          onClick={closeSheet}
                        >
                          {' '}
                          <HomeIcon /> Home
                        </button>
                      </a>
                      <a href="#technology">
                        <button
                          type="button"
                          className="flex items-center w-full gap-3 px-2 py-2 rounded-sm hover:bg-zinc-800 hover:text-accent-foreground"
                          onClick={closeSheet}
                        >
                          {' '}
                          <Code /> Tecnologias
                        </button>
                      </a>
                      <a href="#projects">
                        <button
                          type="button"
                          className="flex items-center w-full gap-3 px-2 py-2 rounded-sm hover:bg-zinc-800 hover:text-accent-foreground"
                          onClick={closeSheet}
                        >
                          {' '}
                          <FolderIcon />
                          Projetos
                        </button>
                      </a>

                      <a href="#contact">
                        <button
                          type="button"
                          className="flex items-center w-full gap-3 px-2 py-2 transition duration-300 ease-linear rounded-sm hover:bg-zinc-800 hover:text-accent-foreground"
                          onClick={closeSheet}
                        >
                          {' '}
                          <User /> Contatos
                        </button>
                      </a>
                    </ul>
                  </nav>
                </div>
                <div className="flex w-full gap-3 px-2 py-4 border-t ">
                  <a href="https://github.com/viniciusbr32" target="blank">
                    <div className="px-2 py-2 transition-all rounded-sm hover:bg-zinc-800">
                      <Github />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/luiz-vinícius-38182b162/"
                    target="blank"
                  >
                    <div className="px-2 py-2 transition-all rounded-sm hover:bg-zinc-800">
                      <LinkedinIcon />
                    </div>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
