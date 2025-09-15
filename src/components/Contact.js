import React, { useState } from 'react'
import Navbar from './PageComponet/Navbar'
import Footer from './Footer'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div id="main">
      <Navbar />

      {/* Contact Header */}
      <div className="contact-header">
        <div className="contact-background">
          <img
            className="contact-bg-img"
            src="pixelcut-export55.jpg"
            alt="Background"
          />
          <div className="contact-overlay"></div>
        </div>
        <div className="contact-content">
          <h1 className="contact-title">Get In <span className="highlight">Touch</span></h1>
          <p className="contact-subtitle">
            Let's discuss your next project or just say hello
          </p>
        </div>
      </div>

      {/* Contact Main Section */}
      <div className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="form-title">Send Me a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
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
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <h2 className="info-title">Contact Information</h2>

              <div className="contact-info-grid">
                <div className="contact-info-item">
                  <div className="info-icon">
                    <img src="n_logomark_drb_4x-removebg-preview.png" alt="Email" />
                  </div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p>technicalrebel12@gmail.com</p>
                    <a href="technicalrebel12@gmail.com">Send Email</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="info-icon">
                    <img src="n_logomark_drb_4x-removebg-preview.png" alt="Phone" />
                  </div>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <p>+91 6205003458</p>
                    <a href="tel:+916205003458">Call Now</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="info-icon">
                    <img src="n_logomark_drb_4x-removebg-preview.png" alt="Location" />
                  </div>
                  <div className="info-content">
                    <h3>Location</h3>
                    <p>Bhubaneswar, Odisha, India</p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">View on Map</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="info-icon">
                    <img src="n_logomark_drb_4x-removebg-preview.png" alt="LinkedIn" />
                  </div>
                  <div className="info-content">
                    <h3>LinkedIn</h3>
                    <p>Connect with me</p>
                    <a href="https://www.linkedin.com/in/nishant-singh-4543a033b/" target="_blank" rel="noopener noreferrer">Visit Profile</a>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Me</h3>
                <div className="social-icons">
                  <a href="https://github.com/consoledotlognishant" target="_blank" rel="noopener noreferrer" className="social-link">
                    <img src="github.png" alt="GitHub" />
                  </a>
                  <a href="https://www.linkedin.com/in/nishant-singh-4543a033b/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <img src="linkedin.png" alt="LinkedIn" />
                  </a>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How long does it take to complete a project?</h3>
              <p>Project timelines vary depending on complexity. Simple websites take 1-2 weeks, while complex applications can take 1-3 months. I'll provide a detailed timeline during our initial discussion.</p>
            </div>

            <div className="faq-item">
              <h3>Do you provide ongoing support?</h3>
              <p>Yes! I offer post-launch support and maintenance packages. I believe in building long-term relationships with my clients and ensuring their projects continue to perform well.</p>
            </div>

            <div className="faq-item">
              <h3>What technologies do you work with?</h3>
              <p>I specialize in modern web technologies including React.js, Node.js, Express.js, MongoDB, MySQL, and various CSS frameworks. I stay updated with the latest trends and best practices.</p>
            </div>

            <div className="faq-item">
              <h3>Can you help with existing projects?</h3>
              <p>Absolutely! I can help improve, debug, or add new features to existing projects. I'm experienced in working with various codebases and can quickly adapt to different project structures.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              I'm excited to hear about your ideas and help bring them to life.
              Let's create something amazing together!
            </p>
            <div className="cta-buttons">
              <a href="#contact-form" className="cta-button primary">Start a Conversation</a>
              <a href="/projects" className="cta-button secondary">View My Work</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact