import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Press from './components/Press'
import Moments from './components/Moments'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ui/ScrollProgress'
import BackToTop from './components/ui/BackToTop'
import Intro from './components/ui/Intro'

export default function App() {
  return (
    <>
      <Intro />
      <div className="noise" aria-hidden="true" />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Press />
        <Moments />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
