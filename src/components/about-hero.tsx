import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

export function AboutHero() {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden">
      <div className="container relative z-10 text-center text-white">
        <h1 className="mb-4 text-5xl font-extrabold animate-fade-in-up">
          Luiz Vinicius
          <br />
          Desenvolvedor Front-end
        </h1>
        <p className="mb-8 text-xl animate-fade-in-up animation-delay-200">
          Transformando ideias em soluções digitais inovadoras
        </p>
        <Button
          asChild
          size="lg"
          className="animate-fade-in-up animation-delay-400"
        >
          <a href="#projetos">
            Ver Projetos
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </section>
  )
}
