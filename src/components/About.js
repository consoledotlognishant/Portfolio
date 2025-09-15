import React from 'react'
import Navbar from './PageComponet/Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <div id="main">
      <Navbar />

      {/* About Header */}
      <div className="about-header">
        <div className="about-background">
          <img
            className="about-bg-img"
            src="pixelcut-export55.jpg"
            alt="Background"
          />
          <div className="about-overlay"></div>
        </div>
        <div className="about-content">
          <h1 className="about-title">About <span className="highlight">Me</span></h1>
          <p className="about-subtitle">
            Get to know more about my journey, passion, and expertise
          </p>
        </div>
      </div>

      {/* Main About Section */}
      <div className="about-main-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-section">
              <img className="about-main-img" src="erasebg-transformed (2) .png" alt="Nishant Singh" />
            </div>
            <div className="about-text-section">
              <h2 className="about-section-title">Who I Am</h2>
              <p className="about-description">
                I'm <b>Nishant</b>, a B.Tech student at C.V. Raman Global
                University, specializing in Computer Science with a focus on AI and
                ML. I'm passionate about building inspiring websites that are both
                functional and visually appealing. I love solving bugs and creating
                custom websites for clients. Whether it's coding from scratch or
                optimizing an existing site, I'm always excited to bring ideas to
                life.
              </p>
              <p className="about-description">
                My journey in web development started with curiosity and has evolved
                into a deep passion for creating digital experiences that make a
                difference. I believe in continuous learning and staying updated with
                the latest technologies and trends in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <div className="container">
          <h2 className="section-title">Education & Background</h2>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon">
                <img src="n_logomark_drb_4x-removebg-preview.png" alt="Education" />
              </div>
              <div className="education-content">
                <h3>B.Tech Computer Science</h3>
                <p className="education-institution">C.V. Raman Global University</p>
                <p className="education-duration">2023 - 2027</p>
                <p className="education-description">
                  Specializing in AI and ML with focus on practical applications
                  and real-world problem solving.
                </p>
              </div>
            </div>
            <div className="education-card">
              <div className="education-icon">
                <img src="n_logomark_drb_4x-removebg-preview.png" alt="Focus" />
              </div>
              <div className="education-content">
                <h3>AI & Machine Learning</h3>
                <p className="education-institution">Specialization</p>
                <p className="education-duration">Current Focus</p>
                <p className="education-description">
                  Deep learning in artificial intelligence and machine learning
                  algorithms for modern applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Overview */}
      <div className="skills-overview-section">
        <div className="container">
          <h2 className="section-title">My Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-category">
              <h3>Frontend Development</h3>
              <div className="expertise-skills">
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Bootstrap</span>
                <span className="skill-tag">Tailwind CSS</span>
              </div>
            </div>
            <div className="expertise-category">
              <h3>Backend Development</h3>
              <div className="expertise-skills">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Git</span>
              </div>
            </div>
            <div className="expertise-category">
              <h3>Tools & Design</h3>
              <div className="expertise-skills">
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Photoshop</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">Responsive Design</span>
                <span className="skill-tag">UI/UX</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Interests */}
      <div className="interests-section">
        <div className="container">
          <h2 className="section-title">Personal Interests</h2>
          <div className="interests-grid">
            <div className="interest-item">
              <div className="interest-icon">💻</div>
              <h3>Coding</h3>
              <p>Passionate about solving complex problems through code</p>
            </div>
            <div className="interest-item">
              <div className="interest-icon">🎨</div>
              <h3>Design</h3>
              <p>Creating beautiful and functional user interfaces</p>
            </div>
            <div className="interest-item">
              <div className="interest-icon">🚀</div>
              <h3>Innovation</h3>
              <p>Exploring new technologies and pushing boundaries</p>
            </div>
            <div className="interest-item">
              <div className="interest-icon">📚</div>
              <h3>Learning</h3>
              <p>Continuously expanding knowledge and skills</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Work Together</h2>
            <p>
              I'm always excited to take on new challenges and work on interesting projects.
              Whether you need a website built, help with coding challenges, or want to
              discuss potential collaborations, I'd love to hear from you!
            </p>
            <div className="cta-buttons">
              <a href="/connect" className="cta-button primary">Get In Touch</a>
              <a href="/projects" className="cta-button secondary">View My Work</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About