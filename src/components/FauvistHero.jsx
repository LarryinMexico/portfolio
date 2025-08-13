import React from 'react';
import '../styles/FauvistHero.css';

const FauvistHero = ({ setCurrentSection }) => {
  return (
    <section className="fauvist-hero">
      <div className="fauvist-hero-content">
        <div className="fauvist-hero-text">
          <h1 className="fauvist-hero-title">
            <span className="fauvist-word word-1">創意</span>
            <span className="fauvist-word word-2">與</span>
            <span className="fauvist-word word-3">技術</span>
            <span className="fauvist-word word-4">的</span>
            <span className="fauvist-word word-5">融合</span>
          </h1>
          
          <p className="fauvist-hero-subtitle">
            用野獸派的色彩與AI的智慧，打造數位世界的新體驗
          </p>
          
          <div className="fauvist-hero-buttons">
            <button 
              className="fauvist-btn fauvist-btn-primary"
              onClick={() => setCurrentSection('projects')}
            >
              探索作品
            </button>
            <button 
              className="fauvist-btn fauvist-btn-secondary"
              onClick={() => setCurrentSection('about')}
            >
              認識我
            </button>
          </div>
        </div>
        
        <div className="fauvist-hero-visual">
          <div className="fauvist-shape shape-1"></div>
          <div className="fauvist-shape shape-2"></div>
          <div className="fauvist-shape shape-3"></div>
          <div className="fauvist-shape shape-4"></div>
          <div className="fauvist-shape shape-5"></div>
          
          <div className="fauvist-paint-splash splash-1"></div>
          <div className="fauvist-paint-splash splash-2"></div>
          <div className="fauvist-paint-splash splash-3"></div>
        </div>
      </div>
      
      <div className="fauvist-hero-bg">
        <div className="fauvist-bg-element bg-1"></div>
        <div className="fauvist-bg-element bg-2"></div>
        <div className="fauvist-bg-element bg-3"></div>
      </div>
    </section>
  );
};

export default FauvistHero;
