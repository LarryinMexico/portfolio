import React from 'react';
import '../styles/FauvistContact.css';

const FauvistContact = () => {
  return (
    <section className="fauvist-contact">
      <div className="fauvist-contact-content">
        <div className="fauvist-contact-header">
          <h2 className="fauvist-section-title">讓我們一起創作</h2>
          <p className="fauvist-section-subtitle">
            準備好用色彩與代碼改變世界了嗎？
          </p>
        </div>

        <div className="fauvist-contact-grid">
          <div className="fauvist-contact-info">
            <div className="fauvist-contact-card card-1">
              <div className="fauvist-contact-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:sam92.chen@gmail.com" className="fauvist-contact-link">
                sam92.chen@gmail.com
              </a>
            </div>

            <div className="fauvist-contact-card card-2">
              <div className="fauvist-contact-icon">🔗</div>
              <h3>GitHub</h3>
              <a href="https://github.com/LarryinMexico" target="_blank" rel="noopener noreferrer" className="fauvist-contact-link">
                LarryinMexico
              </a>
            </div>

            <div className="fauvist-contact-card card-3">
              <div className="fauvist-contact-icon">💼</div>
              <h3>LinkedIn</h3>
              <a href="#" className="fauvist-contact-link">
                Sam Chen
              </a>
            </div>

            <div className="fauvist-contact-card card-4">
              <div className="fauvist-contact-icon">📄</div>
              <h3>履歷</h3>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="fauvist-contact-link">
                查看履歷
              </a>
            </div>
          </div>

          <div className="fauvist-contact-message">
            <div className="fauvist-message-container">
              <h3>合作邀請</h3>
              <p>
                無論是AI專案開發、網站設計，還是創意合作，
                我都期待與你一起探索技術與藝術的無限可能。
              </p>
              
              <div className="fauvist-collaboration-areas">
                <span className="fauvist-area">AI開發</span>
                <span className="fauvist-area">網站設計</span>
                <span className="fauvist-area">UI/UX</span>
                <span className="fauvist-area">創意諮詢</span>
              </div>

              <button className="fauvist-contact-btn">
                開始對話
              </button>
            </div>

            <div className="fauvist-contact-art">
              <div className="fauvist-art-element art-1"></div>
              <div className="fauvist-art-element art-2"></div>
              <div className="fauvist-art-element art-3"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="fauvist-contact-footer">
        <p>© 2025 Sam Chen - 用野獸派精神打造的數位作品集</p>
      </div>
    </section>
  );
};

export default FauvistContact;
