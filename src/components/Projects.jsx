import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: '智慧導遊-AI帶你玩轉花蓮',
    imgs: ['/images/1.png'],
    desc: '',
    link: 'https://invigorated-example-485041.framer.app',
    intro: [
      '開發基於Dify AI技術的個人化旅遊系統，解決花蓮公共交通與旅遊規劃問題，提升用戶體驗與效率。',
      '協助設計無障礙介面與實時資訊功能，促進可持續旅遊發展，符合SDG目標，推動花蓮旅遊業經濟增長與社會包容性。',
    ],
  },
  {
    title: 'RAG ON CLASS',
    imgs: ['/images/2.png', '/images/2-1.png'],
    desc: '',
    link: 'https://larryinmexico.github.io/RAG_on_class/frontend/index.html',
    intro: [
      '整合Sentence-BERT與LLaMA模型，獨立開發基於RAG技術的課程問答系統，實現課程文檔處理、智能問答及自動題庫生成等核心功能',
      '完成前後端分離架構(FastAPI+JavaScript)開發與雲端部署，確保系統響應速度與問答準確性',
    ],
  },
  {
    title: '政大廁所系統',
    imgs: ['/images/3.png'],
    desc: '',
    link: 'https://nccu-dbms-g5.vercel.app',
    intro: [
      '開發校園廁所評價地圖應用，整合地理資訊系統與使用者評論功能，提供學生便捷的校園設施查詢服務',
      '運用前後端分離架構（Vue.js + FastAPI），結合雲端部署（GCP）與地圖API（Mapbox），實現高效能且可擴展的校園服務平台',
    ],
  },
];

const Projects = ({ setPreview }) => (
  <section className="projects">
    <h2>作品集</h2>
    <div className="project-list">
      {projects.map((p, i) => (
        <div className="project-card" key={i} onClick={() => setPreview(i)}>
          <img src={p.imgs[0]} alt={p.title} />
          <h3>
            <a href={p.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>{p.title}</a>
          </h3>
          <ul style={{ textAlign: 'left', color: '#fff', margin: '1rem auto', maxWidth: 600, fontSize: '1rem' }}>
            {p.intro && p.intro.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '0.5rem' }}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 