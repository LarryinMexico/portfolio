import React from 'react';
import '../styles/GlassHero.css';

const GlassHero = ({ setCurrentSection }) => {
  return (
    <section className="glass-hero">
      <div className="glass-hero-content">
        <div className="glass-hero-text">
          <div className="glass-hero-greeting">
            <span className="greeting-text">Hello, I'm</span>
          </div>
          
          <h1 className="glass-hero-title">
            <span className="title-line">Sam Chen</span>
            <span className="title-subtitle">Full Stack Developer</span>
          </h1>
          
          <p className="glass-hero-description">
            專注於現代網頁開發與 AI 技術整合，創造優雅且高效能的數位體驗。
            運用最新技術堆疊打造創新解決方案。
          </p>
          
          <div className="glass-hero-stats">
            <div className="stat-item glass-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">專案經驗</div>
            </div>
            <div className="stat-item glass-card">
              <div className="stat-number">AI</div>
              <div className="stat-label">技術專精</div>
            </div>
            <div className="stat-item glass-card">
              <div className="stat-number">∞</div>
              <div className="stat-label">學習熱忱</div>
            </div>
          </div>
          
          <div className="glass-hero-actions">
            <button 
              className="glass-btn glass-btn-primary"
              onClick={() => setCurrentSection('projects')}
            >
              <span>探索作品</span>
              <span className="btn-arrow">→</span>
            </button>
            
            <button 
              className="glass-btn"
              onClick={() => setCurrentSection('about')}
            >
              <span>關於我</span>
            </button>
          </div>
        </div>
        
        <div className="glass-hero-visual">
          <div className="glass-hero-card main-card">
            <div className="card-header">
              <div className="card-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="card-title">portfolio.dev</span>
            </div>
            
            <div className="card-content">
              <div className="code-line">
                <span className="code-keyword">const</span>
                <span className="code-variable"> developer</span>
                <span className="code-operator"> = </span>
                <span className="code-string">"Sam Chen"</span>
              </div>
              
              <div className="code-line">
                <span className="code-keyword">const</span>
                <span className="code-variable"> skills</span>
                <span className="code-operator"> = </span>
                <span className="code-bracket">[</span>
              </div>
              
              <div className="code-line indent">
                <span className="code-string">"React"</span>
                <span className="code-operator">,</span>
                <span className="code-string"> "Node.js"</span>
                <span className="code-operator">,</span>
              </div>
              
              <div className="code-line indent">
                <span className="code-string">"AI/ML"</span>
                <span className="code-operator">,</span>
                <span className="code-string"> "UI/UX"</span>
              </div>
              
              <div className="code-line">
                <span className="code-bracket">]</span>
              </div>
              
              <div className="code-line">
                <span className="code-comment">// Ready to create amazing things</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="glass-hero-scroll">
        <div className="scroll-indicator">
          <span>向下滾動</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  );
};

export default GlassHero;
