import React from 'react';
import '../styles/GlassProjects.css';
import { projects } from './Projects';

const GlassProjects = ({ setPreview }) => {
  const techColors = {
    'AI': 'rgba(255, 119, 198, 0.8)',
    'React': 'rgba(120, 219, 255, 0.8)',
    'Node.js': 'rgba(120, 198, 119, 0.8)',
    'Vue.js': 'rgba(198, 255, 119, 0.8)',
    'Python': 'rgba(255, 198, 119, 0.8)'
  };

  const getProjectTech = (title) => {
    if (title.includes('AI') || title.includes('智慧')) return 'AI';
    if (title.includes('RAG')) return 'AI';
    if (title.includes('系統')) return 'Vue.js';
    return 'React';
  };

  return (
    <section className="glass-projects">
      <div className="glass-projects-container">
        <div className="glass-projects-header">
          <h2 className="glass-section-title">我的專案作品</h2>
          <p className="glass-section-subtitle">
            運用現代技術堆疊，打造創新的數位解決方案
          </p>
        </div>

        <div className="glass-projects-grid">
          {projects.map((project, index) => {
            const tech = getProjectTech(project.title);
            const techColor = techColors[tech];
            
            return (
              <div
                key={index}
                className="glass-project-card"
                onClick={() => setPreview(index)}
              >
                <div className="glass-project-image-container">
                  <img 
                    src={project.imgs[0]} 
                    alt={project.title}
                    className="glass-project-image"
                  />
                  <div className="glass-project-overlay">
                    <div className="overlay-content">
                      <span className="overlay-icon">•</span>
                      <span className="overlay-text">查看詳情</span>
                    </div>
                  </div>
                  <div 
                    className="glass-project-tech-badge"
                    style={{ background: techColor }}
                  >
                    {tech}
                  </div>
                </div>
                
                <div className="glass-project-content">
                  <h3 className="glass-project-title">{project.title}</h3>
                  
                  <div className="glass-project-description">
                    {project.intro.slice(0, 1).map((item, idx) => (
                      <p key={idx}>
                        {item.length > 80 ? item.substring(0, 80) + '...' : item}
                      </p>
                    ))}
                  </div>
                  
                  <div className="glass-project-features">
                    {project.intro.length > 1 && (
                      <div className="feature-item">
                        <span className="feature-icon">•</span>
                        <span>{project.intro[1].substring(0, 40)}...</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="glass-project-actions">
                    <button 
                      className="glass-btn glass-project-preview-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPreview(index);
                      }}
                    >
                      <span>預覽</span>
                    </button>
                    
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glass-btn glass-btn-primary glass-project-demo-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>線上演示</span>
                      <span className="btn-external">↗</span>
                    </a>
                  </div>
                </div>
                
                <div className="glass-project-decoration">
                  <div className="decoration-dot dot-1"></div>
                  <div className="decoration-dot dot-2"></div>
                  <div className="decoration-line"></div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="glass-projects-footer">
          <div className="glass-card projects-summary">
            <div className="summary-content">
              <h3>專案統計</h3>
              <div className="summary-stats">
                <div className="summary-stat">
                  <span className="stat-value">{projects.length}</span>
                  <span className="stat-label">完成專案</span>
                </div>
                <div className="summary-stat">
                  <span className="stat-value">100%</span>
                  <span className="stat-label">成功率</span>
                </div>
                <div className="summary-stat">
                  <span className="stat-value">AI</span>
                  <span className="stat-label">專精技術</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlassProjects;
