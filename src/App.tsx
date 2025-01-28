import { AboutHero } from './components/about-hero'
import { Footer } from './components/footer'
import { FormContact } from './components/form-contact'
import { Header } from './components/header'
import { ProjectCarousel } from './components/projects'

import { Technology } from './components/technology'
import { ProjectsOption } from './constants/projectOptions'

export function App() {
  return (
    <div className="w-full mx-auto max-w-7xl ">
      <div className="px-6">
        <Header />

        <main className="">
          <AboutHero />
          <Technology />
          <div className="text-center">
            <h3>Projetos em Destaque </h3>
            <p>Conheça alguns dos meus trabalhos mais recentes e impactantes</p>
            <ProjectCarousel projects={ProjectsOption} />
          </div>
          <FormContact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
