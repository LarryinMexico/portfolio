import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import '../styles/Header.css'

const Header = ({ currentSection, setCurrentSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: '首頁', id: 'home' },
    { name: '關於我', id: 'about' },
    { name: '專案作品', id: 'projects' },
    { name: '聯絡我', id: 'contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setCurrentSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header 
      className={`header ${isScrolled ? 'header-scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
    >
      <div className="header-container">
        <motion.div 
          className="header-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavClick('home')}
        >
          <div className="logo-icon">WC</div>
          <div className="logo-text">Wei Cheng Chen</div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav">
          {navigation.map((item) => (
            <motion.button
              key={item.id}
              className={`nav-item ${currentSection === item.id ? 'nav-item-active' : ''}`}
              onClick={() => handleNavClick(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {item.name}
              {currentSection === item.id && (
                <motion.div
                  className="nav-indicator"
                  layoutId="navIndicator"
                  transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'hamburger-open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </motion.button>

        {/* Mobile Navigation */}
        <motion.nav 
          className={`mobile-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}
          initial={false}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            y: isMobileMenuOpen ? 0 : -20
          }}
          transition={{ duration: 0.3 }}
        >
          {navigation.map((item, index) => (
            <motion.button
              key={item.id}
              className={`mobile-nav-item ${currentSection === item.id ? 'mobile-nav-item-active' : ''}`}
              onClick={() => handleNavClick(item.id)}
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : -20
              }}
              transition={{
                duration: 0.3,
                delay: isMobileMenuOpen ? index * 0.1 : 0
              }}
            >
              {item.name}
            </motion.button>
          ))}
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className="mobile-menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </motion.header>
  )
}

export default Header
