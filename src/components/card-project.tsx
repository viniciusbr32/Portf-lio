import { Github } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

interface CardProps {
  imageUrl: string
  title: string
  link: string
}

export function CardProject({ imageUrl, title, link }: CardProps) {
  return (
    <div className="p-1">
      <Card className="flex flex-col transition-shadow duration-300 shadow-lg bg-zinc-950 hover:shadow-xl">
        <CardHeader>
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-48 rounded-lg "
          />
        </CardHeader>
        <CardContent className="flex items-center justify-between flex-grow">
          <CardTitle className="mb-2 text-xl font-semibold ">{title}</CardTitle>
          <Button variant="outline" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
