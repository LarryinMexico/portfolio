import React from 'react';
import '../styles/GlassAbout.css';
import avatarSvg from '../assets/avatar.svg';

const GlassAbout = () => {
  const skills = [
    { name: 'React & Vue.js', level: 90, icon: '•' },
    { name: 'Node.js & Python', level: 85, icon: '•' },
    { name: 'AI & Machine Learning', level: 88, icon: '•' },
    { name: 'UI/UX Design', level: 82, icon: '•' },
    { name: 'Database Design', level: 80, icon: '•' },
    { name: 'Cloud Deployment', level: 75, icon: '•' }
  ];

  const experiences = [
    {
      title: '智慧導遊系統開發',
      period: '2024',
      description: '基於 Dify AI 技術開發個人化旅遊系統，整合無障礙介面設計',
      tech: ['AI', 'Dify', 'React', 'UI/UX']
    },
    {
      title: 'RAG 問答系統',
      period: '2024',
      description: '整合 Sentence-BERT 與 LLaMA 模型，開發智能課程問答平台',
      tech: ['Python', 'LLaMA', 'FastAPI', 'AI']
    },
    {
      title: '校園服務平台',
      period: '2024',
      description: '全端開發校園廁所評價系統，結合地圖 API 與雲端部署',
      tech: ['Vue.js', 'GCP', 'Mapbox', 'FastAPI']
    }
  ];

  return (
    <section className="glass-about">
      <div className="glass-about-container">
        <div className="glass-about-header">
          <h2 className="glass-section-title">關於我</h2>
          <p className="glass-section-subtitle">
            熱愛技術創新，專注於AI與現代網頁開發的融合
          </p>
        </div>

        <div className="glass-about-content">
          <div className="glass-about-intro">
            <div className="glass-card about-card">
              <div className="about-avatar">
                <div className="avatar-placeholder">
                  <img src={avatarSvg} alt="Sam Chen Avatar" className="about-avatar-image" />
                </div>
                <div className="avatar-status">
                  <div className="status-dot"></div>
                  <span>Available for work</span>
                </div>
              </div>
              
              <div className="about-text">
                <h3>Sam Chen</h3>
                <p className="about-role">Full Stack Developer & AI Enthusiast</p>
                <p className="about-description">
                  我是一位充滿熱情的全端開發者，專注於現代網頁技術與AI的整合應用。
                  相信技術應該為人們創造更美好的體驗，致力於開發創新且實用的解決方案。
                </p>
                
                <div className="about-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">•</span>
                    <span>專注於用戶體驗設計</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">•</span>
                    <span>熱愛學習新技術</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">•</span>
                    <span>創新思維解決問題</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-about-skills">
            <div className="glass-card skills-card">
              <h3>技能專長</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-about-experience">
            <div className="glass-card experience-card">
              <h3>專案經驗</h3>
              <div className="experience-timeline">
                {experiences.map((exp, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4>{exp.title}</h4>
                        <span className="timeline-period">{exp.period}</span>
                      </div>
                      <p className="timeline-description">{exp.description}</p>
                      <div className="timeline-tech">
                        {exp.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GlassAbout;
