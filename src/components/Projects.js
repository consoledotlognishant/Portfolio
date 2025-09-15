import React, { useState } from 'react'
import Navbar from './PageComponet/Navbar'
import Footer from './Footer'

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: "Netflix Clone",
      subtitle: "Full-Stack Application",
      description: "A complete Netflix clone built with React.js and Node.js, featuring user authentication, movie streaming, and responsive design. This project showcases modern web development practices with a focus on user experience and performance.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS3", "JavaScript"],
      images: [
        "Screenshot (98).png",
        "Screenshot (99).png",
        "Screenshot (100).png",
        "Screenshot (101).png",
        "Screenshot (103).png",
        "Screenshot (104).png",
        "Screenshot (105).png",
        "Screenshot (106).png",
        "Screenshot (107).png",
        "Screenshot (108).png"
      ],
      features: [
        "User Authentication & Authorization",
        "Movie Browsing & Search",
        "Responsive Design",
        "Real-time Updates",
        "Payment Integration",
        "Admin Dashboard"
      ],
      github: "https://github.com/nishant-singh/netflix-clone",
      live: "https://netflix-clone-nishant.vercel.app",
      status: "Completed",
      duration: "2 months"
    },
    {
      id: 2,
      title: "TravelKaro",
      subtitle: "Travel Explorer App",
      description: "A comprehensive travel planning application that helps users discover destinations, plan trips, and book accommodations. Built with modern web technologies and integrated with various travel APIs for real-time data.",
      technologies: ["React.js", "JavaScript", "CSS3", "Bootstrap", "REST APIs"],
      images: [
        "Screenshot (91).png",
        "Screenshot (96).png",
        "Screenshot (92).png",
        "Screenshot (93).png",
        "Screenshot (95).png"
      ],
      features: [
        "Destination Discovery",
        "Trip Planning Tools",
        "Booking System",
        "Interactive Maps",
        "User Reviews",
        "Mobile Responsive"
      ],
      github: "https://github.com/nishant-singh/travelkaro",
      live: "https://travelkaro-nishant.vercel.app",
      status: "Completed",
      duration: "1.5 months"
    },
    {
      id: 3,
      title: "SwathyaMitra",
      subtitle: "Telemedicine Platform",
      description: "A platform for telemedicine services, where users can book appointments with doctors, view medical reports, and get online consultations. It also includes a feature for online booking of medicines and other medical products.",
      technologies: ["React.js", "Node.js", "MySQL", "Express.js", "Stripe API", "JWT", "Cloudinary", "HTML5", "CSS3", "JavaScript"],
      images: [
        "image01.png",

      ],
      features: [
        "Product Catalog",
        "Shopping Cart",
        "Payment Processing",
        "Order Management",
        "User Dashboard",
        "Admin Panel"
      ],
      github: "https://github.com/nishant-singh/ecommerce-platform",
      live: "https://ecommerce-nishant.vercel.app",
      status: "In Progress",
      duration: "3 months"
    },
    {
      id: 4,
      title: "HireNow",
      subtitle: "Basic Workers Hiring Platform",
      description: "A Platform for hiring and finding jobs for Basic Workers and other jobs for needy people like Labourers, Drivers, Cooks, Lab Technicians, carpenters, plumbers, electricians, etc.",
      technologies: ["React.js", "Firebase", "Material-UI", "JavaScript", "CSS3", "Node.js", "Express.js", "MongoDB", "HTML5", "JWT", "Cloudinary"],
      images: [
        "image02.png",

      ],
      features: [
        "Drag & Drop Interface",
        "Team Collaboration",
        "Real-time Updates",
        "Task Categories",
        "Progress Tracking",
        "Mobile App"
      ],
      github: "https://github.com/nishant-singh/task-manager",
      live: "https://taskmanager-nishant.vercel.app",
      status: "Completed",
      duration: "1 month"
    }
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div id="main">
      <Navbar />

      {/* Projects Header */}
      <div className="projects-header">
        <div className="projects-background">
          <img
            className="projects-bg-img"
            src="pixelcut-export55.jpg"
            alt="Background"
          />
          <div className="projects-overlay"></div>
        </div>
        <div className="projects-content">
          <h1 className="projects-title">My <span className="highlight">Projects</span></h1>
          <p className="projects-subtitle">
            Explore my portfolio of web applications and digital solutions
          </p>
        </div>
      </div>

      {/* Project Showcase */}
      <div className="project-showcase">
        <div className="container">
          <div className="project-main">
            <div className="project-info">
              <div className="project-header">
                <h2 className="project-title">{projects[currentProject].title}</h2>
                <p className="project-subtitle">{projects[currentProject].subtitle}</p>
                <div className="project-meta">
                  <span className={`project-status ${projects[currentProject].status.toLowerCase().replace(' ', '-')}`}>
                    {projects[currentProject].status}
                  </span>
                  <span className="project-duration">
                    Duration: {projects[currentProject].duration}
                  </span>
                </div>
              </div>

              <p className="project-description">
                {projects[currentProject].description}
              </p>

              <div className="project-technologies">
                <h3>Technologies Used:</h3>
                <div className="tech-tags">
                  {projects[currentProject].technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-features">
                <h3>Key Features:</h3>
                <ul className="features-list">
                  {projects[currentProject].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                <a href={projects[currentProject].github} className="project-link github">
                  <span>View Code</span>
                </a>
                <a href={projects[currentProject].live} className="project-link live">
                  <span>Live Demo</span>
                </a>
              </div>
            </div>

            <div className="project-gallery">
              <div className="gallery-container">
                <div className="gallery-images">
                  {projects[currentProject].images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${projects[currentProject].title} Screenshot ${index + 1}`}
                      className={`gallery-image ${index === 0 ? 'active' : ''}`}
                    />
                  ))}
                </div>
                <div className="gallery-controls">
                  <button className="gallery-btn prev" onClick={prevProject}>
                    <span>‹</span>
                  </button>
                  <button className="gallery-btn next" onClick={nextProject}>
                    <span>›</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Navigation */}
      <div className="project-navigation">
        <div className="container">
          <h2 className="section-title">All Projects</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${index === currentProject ? 'active' : ''}`}
                onClick={() => setCurrentProject(index)}
              >
                <div className="project-card-image">
                  <img src={project.images[0]} alt={project.title} />
                </div>
                <div className="project-card-content">
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                  <div className="project-card-tech">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag small">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Stats */}
      <div className="project-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">15+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Technologies Used</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Hours of Coding</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">100%</h3>
              <p className="stat-label">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="projects-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Interested in Working Together?</h2>
            <p>
              I'm always excited to take on new projects and challenges.
              Let's discuss how we can bring your ideas to life!
            </p>
            <div className="cta-buttons">
              <a href="/connect" className="cta-button primary">Start a Project</a>
              <a href="/about" className="cta-button secondary">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Projects