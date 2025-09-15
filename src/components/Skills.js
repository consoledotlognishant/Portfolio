import React from 'react'
import Navbar from './PageComponet/Navbar'
import Footer from './Footer'

const Skills = () => {
  const frontendSkills = [
    {
      name: 'HTML5',
      level: 95,
      description: 'Semantic markup, accessibility, and modern HTML5 features',
      icon: 'pngegg.png'
    },
    {
      name: 'CSS3',
      level: 90,
      description: 'Responsive design, animations, Flexbox, and Grid layouts',
      icon: 'pngegg (6).png'
    },
    {
      name: 'JavaScript',
      level: 85,
      description: 'ES6+, DOM manipulation, async programming, and modern JS features',
      icon: 'pngegg (1).png'
    },
    {
      name: 'React.js',
      level: 80,
      description: 'Component-based architecture, hooks, state management, and routing',
      icon: 'pngegg (7).png'
    },
    {
      name: 'Bootstrap',
      level: 75,
      description: 'Responsive framework, components, and utility classes',
      icon: 'pngegg (3).png'
    },
    {
      name: 'Tailwind CSS',
      level: 70,
      description: 'Utility-first CSS framework for rapid UI development',
      icon: 'tail.png'
    }
  ]

  const backendSkills = [
    {
      name: 'Node.js',
      level: 80,
      description: 'Server-side JavaScript runtime and event-driven architecture',
      icon: 'pngegg (2).png'
    },
    {
      name: 'Express.js',
      level: 75,
      description: 'Web application framework for Node.js with routing and middleware',
      icon: 'pngegg (14).png'
    },
    {
      name: 'MySQL',
      level: 70,
      description: 'Relational database management and SQL queries',
      icon: 'pngegg (5).png'
    },
    {
      name: 'MongoDB',
      level: 65,
      description: 'NoSQL database for document-based data storage',
      icon: 'pngegg (8).png'
    },
    {
      name: 'REST APIs',
      level: 80,
      description: 'Designing and implementing RESTful web services',
      icon: 'pngegg (9).png'
    },
    {
      name: 'Git',
      level: 85,
      description: 'Version control, branching, and collaborative development',
      icon: 'git.png'
    }
  ]

  const toolsAndFrameworks = [
    {
      name: 'VS Code',
      level: 90,
      description: 'Code editor with extensions and debugging tools',
      icon: 'vs.png'
    },
    {
      name: 'Figma',
      level: 75,
      description: 'UI/UX design and prototyping tool',
      icon: 'figma.png'
    },
    {
      name: 'Photoshop',
      level: 70,
      description: 'Image editing and graphic design software',
      icon: 'photo.png'
    },
    {
      name: 'GitHub',
      level: 85,
      description: 'Code repository hosting and collaboration platform',
      icon: 'github.png'
    }
  ]

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Time Management',
    'Adaptability',
    'Attention to Detail',
    'Creative Thinking',
    'Project Management'
  ]

  return (
    <div id="main">
      <Navbar />

      {/* Skills Header */}
      <div className="skills-header">
        <div className="skills-background">
          <img
            className="skills-bg-img"
            src="pixelcut-export55.jpg"
            alt="Background"
          />
          <div className="skills-overlay"></div>
        </div>
        <div className="skills-content">
          <h1 className="skills-title">My <span className="highlight">Skills</span></h1>
          <p className="skills-subtitle">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>
      </div>

      {/* Frontend Skills Section */}
      <div className="skills-section">
        <div className="container">
          <h2 className="section-title">Frontend Technologies</h2>
          <div className="skills-grid">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <p className="skill-description">{skill.description}</p>
                  </div>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Backend Skills Section */}
      <div className="skills-section backend">
        <div className="container">
          <h2 className="section-title">Backend Technologies</h2>
          <div className="skills-grid">
            {backendSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <p className="skill-description">{skill.description}</p>
                  </div>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools and Frameworks Section */}
      <div className="skills-section tools">
        <div className="container">
          <h2 className="section-title">Tools & Frameworks</h2>
          <div className="skills-grid">
            {toolsAndFrameworks.map((tool, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <img src={tool.icon} alt={tool.name} className="skill-icon" />
                  <div className="skill-info">
                    <h3 className="skill-name">{tool.name}</h3>
                    <p className="skill-description">{tool.description}</p>
                  </div>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${tool.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-level">{tool.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="soft-skills-section">
        <div className="container">
          <h2 className="section-title">Soft Skills</h2>
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-item">
                <span className="soft-skill-text">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Summary */}
      <div className="skills-summary">
        <div className="container">
          <div className="summary-stats">
            <div className="stat-item">
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Technologies</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">2+</h3>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">15+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">100%</h3>
              <p className="stat-label">Dedication</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Skills