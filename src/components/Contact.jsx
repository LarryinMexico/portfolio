import { motion } from 'framer-motion'
import { useState } from 'react'
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模擬表單提交
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  const contactInfo = [
    {
      icon: '📞',
      label: '電話',
      value: '0988-918-492',
      href: 'tel:0988918492'
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'sam92.chen@gmail.com',
      href: 'mailto:sam92.chen@gmail.com'
    },
    {
      icon: '👤',
      label: 'LinkedIn',
      value: '陳為政',
      href: 'https://www.linkedin.com/in/%E9%99%B3%E7%82%BA%E6%94%BF'
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'LarryinMexico',
      href: 'https://github.com/LarryinMexico'
    }
  ]

  return (
    <section className="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">聯絡我</h2>
          <p className="section-subtitle">
            有任何問題或合作意向，歡迎與我聯繫，我會盡快回覆您。
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Info Cards */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>聯絡資訊</h3>
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="glass contact-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  viewport={{ once: true }}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <div className="contact-label">{info.label}</div>
                    <div className="contact-value">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="glass contact-form-card">
              <h3>傳送訊息</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">姓名 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass-input"
                    placeholder="請輸入您的姓名"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass-input"
                    placeholder="請輸入您的 Email"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">訊息 *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="glass-input"
                    placeholder="請輸入您的訊息..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="glass-btn glass-btn-primary submit-btn"
                  disabled={isSubmitting || submitted}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      傳送中...
                    </>
                  ) : submitted ? (
                    <>
                      ✓ 已傳送
                    </>
                  ) : (
                    <>
                      🚀 傳送訊息
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="contact-social"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>跟我聯繫</h3>
          <div className="social-links">
            {[
              { name: 'GitHub', icon: '💻', url: 'https://github.com/LarryinMexico' },
              { name: 'LinkedIn', icon: '👤', url: 'https://www.linkedin.com/in/%E9%99%B3%E7%82%BA%E6%94%BF' },
              { name: 'Email', icon: '✉️', url: 'mailto:sam92.chen@gmail.com' }
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target={social.url.startsWith('http') ? '_blank' : '_self'}
                rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
                className="glass-btn social-btn"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                viewport={{ once: true }}
              >
                <span className="social-icon">{social.icon}</span>
                {social.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
