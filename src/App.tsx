import { AboutHero } from './components/about-hero'
import { Footer } from './components/footer'
import { FormContact } from './components/form-contact'
import { Header } from './components/header'
import { Projects } from './components/projects'
import { Technology } from './components/technology'

export function App() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-20">
      <div className="px-6">
        <Header />

        <main>
          <AboutHero />
          <Technology />
          <Projects />
          <FormContact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
