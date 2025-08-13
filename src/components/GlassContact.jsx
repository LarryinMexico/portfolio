import React, { useState } from 'react';
import '../styles/GlassContact.css';

const GlassContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: '•',
      title: 'Email',
      value: 'sam92.chen@gmail.com',
      link: 'mailto:sam92.chen@gmail.com',
      description: '最快的聯絡方式'
    },
    {
      icon: '•',
      title: 'GitHub',
      value: 'LarryinMexico',
      link: 'https://github.com/LarryinMexico',
      description: '查看我的代碼作品'
    },
    {
      icon: '•',
      title: 'LinkedIn',
      value: 'Sam Chen',
      link: '#',
      description: '專業聯絡'
    },
    {
      icon: '•',
      title: '履歷',
      value: 'Download CV',
      link: '/resume.pdf',
      description: '下載完整履歷'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 這裡可以添加表單提交邏輯
    console.log('Form submitted:', formData);
    alert('感謝您的訊息！我會盡快回覆。');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="glass-contact">
      <div className="glass-contact-container">
        <div className="glass-contact-header">
          <h2 className="glass-section-title">聯絡我</h2>
          <p className="glass-section-subtitle">
            讓我們一起討論您的想法，創造令人驚艷的數位體驗
          </p>
        </div>

        <div className="glass-contact-content">
          <div className="glass-contact-info">
            <div className="glass-card contact-intro-card">
              <div className="contact-intro-content">
                <div className="contact-intro-icon">•</div>
                <h3>準備開始合作了嗎？</h3>
                <p>
                  無論是新專案的開發、現有系統的優化，還是技術諮詢，
                  我都樂意為您提供專業的協助。讓我們一起將創意變為現實！
                </p>
                
                <div className="contact-availability">
                  <div className="availability-status">
                    <div className="status-indicator available"></div>
                    <span>目前有空檔，歡迎討論合作</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-methods-grid">
              {contactMethods.map((method, index) => (
                <div key={index} className="glass-card contact-method-card">
                  <div className="contact-method-icon">{method.icon}</div>
                  <h4>{method.title}</h4>
                  <a 
                    href={method.link} 
                    target={method.link.startsWith('http') ? '_blank' : '_self'}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="contact-method-value"
                  >
                    {method.value}
                  </a>
                  <p className="contact-method-description">{method.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-contact-form-section">
            <div className="glass-card contact-form-card">
              <div className="contact-form-header">
                <h3>發送訊息</h3>
                <p>直接透過表單聯絡我，我會在24小時內回覆</p>
              </div>
              
              <form onSubmit={handleSubmit} className="glass-contact-form">
                <div className="form-group">
                  <label htmlFor="name">姓名</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="glass-input"
                    placeholder="請輸入您的姓名"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass-input"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">訊息內容</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass-textarea"
                    placeholder="請描述您的專案需求或想法..."
                    rows={5}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="glass-btn glass-btn-primary form-submit-btn">
                  <span>發送訊息</span>
                  <span className="btn-send-icon">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="glass-contact-footer">
          <div className="glass-card collaboration-card">
            <div className="collaboration-content">
              <h3>合作服務</h3>
              <div className="collaboration-services">
                <div className="service-item">
                  <span className="service-icon">•</span>
                  <div className="service-details">
                    <h4>網站開發</h4>
                    <p>現代化響應式網站與網頁應用程式</p>
                  </div>
                </div>
                
                <div className="service-item">
                  <span className="service-icon">•</span>
                  <div className="service-details">
                    <h4>AI 整合</h4>
                    <p>智能化功能開發與 AI 技術諾詢</p>
                  </div>
                </div>
                
                <div className="service-item">
                  <span className="service-icon">•</span>
                  <div className="service-details">
                    <h4>UI/UX 設計</h4>
                    <p>使用者介面設計與體驗優化</p>
                  </div>
                </div>
                
                <div className="service-item">
                  <span className="service-icon">•</span>
                  <div className="service-details">
                    <h4>效能優化</h4>
                    <p>系統性能提升與技術架構優化</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlassContact;
