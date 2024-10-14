import { TecnologyOption } from '@/constants/tecnologyOptions'
import { Card, CardContent } from './ui/card'

export function Technology() {
  return (
    <div className="py-10 text-center" id="technology">
      <h2 className="mb-6 text-3xl font-bold">Habilidades</h2>

      <p className="pt-2 text-lg text-zinc-300 md:text-lg">
        Essas são as tecnologias que uso para desenvolver aplicações eficientes
        e escaláveis, garantindo qualidade e robustez no código:
      </p>

      <div className="grid grid-cols-2 gap-4 pt-10 md:grid-cols-3 lg:grid-cols-4 ">
        {TecnologyOption.map(tecnology => (
          <Card key={tecnology.title} className="bg-zinc-900 border-zinc-700">
            <CardContent className="flex items-center p-3 md:p-4">
              <img
                src={tecnology.imageUrl}
                alt={tecnology.title}
                className="w-5 h-5 mr-2"
              />
              <span className="text-sm">{tecnology.title}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
