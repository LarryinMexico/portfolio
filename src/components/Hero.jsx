import { motion } from 'framer-motion'
import '../styles/Hero.css'

const Hero = ({ setCurrentSection }) => {
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setCurrentSection(sectionId)
  }

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Main Hero Content */}
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <h1 className="hero-title">
              <span className="title-line">你好，我是</span>
              <span className="title-name">陳為政</span>
            </h1>
            <p className="hero-subtitle">
              全端開發工程師 & AI 應用開發者
            </p>
          </motion.div>

          <motion.div
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <p>
              專精於現代網頁開發與 AI 技術應用，擅長使用 React、Node.js 和 Python
              打造高品質、高效能的數位解決方案。
            </p>
          </motion.div>

          <motion.div
            className="hero-skills"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
          >
            {['React', 'Node.js', 'Python', 'AI/ML', 'RAG', 'NLP'].map((skill, index) => (
              <motion.span
                key={skill}
                className="skill-tag"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <motion.button
              className="glass-btn glass-btn-primary"
              onClick={() => handleScrollToSection('projects')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span>查看作品</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
            
            <motion.button
              className="glass-btn"
              onClick={() => handleScrollToSection('contact')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              聯絡我
            </motion.button>
          </motion.div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={() => handleScrollToSection('about')}
      >
        <div className="scroll-text">向下滿覽</div>
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
