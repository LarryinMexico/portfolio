import { motion } from 'framer-motion'
import { useState } from 'react'
import '../styles/Projects.css'

const base = import.meta.env.BASE_URL;

const projects = [
  {
    id: 1,
    title: '智慧導遊 - AI 帶你玩轉花蓮',
    category: 'AI 應用',
    image: base + 'images/1.png',
    description: '基於 Dify AI 技術的個人化旅遊系統，解決花蓮公共交通與旅遊規劃問題',
    technologies: ['Dify AI', '自然語言處理', 'React', 'Node.js'],
    link: 'https://invigorated-example-485041.framer.app',
    github: '#',
    features: [
      '個人化旅遊規劃推薦',
      '實時公共交通資訊',
      '智能路線規劃',
      '無障礙介面設計'
    ]
  },
  {
    id: 2,
    title: 'RAG ON CLASS',
    category: 'AI 機器學習',
    image: base + 'images/2.png',
    description: '基於 RAG 技術的智能課程問答系統，整合 Sentence-BERT 與 LLaMA 模型',
    technologies: ['RAG', 'Sentence-BERT', 'LLaMA', 'FastAPI', 'JavaScript'],
    link: 'https://larryinmexico.github.io/RAG_on_class/frontend/index.html',
    github: 'https://github.com/LarryinMexico/RAG_on_class',
    features: [
      '課程文檔自動處理',
      '智能問答系統',
      '自動題庫生成',
      '雲端部署架構'
    ]
  },
  {
    id: 3,
    title: '政大廁所系統',
    category: '全端開發',
    image: base + 'images/3.png',
    description: '校園廁所評價地圖應用，整合地理資訊系統與使用者評論功能',
    technologies: ['Vue.js', 'FastAPI', 'GCP', 'Mapbox', 'PostgreSQL'],
    link: 'https://nccu-dbms-g5.vercel.app',
    github: '#',
    features: [
      '互動式校園地圖',
      '廁所評價系統',
      '實時狀態更新',
      '響應式設計'
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('全部')
  
  const categories = ['全部', 'AI 應用', 'AI 機器學習', '全端開發']
  
  const filteredProjects = filter === '全部' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section className="projects">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">專案作品</h2>
          <p className="section-subtitle">
            探索我的最新作品和技術專案，從 AI 應用到全端開發
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="projects-filter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`filter-btn ${filter === category ? 'filter-btn-active' : ''}`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="glass project-glass-card">
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <motion.div 
                      className="project-actions"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-btn project-btn"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        🚀 查看專案
                      </motion.a>
                      {project.github !== '#' && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass-btn project-btn"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          💻 GitHub
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag tech-more">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="glass modal-content">
                <button 
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </button>
                
                <div className="modal-header">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="modal-image"
                  />
                  <div className="modal-info">
                    <div className="modal-category">{selectedProject.category}</div>
                    <h2 className="modal-title">{selectedProject.title}</h2>
                    <p className="modal-description">{selectedProject.description}</p>
                  </div>
                </div>
                
                <div className="modal-body">
                  <div className="modal-section">
                    <h3>主要功能</h3>
                    <ul className="feature-list">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="modal-section">
                    <h3>技術堆疊</h3>
                    <div className="modal-tech">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="modal-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="modal-actions">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn glass-btn-primary"
                  >
                    🚀 查看專案
                  </a>
                  {selectedProject.github !== '#' && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-btn"
                    >
                      💻 GitHub 原始碼
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export { projects };

export default Projects; 