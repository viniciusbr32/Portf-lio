interface ProjectOption {
  image: string
  title: string
  Githublink: string
  id: number
  technologies: string[]
  description: string
  demoLink?: string
}

export const ProjectsOption: ProjectOption[] = [
  {
    id: 1,
    image: '/naped.png',
    title: 'Naped',
    description:
      'O Naped, uma fonte de informações sobre o universo nerd, utilizando uma API para exibir dados e conteúdos de forma dinâmica e acessível.',
    Githublink: 'https://github.com/viniciusbr32/Naped',
    technologies: ['React', 'Vite', 'Javascript'],
    demoLink: 'https://naped-mocha.vercel.app/',
  },
  {
    id: 2,
    image: '/home-blog.png',
    title: 'Conexões infinitas',
    description:
      'Criei o blog Conexões Infinitas para explorar na prática como é trabalhar em um projeto full stack. O blog possui funcionalidades como comentários nas postagens, dashboard para criação de conteúdos, cadastro de tags, mas ainda precisa de melhorias, como o envio de imagens nas publicações.',
    Githublink: 'https://conexoes.vercel.app/',
    technologies: [
      'React',
      'Shadcn',
      'TypeScript',
      'Tailwind  CSS',
      'Node',
      'Express',
      'Prisma',
    ],
    demoLink: 'https://conexoes.vercel.app/',
  },

  {
    id: 3,
    image: '/home-devconnect.png',
    title: 'Dev Connect',
    description:
      'Criei o Dev Connect inspirado em comunidades do Discord, onde desenvolvedores frequentemente procuram projetos para participar. A ideia é centralizar essas oportunidades, conectando devs a projetos de forma prática e acessível.',
    Githublink: 'https://github.com/viniciusbr32/DevConnect',
    technologies: [
      'React',
      'Shadcn',
      'TypeScript',
      'Tailwind  CSS',
      'React Hook Form',
      'Node',
      'Express',
      'Prisma',
    ],
  },
  {
    id: 4,
    image: '/planner.png',
    title: 'Planner ',
    description:
      'O projeto da Rocketseat - Journey - Tem como objetivo ajudar o usuário a organizar viagens à trabalho ou lazer. O usuário pode criar uma viagem com nome, data inicial e final. Dentro da viagem o usuário pode planejar sua viagem adicionando atividades para realizar em cada dia.',
    Githublink: 'https://github.com/viniciusbr32/planner-project-nlw',
    technologies: ['React ', 'TypeScript', 'Shadcn', 'Vite', 'Tailwind  CSS'],
  },
  {
    id: 5,
    image: '/via-cep.png',
    title: 'Via Cep',
    description:
      ' sistema que utiliza a API ViaCEP para buscar informações de um determinado CEP, exibindo dados como endereço, bairro, cidade e estado de forma rápida e prática.',
    Githublink: 'https://github.com/viniciusbr32/ViaCEP',
    technologies: ['Javascript'],
  },
]
