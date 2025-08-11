import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    document.documentElement.classList.remove('dark')
    try { localStorage.removeItem('theme') } catch {}
  }, [])

  return (
    <div className="min-h-screen bg-retro-beige retro-scrollbar overflow-x-hidden max-w-full">
      <Navbar />
      
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
