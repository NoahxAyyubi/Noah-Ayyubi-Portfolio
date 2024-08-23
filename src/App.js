import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./App.css"; // Import your CSS files here
import "./mediaqueries.css";

// fix git hub
// add projects

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
                <a href="#projects">Projects</a>
              </li>
                <a href="#experience">Experience</a>
              <li>
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
          <p className="section-text-p2">Full Stack Software Engineer</p>
          <div className="btn-container">
            <button
              className="btn-color-1"
              // onClick={() => window.open("/assets/ResforWebsite.pdf")}
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
            {/* <img
              src="/assets/linkedin.png"
              alt="my linked in pro"
              className="icon"
              onClick={() => (window.location.href = "https://linkedin.com")}
            /> */}
            <img
              src="/assets/github.png"
              alt="my github  pro"
              className="icon"
              onClick={() => (window.location.href = "https://github.com/NoahxAyyubi?tab=repositories")}
            />
            <p>GitHUb</p>
          </div>
          <img
    src="./assets/arrow.png"
    alt="Arrow icon"
    className="icon-arrow"
    onClick={() => (window.location.href = "./#projects")}
  />
        </div>
        
      </section>
      <section id="projects">
      <p class="section-text-p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/applerep.gif"
                alt="Project 1"
                class="project-img"
              />
            </div>
              <h2 class="experience-sub-title project-title">Apple Replica</h2>
              <p>3D Model<br></br>Front-End: ThreeJS, React, GSAP<br></br>Back-End: Java, RestAPI, MySQL</p>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = "https://github.com/NoahxAyyubi/Apple-Replica")}
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = "https://apple-replica-neon.vercel.app/")}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/2dGame.gif"
                alt="Project 2"
                class="project-img"
              />
            </div>
              <h2 class="experience-sub-title project-title">Lost In Space</h2>
              <p>2D Retro Game<br></br>Front-End: JS, 2DCanvas, HTML5<br></br>Back-End: Java, RestAPI, MySQL</p>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = "https://github.com/NoahxAyyubi/LostInSpace")}
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = "https://lost-in-space-by-noah-ayyubi.vercel.app/")}
                
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/scamazon.gif"
                alt="Project 3"
                class="project-img"
              />
            </div>
              <h2 class="experience-sub-title project-title">Scamazon</h2>
              <p>E-commerce Web Application<br></br>Front-End: JS, HTML, CSS, React<br></br>Back-End: Java, MySQL, FireBase</p>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = "https://github.com/NoahxAyyubi/eCommerce-Website")}
                
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = "https://e-commerce-website-gold-beta.vercel.app/")}
              
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/Quote.gif"
                alt="Project 3"
                class="project-img"
              />
            </div>
              <h2 class="experience-sub-title project-title">Aesthetic Quote Generator</h2>
              <p>Web Application<br></br>Front-End: TypeScript, GSAP,<br></br>Back-End: Java, MySQL</p>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = "https://github.com/NoahxAyyubi/TypeScriptGSAP-AestheticQuoteGenerator")}
                
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = "https://type-script-api-quote-generator.vercel.app/")}
              
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
        onClick={() => (window.location.href = "./#about")}
      />
    </section>
    <section id="about">

  <div className="section-container">
    
          <div className="about-details-container">
          <p className="section-text-p1">Get To Know More</p>
          <h1 className="title">About Me</h1>
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
        Results-driven Full Stack Developer with extensive expertise in a wide range of programming languages, frameworks, and technologies. Proven track record of optimizing telecommunications infrastructure, developing high-performance applications, and implementing innovative solutions. Skilled in full software development lifecycle management, RESTful API design, and cloud-based deployment. Adept at mentoring and collaborating with cross-functional teams to drive success. Seeking a challenging Full Stack Developer role to leverage diverse technical skill set and experience to contribute to cutting-edge projects.
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
                  <h4>React</h4>
                  <p>Experienced</p>
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
                  <h4>Java</h4>
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
                  <h4>Java Spring Boot</h4>
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
                  <h4>Mysql</h4>
                  <p>Experienced</p>
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
          <p><a href="mailto:nma9293569691@gmail.com">NMA9293569691@gmail.com</a><br></br> Phone: 929-356-9691</p>
        </div>
        <div class="contact-info-container">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/">LinkedIn</a></p>
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
