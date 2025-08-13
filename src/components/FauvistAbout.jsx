import React from 'react';
import '../styles/FauvistAbout.css';

const FauvistAbout = () => {
  return (
    <section className="fauvist-about">
      <div className="fauvist-about-content">
        <div className="fauvist-about-header">
          <h2 className="fauvist-section-title">關於我的色彩旅程</h2>
          <div className="fauvist-title-decoration">
            <div className="fauvist-brush-line line-1"></div>
            <div className="fauvist-brush-line line-2"></div>
            <div className="fauvist-brush-line line-3"></div>
          </div>
        </div>

        <div className="fauvist-about-grid">
          <div className="fauvist-about-text">
            <div className="fauvist-text-block block-1">
              <h3>創意開發者</h3>
              <p>
                我是Sam Chen，一位充滿熱情的開發者，專注於AI技術與創新應用的結合。
                就像野獸派畫家用大膽的色彩表達情感，我用代碼創造數位世界的新可能。
              </p>
            </div>

            <div className="fauvist-text-block block-2">
              <h3>技術專長</h3>
              <div className="fauvist-skills">
                <span className="fauvist-skill">人工智慧</span>
                <span className="fauvist-skill">機器學習</span>
                <span className="fauvist-skill">Full Stack開發</span>
                <span className="fauvist-skill">UI/UX設計</span>
                <span className="fauvist-skill">雲端部署</span>
              </div>
            </div>

            <div className="fauvist-text-block block-3">
              <h3>設計哲學</h3>
              <p>
                相信技術與藝術的完美融合，每個專案都是一幅數位畫作。
                用野獸派的大膽與創新精神，打破傳統界限，創造獨特的用戶體驗。
              </p>
            </div>
          </div>

          <div className="fauvist-about-visual">
            <div className="fauvist-portrait">
              <div className="fauvist-portrait-frame">
                <div className="fauvist-portrait-content">
                  <div className="fauvist-avatar-placeholder">
                    <span>SC</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="fauvist-color-palette">
              <div className="fauvist-color-circle color-1"></div>
              <div className="fauvist-color-circle color-2"></div>
              <div className="fauvist-color-circle color-3"></div>
              <div className="fauvist-color-circle color-4"></div>
              <div className="fauvist-color-circle color-5"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="fauvist-about-bg">
        <div className="fauvist-paint-stroke stroke-bg-1"></div>
        <div className="fauvist-paint-stroke stroke-bg-2"></div>
        <div className="fauvist-paint-stroke stroke-bg-3"></div>
      </div>
    </section>
  );
};

export default FauvistAbout;
