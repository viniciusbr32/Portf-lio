import { MessageCircle, StickyNote } from 'lucide-react'
import { Button } from './ui/button'

export function AboutHero() {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-bold capitalize lg:text-5xl ">
        Olá, eu sou Luiz Vinicius
      </h1>
      <p className="text-lg text-zinc-300 ">
        Sou entusiasta em desenvolver interfaces intuitivas e acessíveis,
        atendendo às necessidades dos usuários e aos objetivos da empresa. Além
        disso, tenho a intenção de expandir meus conhecimentos para a área de
        back-end.
      </p>

      <div className="flex items-center justify-center gap-5">
        <Button variant="outline" className="bg-zinc-800 hover:bg-zinc-700">
          <MessageCircle className="w-4 h-4 mr-2" /> Fale comigo
        </Button>
        <Button variant="outline" className="bg-zinc-800 hover:bg-zinc-700">
          <StickyNote className="w-4 h-4 mr-2" /> Curriculo
        </Button>
      </div>
    </div>
  )
}
