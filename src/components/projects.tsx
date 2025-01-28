import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
}

interface ProjectCarouselProps {
  projects: Project[]
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + projects.length) % projects.length
    )
  }

  const project = projects[currentIndex]

  return (
    <div className="relative pt-10">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <img
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="rounded-lg object-cover w-full h-[400px]"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="mb-2 text-2xl">{project.title}</CardTitle>
          <CardDescription className="mb-4 text-lg">
            {project.description}
          </CardDescription>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies?.map(tech => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="justify-between">
          <Button asChild>
            <a href={`/projetos/${project.id}`}>Ver Detalhes</a>
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={prevProject}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextProject}>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
