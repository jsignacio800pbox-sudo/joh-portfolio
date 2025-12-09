
import './style.css';

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="nav-header">
        <div className="logo-section">
          <div className="logo-img"></div>
          <div className="portfolio-labels">
            <div className="normal">MY PORTFOLIO</div>
            <div className="reverse">MY PORTFOLIO</div>
          </div>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT ME</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#contacts">CONTACTS</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main id="home">
        <section className="hero-section">
          <div className="profile-image"></div>
          <div className="intro-wrapper">
            <div className="intro-text">
              <h6 className="name-heading">JOHANNAH IGNACIO</h6>
              <h1>
                Hi! I'm Johannah <br /> I am an aspiring UX-UI Web Designer.
              </h1>
              <p className="tagline">
                Designing with empathy, creativity, and a <br /> touch of elegance.
              </p>
              <div className="cta-row">
                <div className="social-icons">
                  <a href="https://www.instagram.com/your.fav.joh/" target="_blank">
                    <img src="/instagramicon.jpg" alt="Instagram" />
                  </a>
                  <a href="https://linkedin.com" target="_blank">
                    <img src="/linkedinicon.jpg" alt="LinkedIn" />
                  </a>
                  <a href="mailto:johannahignacio014@gmail.com">
                    <img src="/gmailicon.jpg" alt="Gmail" />
                  </a>
                </div>
                <a href="#contacts" className="btn get-in-touch">← GET IN TOUCH</a>
              </div>
              <div className="cta-row second">
                <a href="#about" className="btn alt step-world">STEP INTO MY WORLD ⟶</a>
              </div>
            </div>
            <div className="vertical-line"></div>
          </div>
        </section>
      </main>

      {/* About Section */}
      <section id="about" className="about-hero-section">
        <div className="about-profile-icon"></div>
        <div className="about-text-wrapper">
          <div className="about-content">
            <h2>
              Hi! I’m Johannah Ignacio, a BS Computer <br />
              Science student with a heart for design <br />
              and a mind for logic. <br />
              I’m an aspiring UX/UI Web Designer who <br />
              believes that great design isn’t just <br />
              about pixels — it’s about people.
            </h2>
            <blockquote className="quote">
              “Designing with purpose, inspired <br /> by people.”
            </blockquote>
            <a href="#background" className="btn see-background">SEE MY BACKGROUND</a>
          </div>
          <div className="vertical-line2"></div>
        </div>
      </section>
      {/* Background Section */}
      <section id="background" className="background-section">
        <div className="content-wrapper">
          <p className="intro-text">
            Pick any of the 3 cards to discover facts about Johannah!
          </p>
          <div className="cards-row">
            {/* Education Card */}
            <div className="card-wrapper">
              <div className="glow-frame"></div>
              <div className="card">
                <div className="card-inner">
                  <div className="card-front">
                    <img src="/eye-closed.png" alt="Closed eye" className="eye-icon" />
                  </div>
                  <div className="card-back">
                    <img src="/eyes-open.png" alt="Open eye" className="eye-icon" />
                    <div className="education-header">
                      <img src="/educationicon.jpg" alt="Education Icon" className="education-icon" />
                      <h3 className="education-title">EDUCATION</h3>
                    </div>
                    <div className="schools-box">
                      <p>Buyo IMPACT <br /> Elementary School</p>
                      <p>Goa Science <br /> High School</p>
                      <p>Partido State <br /> University</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Skills Card */}
            <div className="card-wrapper">
              <div className="glow-frame"></div>
              <div className="card">
                <div className="card-inner">
                  <div className="card-front">
                    <img src="/eye-closed.png" alt="Closed eye" className="eye-icon" />
                  </div>
                  <div className="card-back">
                    <img src="/eyes-open.png" alt="Open eye" className="eye-icon" />
                    <div className="skills-header">
                      <img src="/skillsicon.jpg" alt="Skills Icon" className="skills-icon" />
                      <h3 className="skills-title">SKILLS</h3>
                    </div>
                    <div className="schools-box">
                      <p>UI/UX Design</p>
                      <p>User Research</p>
                      <p>Visual Design</p>
                      <p>Front-End Collaboration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Interest Card */}
            <div className="card-wrapper">
              <div className="glow-frame"></div>
              <div className="card">
                <div className="card-inner">
                  <div className="card-front">
                    <img src="/eye-closed.png" alt="Closed eye" className="eye-icon" />
                  </div>
                  <div className="card-back">
                    <img src="/eyes-open.png" alt="Open eye" className="eye-icon" />
                    <div className="interest-header">
                      <img src="/interest-icon.jpg" alt="Interest Icon" className="interest-icon" />
                      <h3 className="interest-title">INTEREST</h3>
                    </div>
                    <div className="schools-box">
                      <p>Digital Art & Illustration</p>
                      <p>Aesthetic Playlists</p>
                      <p>Photography</p>
                      <p>UX Trends</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <h4 className="small-title">MY WORK</h4>
          <h2 className="main-title">RECENT PROJECT</h2>
          <div className="project-line"></div>
          <div className="projects-grid">
            <div className="project-card">
              <img src="/project-one.jpg" alt="Project 1" className="project-image" />
            </div>
            <div className="project-card">
              <img src="/project-two.jpg" alt="Project 2" className="project-image" />
            </div>
            <div className="project-card">
              <img src="/project-three.jpg" alt="Project 3" className="project-image" />
            </div>
          </div>
          <div className="project-line"></div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="services-section">
        <h2 className="services-title">SERVICES</h2>
        <p className="services-subtitle">What I can do for you</p>
        <div className="services-container">
          <div className="service-box purple-glow">
            <div className="icon-wrapper">
              <img src="/UIUX.png" alt="UI/UX Design" className="icon-img" />
            </div>
            <h3>UI/UX Design</h3>
            <p>Crafting human-centered digital interfaces</p>
          </div>
          <div className="service-box pink-glow">
            <div className="icon-wrapper">
              <img src="/USER-RESEARCH.png" alt="User Research" className="icon-img" />
            </div>
            <h3>User Research</h3>
            <p>Understanding user needs and behaviors</p>
          </div>
          <div className="service-character">
            <img src="/CENTER.png" alt="Character" />
          </div>
          <div className="service-box yellow-glow">
            <div className="icon-wrapper">
              <img src="/VISUAL-DESIGN.png" alt="Visual Design" className="icon-img" />
            </div>
            <h3>Visual Design</h3>
            <p>Creating modern, clean, and cohesive styles</p>
          </div>
          <div className="service-box blue-glow">
            <div className="icon-wrapper">
              <img src="/FRONT-END.png" alt="Front-End Collaboration" className="icon-img" />
            </div>
            <h3>Front-End Collaboration</h3>
            <p>Translating design into functional layouts</p>
          </div>
        </div>
      </section>
      {/* Contacts Section */}
      <section id="contacts" className="contacts-section">
        <h1 className="connect-title">LET’S CONNECT!</h1>
        <p className="connect-subtitle">
          Feel free to reach out for collaborations, design ideas, or to just say hi!
        </p>
        <div className="socials-container">
          <div className="social-item">
            <div className="icon-container instagram">
              <img src="/instagramicon.jpg" alt="Instagram" className="icon" />
            </div>
            <div className="divider"></div>
            <div className="social-text">
              <p>Instagram Account</p>
              <span>@iamaoi_14</span>
            </div>
          </div>
          <div className="social-item">
            <div className="icon-container gmail">
              <img src="/gmailicon.jpg" alt="Gmail" className="icon" />
            </div>
            <div className="divider"></div>
            <div className="social-text">
              <p>Email Account</p>
              <span>johannahignacio014@gmail.com</span>
            </div>
          </div>
          <div className="social-item">
            <div className="icon-container linkedin">
              <img src="/linkedinicon.jpg" alt="LinkedIn" className="icon" />
            </div>
            <div className="divider"></div>
            <div className="social-text">
              <p>LinkedIn Account</p>
              <span>Johannah Ignacio</span>
            </div>
          </div>
        </div>
        <div className="contact-info">
          <div className="info-item">
            <img src="/phone.png" className="small-icon" alt="Phone" />
            <div className="divider"></div>
            <p>Phone Number: 09657432745</p>
          </div>
          <div className="info-item">
            <img src="/homeaddress.png" className="small-icon" alt="Home" />
            <div className="divider"></div>
            <p>Home Address: Zone 6, Magdaguine St. Buyo, Goa, Camarines Sur</p>
          </div>
        </div>
      </section>
    </>
  );
}