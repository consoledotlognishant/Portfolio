import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">Nishant Singh</h3>
                        <p className="footer-description">
                            Full-Stack Web Developer passionate about creating exceptional digital experiences.
                        </p>
                        <div className="social-links">
                            <a href="https://github.com/consoledotlognishant" target="_blank" rel="noopener noreferrer" className="social-link">
                                <img src="github.png" alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/nishant-singh-4543a033b/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <img src="linkedin.png" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/skills">Skills</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Services</h4>
                        <ul className="footer-links">
                            <li>Web Development</li>
                            <li>Frontend Design</li>
                            <li>Backend Development</li>
                            <li>Full-Stack Solutions</li>
                            <li>UI/UX Design</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Contact Info</h4>
                        <div className="contact-info">
                            <p><strong>Email:</strong> technicalrebel12@gmail.com</p>
                            <p><strong>Phone:</strong> +91 6205003458</p>
                            <p><strong>Location:</strong> Bhubaneswar, Odisha, India</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>&copy; 2024 Nishant Singh. All rights reserved.</p>
                        <p>Built with ❤️ using React.js</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
