// import React, { useEffect } from "react";
// import gsap from "gsap";
import Navbar from "./PageComponet/Navbar";



const App = () => {
  //   useEffect(() => {
  // Parallax effect script
  // const parallax_el = document.querySelectorAll(".parallax");

  // let xvalue = 0,
  //   yvalue = 0;

  // const handleMouseMove = (e) => {
  //   xvalue = e.clientX - window.innerWidth / 2;
  //   yvalue = e.clientY - window.innerHeight / 2;

  //   parallax_el.forEach((el) => {
  //     let speedx = el.dataset.speedx;
  //     let speedy = el.dataset.speedy;
  //     let speedz = el.dataset.speedz;

  //     let isInLeft =
  //       parseFloat(getComputedStyle(el).left) < window.innerWidth / 2
  //         ? 1
  //         : -1;
  //     let zvalue = 0.1;

  //     el.style.transform = `translateX(calc(0% + ${
  //       -xvalue * speedx
  //     }px)) translateY(calc(0% + ${
  //       -yvalue * speedy
  //     }px)) perspective(2300px) translateZ(${zvalue * speedz}px)`;
  //   });
  // };

  // window.addEventListener("mousemove", handleMouseMove);

  // // GSAP animation
  // let timeline = gsap.timeline();

  // Array.from(parallax_el)
  //   .filter((el) => !el.classList.contains("text"))
  //   .forEach((el) => {
  //     timeline.from(
  //       el,
  //       {
  //         top: `${
  //           el.offsetHeight / 2 + parseFloat(el.dataset.distance || 0)
  //         }px`,
  //         duration: 3.5,
  //         ease: "power3.out",
  //       },
  //       "1"
  //     );
  //   });

  return (
    <div id="main">
      <Navbar />

      <div className="content-block">
        <img
          className="backgrond-img parallax"
          src="pixelcut-export55.jpg"
          data-speedx="0.2"
          data-speedy="0.28"
          data-speedz="0"
          data-distance="-200"
          alt="Background"
        />
        <img
          className=" my-img  parallax"
          src="erasebg-transformed.png"
          alt="MyImage"
          data-speedx="0.09"
          data-speedy="0.09"
          data-speedz="0.0"
          data-distance="2222"
        />
        <div
          className="black-Top-shadow"
          data-speedx="0.05"
          data-speedy="0.05"
          data-speedz="0.0"
          data-distance="2222"
        ></div>
        <div
          className="parallax black-bottom-shadow"
          data-speedx="0.05"
          data-speedy="0.05"
          data-speedz="0.0"
          data-distance="2222"
        ></div>
        <div
          className="parallax black-bottom-block"
          data-speedx="0.05"
          data-speedy="0.05"
          data-speedz="0.0"
          data-distance="2222"
        ></div>
        <p
          className="parallax welcome"
          data-speedx="0.12"
          data-speedy="0.23"
          data-speedz="0.15"
          data-distance="2222"
        >
          Hello, I'm
        </p>
        <h1
          className="parallax title1"
          data-speedx="0.12"
          data-speedy="0.23"
          data-speedz="0.15"
          data-distance="2222"
        >
          N I S H A N T
        </h1>
        <h2
          className="parallax title2"
          data-speedx="0.12"
          data-speedy="0.23"
          data-speedz="0.15"
          data-distance="2222"
        >
          -Singh
        </h2>
        <h3
          className="parallax proffesion"
          data-speedx="0.05"
          data-speedy="0.05"
          data-speedz="0.0"
          data-distance="2222"
        >
          FULLSTACK
          <br />
          Webdesigner & Developer
        </h3>
      </div>

      <div className="block2">
        <p className="text-1">&nbsp; Designing</p>
        <p className="text-2">
          &nbsp; Exceptional
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <p className="text-3">Websites</p>
        <p className="text-4">
          &nbsp;that Capture <b>Heart</b>
        </p>
        <p className="text-5">
          <b>and</b> Inspire Minds
        </p>
      </div>

      <div className="about-block">
        <div className="leftblock">
          <img className="my-img2" src="erasebg-transformed (2) .png" alt="" />
        </div>
        <div className="rightblock">
          <h1 className="titlle4">About Me</h1>
          <p className="about-content">
            I’m <b>Nishant</b>, a B.Tech student at C.V. Raman Global
            University, specializing in Computer Science with a focus on AI and
            ML. I’m passionate about building inspiring websites that are both
            functional and visually appealing. I love solving bugs and creating
            custom websites for clients. Whether it's coding from scratch or
            optimizing an existing site, I’m always excited to bring ideas to
            life. Check out my portfolio, and feel free to reach out if you need
            a website built or help with any coding challenges!
          </p>
        </div>
      </div>

      <div className="technology">
        <h1 className="text-6">
          Technologies <b>I</b> Use
        </h1>
        <h1 className="text-7">Frontend Technologies</h1>
        <div className="programing-language-block">
          {/* Repeat this block for each technology */}
          <div className="programing-block1">
            <div className="header">
              <img src="n_logomark_drb_4x-removebg-preview.png" alt="" />
              <button className="knowmore">More info</button>
            </div>
            <div className="about-language">
              <h1>HTML</h1>
              <p>The standard markup language for creating web pages.</p>
            </div>
            <div className="programing-img-block1">
              <img className="icons" src="pngegg.png" alt="" />
            </div>
          </div>
          <div className="programing-block1">
            <div className="header">
              <img src="n_logomark_drb_4x-removebg-preview.png" alt="" />
              <button className="knowmore">More info</button>
            </div>
            <div className="about-language">
              <h1>CSS</h1>
              <p>
                Used to style and layout web pages, including colors, fonts, and
                responsive design.
              </p>
            </div>
            <div className="programing-img-block2">
              <img className="icons" src="pngegg (6).png" alt="" />
            </div>
          </div>
          <div className="programing-block1">
            <div className="header">
              <img src="n_logomark_drb_4x-removebg-preview.png" alt="" />
              <button className="knowmore">More info</button>
            </div>
            <div className="about-language">
              <h1>JAVASCRIPT</h1>
              <p>
                A dynamic programming language for creating interactive and
                responsive web content.
              </p>
            </div>
            <div className="programing-img-block3">
              <img className="icons" src="pngegg (1).png" alt="" />
            </div>
          </div>
          <div className="programing-block1">
            <div className="header">
              <img src="n_logomark_drb_4x-removebg-preview.png" alt="" />
              <button className="knowmore">More info</button>
            </div>
            <div className="about-language">
              <h1>REACT.JS</h1>
              <p>
                A JavaScript library for building fast and dynamic user
                interfaces using reusable components.
              </p>
            </div>
            <div className="programing-img-block4">
              <img className="icons" src="pngegg (7).png" alt="" />
            </div>
          </div>

          {/* Repeat for CSS, JavaScript, React.js, etc. */}
        </div>

        <h1 className="text-7">Backend Technologies</h1>
        <div className="programing-language-block">
          {/* Repeat this block for each technology */}
          <div className="programing-block1">
            <div className="header">
              <img src="n_logomark_drb_4x-removebg-preview.png" alt="" />
              <button className="knowmore">More info</button>
            </div>
            <div className="about-language">
              <h1>NODE.JS</h1>
              <p>
                A runtime environment that allows running JavaScript on the
                server side for scalable backend applications.
              </p>
            </div>
            <div className="programing-img-block1">
              <img className="icons" src="pngegg (2).png" alt="" />
            </div>
          </div>
          <div className="programing-block1">
            <div className="header">
              <img src="n_logomark_drb_4x-removebg-preview.png" alt="" />
              <button className="knowmore">More info</button>
            </div>
            <div className="about-language">
              <h1>EXPRESS.JS</h1>
              <p>
                A minimal and flexible Node.js framework for building APIs and
                web applications.
              </p>
            </div>
            <div className="programing-img-block2">
              <img className="icons" src="pngegg (14).png" alt="" />
            </div>
          </div>

          <div className="programing-block1">
            <div className="header">
              <img src="n_logomark_drb_4x-removebg-preview.png" alt="" />
              <button className="knowmore">More info</button>
            </div>
            <div className="about-language">
              <h1>MY SQL</h1>
              <p>
                A relational database management system (RDBMS) for structured
                data storage and retrieval.
              </p>
            </div>
            <div className="programing-img-block3">
              <img className="icons" src="pngegg (5).png" alt="" />
            </div>
          </div>

          <div className="programing-block1">
            <div className="header">
              <img src="n_logomark_drb_4x-removebg-preview.png" alt="" />
              <button className="knowmore">More info</button>
            </div>
            <div className="about-language">
              <h1>MONGODB</h1>
              <p>
                A NoSQL database for handling unstructured or semi-structured
                data, often used in modern web apps.
              </p>
            </div>
            <div className="programing-img-block4">
              <img className="icons" src="pngegg (8).png" alt="" />
            </div>
          </div>

          {/* Repeat for Express.js, MySQL, MongoDB, etc. */}
        </div>
      </div>

      <div className="project-area">
        <p className="text-11">Over 7+</p>
        <p id="text" className="text-22">
          Completed
        </p>
        <p className="text-32">Applications</p>
      </div>

      <div className="project-area2">
        <p className="text-111">500+</p>
        <p id="text" className="text-222">
          Hours of
        </p>
        <p className="text-323">Coding</p>
      </div>

      <div className="project-area3">
        <p className="text-11">10+</p>
        <p id="text" className="text-22">
          Tools in My
        </p>
        <p className="text-32">Tech Stack</p>
      </div>

      <div className="projects-block">
        <div className="heading">
          <h1 className="text-67">Selected</h1>
          <p className="text-68">Projects</p>
        </div>
        <div className="project-title">
          <p className="text-70">Netflix</p>
          <p className="text-71">Full-Stack Clone</p>
        </div>
        <div className="project-block">
          <div className="slider">
            <div className="slider-images" id="sliderImages">
              <img src="Screenshot (98).png" alt="Photo1" />
              <img src="Screenshot (99).png" alt="Photo4" />
              <img src="Screenshot (100).png" alt="Photo2" />
              <img src="Screenshot (101).png" alt="Photo3" />
              <img src="Screenshot (103).png" alt="Photo5" />
              <img src="Screenshot (104).png" alt="Photo6" />
              <img src="Screenshot (105).png" alt="Photo7" />
              <img src="Screenshot (106).png" alt="Photo8" />
              <img src="Screenshot (107).png" alt="Photo9" />
              <img src="Screenshot (108).png" alt="Photo10" />
            </div>
            <div className="slider-buttons">
              <button id="prevBtn">
                <img
                  src="https://img.icons8.com/?size=100&id=9438&format=png&color=000000"
                  alt="Previous"
                />
              </button>
              <button className="nextbtn" id="nextBtn">
                <img
                  src="https://img.icons8.com/?size=100&id=9432&format=png&color=000000"
                  alt="Next"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="project-title">
          <p className="text-70">travelKaro</p>
          <p className="text-71">Travel Explorer</p>
        </div>
        <div className="project-block">
          <div className="slider">
            <div className="slider-images" id="sliderImages">
              <img src="Screenshot (91).png" alt="Photo1" />
              <img src="Screenshot (96).png" alt="Photo4" />
              <img src="Screenshot (92).png" alt="Photo2" />
              <img src="Screenshot (93).png" alt="Photo3" />
              <img src="Screenshot (95).png" alt="Photo5" />
            </div>
            <div className="slider-buttons">
              <button id="prevBtn">
                <img
                  src="https://img.icons8.com/?size=100&id=9438&format=png&color=000000"
                  alt="Previous"
                />
              </button>
              <button className="nextbtn" id="nextBtn">
                <img
                  src="https://img.icons8.com/?size=100&id=9432&format=png&color=000000"
                  alt="Next"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
