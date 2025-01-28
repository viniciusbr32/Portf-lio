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
          <div id="about">
            <AboutHero />
          </div>
          <div id="technologies">
            <Technology />
          </div>
          <div className="py-20 text-center" id="projects">
            <h3 className="mb-6 text-3xl font-bold">Projetos em destaque</h3>
            <p className="text-lg text-zinc-300 md:text-lg">
              Conheça alguns dos meus trabalhos mais recentes e impactantes
            </p>
            <ProjectCarousel projects={ProjectsOption} />
          </div>
          <div id="#contact" className="py-40">
            <FormContact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
