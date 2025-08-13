import React from 'react';
import '../styles/FauvistProjects.css';
import { projects } from './Projects';

const FauvistProjects = ({ setPreview }) => {
  const projectColors = ['#ff6b35', '#f7931e', '#ffb400', '#c60c30', '#9b59b6'];

  return (
    <section className="fauvist-projects">
      <div className="fauvist-projects-header">
        <h2 className="fauvist-section-title">我的創作世界</h2>
        <p className="fauvist-section-subtitle">
          每個專案都是一次色彩的冒險，技術的探索
        </p>
      </div>

      <div className="fauvist-projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="fauvist-project-card"
            style={{ '--card-color': projectColors[index % projectColors.length] }}
            onClick={() => setPreview(index)}
          >
            <div className="fauvist-project-image-container">
              <img 
                src={project.imgs[0]} 
                alt={project.title}
                className="fauvist-project-image"
              />
              <div className="fauvist-project-overlay">
                <span className="fauvist-project-view">查看詳情</span>
              </div>
            </div>
            
            <div className="fauvist-project-content">
              <h3 className="fauvist-project-title">{project.title}</h3>
              <div className="fauvist-project-intro">
                {project.intro.map((item, idx) => (
                  <p key={idx} className="fauvist-project-description">
                    {item.substring(0, 60)}...
                  </p>
                ))}
              </div>
              
              <div className="fauvist-project-actions">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="fauvist-project-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Demo
                </a>
              </div>
            </div>
            
            <div className="fauvist-project-decoration">
              <div className="fauvist-paint-dot dot-1"></div>
              <div className="fauvist-paint-dot dot-2"></div>
              <div className="fauvist-paint-dot dot-3"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="fauvist-projects-bg">
        <div className="fauvist-bg-shape bg-shape-1"></div>
        <div className="fauvist-bg-shape bg-shape-2"></div>
        <div className="fauvist-bg-shape bg-shape-3"></div>
      </div>
    </section>
  );
};

export default FauvistProjects;
