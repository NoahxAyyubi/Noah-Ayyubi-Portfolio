import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./App.css"; // Import your CSS files here
import "./mediaqueries.css";

function Index() {
  const [init, setInit] = useState(false);
  

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const toggleMenu = () => {
    // Define your toggleMenu function here
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div>
      <nav id="desktop-nav">
        <div className="logo">Under<br></br>Development</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about" style={{ color: "black" }}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" style={{ color: "black" }}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" style={{ color: "black" }}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" style={{ color: "black" }}>
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Under<br></br>Development</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <section id="profile">
        <div className="section-pic-container">
          {/* <img src="/assets/profile-pic.png" alt="my profile pic" /> */}
        </div>
        <div className="section-text">
          <p className="section-text-p1">Hello, I'm</p>
          <h1 className="title">Noah Ayyubi</h1>
          <p className="section-text-p1">Your</p>
          <p className="section-text-p2">Full Stack Developer</p>
          <div className="btn-container">
            <button
              className="btn-color-1"
              onClick={() => window.open("/assets/resume-example.pdf")}
            >
              Download cv
            </button>
            <button
              className="btn-color-2"
              onClick={() => (window.location.href = "./#contact")}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src="/assets/linkedin.png"
              alt="my linked in pro"
              className="icon"
              onClick={() => (window.location.href = "https://linkedin.com/")}
            />
            <img
              src="/assets/github.png"
              alt="my github  pro"
              className="icon"
              onClick={() => (window.location.href = "https://github.com/")}
            />
          </div>
        </div>
        <img
    src="./assets/arrow.png"
    alt="Arrow icon"
    className="icon-arrow"
    onClick={() => (window.location.href = "./#about")}
  />
      </section>
    <section id="about">
  <p className="section-text-p1">Get To Know More</p>
  <h1 className="title">About Me</h1>
  <div className="section-container">
    <div className="section-pic-container2">
      {/* Your picture or image goes here */}
    </div>
    <div className="about-details-container">
      <div className="about-containers">
        <div className="details-container">
          <img
            src="./assets/experience.png"
            alt="Experience icon"
            className="icon"
          />
          <h3>Experience</h3>
          <p>3+ years Front End & Back End Development</p>
        </div>
        <div className="details-container">
          <img
            src="./assets/education.png"
            alt="Education icon"
            className="icon"
          />
          <h3>Education</h3>
          <p>B.Sc. in Computer Science (Candidate)</p>
        </div>
      </div>
      <div className="text-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
          reprehenderit et laborum, rem, dolore eum quod voluptate
          exercitationem nobis, nihil esse debitis maxime facere minus sint
          delectus velit in eos quo officiis explicabo deleniti dignissimos.
          Eligendi illum libero dolorum cum laboriosam corrupti quidem,
          reiciendis ea magnam? Nulla, impedit fuga!
        </p>
      </div>
    </div>
  </div>
  <img
    src="./assets/arrow.png"
    alt="Arrow icon"
    className="icon-arrow"
    onClick={() => (window.location.href = "./#experience")}
  />
</section>
<section id="experience">
        <p className="section-text-p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h4>HTML</h4>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h4>CSS</h4>
                  <p>Experienced</p>
                </div>
              </article>
            
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h4>JavaScript</h4>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h4>TypeScript</h4>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h4>Material UI</h4>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div class="details-container">
            <h3 class="experience-sub-title">Backend Development</h3>
            <div class="article-container">
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h4>Node JS</h4>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h4>Express JS</h4>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h4>Git</h4>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        class="icon-arrow"
        onClick={() => (window.location.href = "./#projects")}
      />
    </section>
    <section id="projects">
      <p class="section-text-p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/project-1.png"
                alt="Project 1"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project One</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/project-2.png"
                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project Two</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/project-3.png"
                alt="Project 3"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project Three</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        class="icon-arrow"
        onClick={() => (window.location.href = "./#contact")}
      />
    </section>
    <section id="contact">
      <p class="section-text-p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src="./assets/email.png"
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com">LinkedIn</a></p>
        </div>
      </div>
    </section>
      <div className="app-container">
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#ffffff",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 140,
                    duration: 0.2,
                  },
                },
              },
              particles: {
                color: {
                  value: "#333333",
                },
                links: {
                  color: "#333333",
                  distance: 250,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 125,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Index;
