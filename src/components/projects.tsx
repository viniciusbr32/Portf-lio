import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { ProjectsOption } from '@/constants/projectOptions'

import { CardProject } from './card-project'

export function Projects() {
  return (
    <div className="w-full max-w-4xl py-8 mx-auto text-zinc-100">
      <div className="flex justify-center w-full mb-8 ">
        <h2 className="text-3xl font-bold text-zinc-100">Projetos</h2>
      </div>
      <Carousel className="w-full">
        <CarouselContent>
          {ProjectsOption.map(project => (
            <CarouselItem
              key={project.title}
              className="md:basis-1/2 lg:basis-1/2"
            >
              <div className="p-1">
                <CardProject
                  title={project.title}
                  imageUrl={project.imageUrl}
                  link={project.link}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex bg-zinc-800 text-zinc-100 hover:bg-zinc-700" />
        <CarouselNext className="hidden md:flex bg-zinc-800 text-zinc-100 hover:bg-zinc-700" />
      </Carousel>
    </div>
  )
}
