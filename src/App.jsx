import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Background3D from './components/Background3D'

function App() {
  const [currentSection, setCurrentSection] = useState('home')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && scrollPosition >= section.offsetTop) {
          setCurrentSection(sections[i])
          break
        }
      }
    }

    // Loading animation
    setTimeout(() => setIsLoading(false), 2000)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="app">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="loading-content">
              <div className="loading-logo">WC</div>
              <div className="loading-text">載入中...</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Background */}
      <Background3D />
      
      {/* Cursor Glow Effect */}
      <motion.div 
        className="cursor-glow" 
        animate={{
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
        }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 50,
          restDelta: 0.001
        }}
      />
      
      {/* Animated Background */}
      <div className="background-container">
        <div className="gradient-bg"></div>
      </div>

      {/* Navigation */}
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      {/* Main Content */}
      <main className="main-content">
        <section id="home">
          <Hero setCurrentSection={setCurrentSection} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
