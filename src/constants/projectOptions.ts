interface ProjectOption {
  image: string
  title: string
  link: string
  id: number
  technologies: string[]
  description: string
}

export const ProjectsOption: ProjectOption[] = [
  {
    id: 1,
    image: '/naped.png',
    title: 'Naped',
    description:
      'Plataforma de comércio eletrônico completa com recursos avançados, incluindo pagamentos, gestão de estoque e análises em tempo real.',
    link: 'https://github.com/viniciusbr32/Naped',
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
  },
  {
    id: 2,
    image: '/planner.png',
    title: 'Planner ',
    description:
      'Plataforma de comércio eletrônico completa com recursos avançados, incluindo pagamentos, gestão de estoque e análises em tempo real.',
    link: 'https://github.com/viniciusbr32/planner-project-nlw',
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
  },
  {
    id: 3,
    image: '/via-cep.png',
    title: 'Via Cep',
    description:
      'Plataforma de comércio eletrônico completa com recursos avançados, incluindo pagamentos, gestão de estoque e análises em tempo real.',
    link: 'https://github.com/viniciusbr32/ViaCEP',
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
  },
  {
    id: 4,
    image: '/home-blog.png',
    title: 'Conexões infinitas',
    description:
      'Plataforma de comércio eletrônico completa com recursos avançados, incluindo pagamentos, gestão de estoque e análises em tempo real.',
    link: 'https://conexoes.vercel.app/',
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
  },
]
