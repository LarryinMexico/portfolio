import { motion } from 'framer-motion'
import '../styles/About.css'

const About = () => {
  const skills = [
    {
      category: '前端開發',
      items: ['React', 'Vue.js', 'JavaScript/TypeScript', 'HTML5/CSS3', 'Sass/SCSS']
    },
    {
      category: '後端開發',
      items: ['Node.js', 'Express', 'Python', 'Django/Flask', 'RESTful API']
    },
    {
      category: 'AI & 機器學習',
      items: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'RAG技術']
    },
    {
      category: '工具 & 技術',
      items: ['Git', 'Docker', 'AWS', '資料庫設計', 'Agile開發']
    }
  ]

  const experiences = [
    {
      title: '全端開發工程師',
      company: '自由接案',
      period: '2023 - 至今',
      description: '為各種企業客戶開發現代化網站和應用程式'
    },
    {
      title: 'AI 應用開發者',
      company: '學術研究',
      period: '2022 - 2023',
      description: '專精於自然語言處理和機器學習模型開發'
    }
  ]

  return (
    <section className="about">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">關於我</h2>
          <p className="section-subtitle">
            空熱情的全端開發工程師，專精於打造美觀及實用的數位體驗
          </p>
        </motion.div>

        <div className="about-content">
          {/* Personal Story */}
          <motion.div
            className="about-story"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass story-card">
              <h3>我的故事</h3>
              <p>
                我是一名充滿熱情的全端開發工程師，擅長將創意與技術完美結合。
                從前端使用者界面到後端數據處理，我都能提供完整的解決方案。
              </p>
              <p>
                近年來深耕 AI 技術領域，特別在自然語言處理和 RAG 技術方面有深入研究。
                我相信技術的力量能夠改變世界，並致力於開發有意義的產品。
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="about-skills"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="glass skills-card">
              <h3>技能專長</h3>
              <div className="skills-grid">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={skillGroup.category}
                    className="skill-group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="skill-category">{skillGroup.category}</h4>
                    <div className="skill-items">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          className="skill-item"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + skillIndex * 0.05
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          viewport={{ once: true }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          className="about-experience"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="experience-title">經驗歷程</h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="glass timeline-card">
                  <div className="timeline-dot"></div>
                  <h4>{exp.title}</h4>
                  <div className="timeline-meta">
                    <span className="company">{exp.company}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                  <p>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Values */}
        <motion.div
          className="about-values"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="values-grid">
            {[
              {
                icon: '🚀',
                title: '持續學習',
                description: '永不停止學習新技術，跟上技術潮流'
              },
              {
                icon: '✨',
                title: '品質優先',
                description: '追求卓越，永不妥協於代碼品質'
              },
              {
                icon: '🤝',
                title: '團隊合作',
                description: '相信團隊的力量，善於溝通協作'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="glass value-card"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
