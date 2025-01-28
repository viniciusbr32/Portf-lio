export function Header() {
  return (
    <header
      className={`sticky top-0 pl-2 z-50 w-full transition-all duration-300 '
      }`}
    >
      <div className="container flex items-center h-16">
        <div className="mr-4 md:flex">
          <a href="/" className="flex items-center mr-6 space-x-2">
            <span className="flex items-center justify-center w-8 h-8 font-bold text-black rounded bg-zinc-50">
              LV
            </span>
          </a>
          <nav className="items-center hidden space-x-6 font-medium md:flex">
            <a href="#about">Sobre</a>
            <a href="#technologies">Tecnologias</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
