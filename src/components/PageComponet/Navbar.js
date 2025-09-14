import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="left-navbar-items">
          <img
            src="n_logomark_drb_4x-removebg-preview.png"
            className="logo"
            alt="Logo"
          />
          <h1 className="title">Nishant</h1>
        </div>
        <div className="right-navbar-items">
          <Link to="/">
            <p id="text" className="link-tag">
              Home
            </p>
          </Link>
          <Link to="/projects">
            <p id="text-projects" className="link-tag">
              cd p My Projects
            </p>
          </Link>
          <Link to="/skill">
            <p id="text-skills" className="link-tag">
              Skills
            </p>
          </Link>
          <Link to="/about">
            <p id="text-about" className="link-tag">
              About Me
            </p>
          </Link>
          <Link to="/connect">
            <p id="text-connect" className="link-tag">
              Connect With Me
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar