import React from 'react';
import '../styles/FauvistHeader.css';

const FauvistHeader = ({ currentSection, setCurrentSection }) => {
  const navItems = [
    { id: 'home', label: '首頁', color: '#ff6b35' },
    { id: 'projects', label: '作品集', color: '#f7931e' },
    { id: 'about', label: '關於我', color: '#ffb400' },
    { id: 'contact', label: '聯絡', color: '#c60c30' }
  ];

  return (
    <header className="fauvist-header">
      <div className="fauvist-logo">
        <h1 className="fauvist-name">Sam Chen</h1>
        <div className="fauvist-subtitle">創意開發者</div>
      </div>
      
      <nav className="fauvist-nav">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`fauvist-nav-btn ${currentSection === item.id ? 'active' : ''}`}
            style={{ '--btn-color': item.color }}
            onClick={() => setCurrentSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      
      <div className="fauvist-header-decoration">
        <div className="fauvist-brush-stroke stroke-1"></div>
        <div className="fauvist-brush-stroke stroke-2"></div>
        <div className="fauvist-brush-stroke stroke-3"></div>
      </div>
    </header>
  );
};

export default FauvistHeader;
