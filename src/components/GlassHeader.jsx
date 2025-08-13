import React from 'react';
import '../styles/GlassHeader.css';
import avatarSvg from '../assets/avatar.svg';

const GlassHeader = ({ currentSection, setCurrentSection }) => {
  const navItems = [
    { id: 'home', label: '首頁', icon: '•' },
    { id: 'projects', label: '作品集', icon: '•' },
    { id: 'about', label: '關於我', icon: '•' },
    { id: 'contact', label: '聯絡', icon: '•' }
  ];

  return (
    <header className="glass-header">
      <div className="glass-header-content">
        <div className="glass-logo">
          <div className="glass-logo-icon">
            <img src={avatarSvg} alt="Sam Chen Avatar" className="avatar-image" />
          </div>
          <div className="glass-logo-text">
            <h1>Sam Chen</h1>
            <span>Full Stack Developer</span>
          </div>
        </div>
        
        <nav className="glass-nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`glass-nav-btn ${currentSection === item.id ? 'active' : ''}`}
              onClick={() => setCurrentSection(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="glass-header-decoration">
          <div className="floating-dot dot-1"></div>
          <div className="floating-dot dot-2"></div>
          <div className="floating-dot dot-3"></div>
        </div>
      </div>
    </header>
  );
};

export default GlassHeader;
