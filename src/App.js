import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const certificates = [
    {
      name: "Java Certificate",
      file: "/certificates/Java_Programming_Certificate.pdf",
    },
    {
      name: "AI Data Annotation",
      file: "/certificates/AI_Data_Annotation_Training.pdf",
    },
    {
      name: "English Test",
      file: "/certificates/Duolingo_English_Test.pdf",
    },
  ];

  return (
    <div className={darkMode ? "App dark" : "App"}>

      <nav className="navbar">
        <div className="logo">Yordanos A.</div>

        <ul>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("skills")}>Skills</li>
          <li onClick={() => scrollToSection("certificates")}>Certificates</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>

        <div className="nav-actions">
          <button onClick={() => setDarkMode(!darkMode)}>🌙</button>

          <button
            className="hire-btn"
            onClick={() =>
              (window.location.href = "mailto:yordanosadane126@gmail.com")
            }
          >
            Hire Me
          </button>
        </div>
      </nav>

      <section id="home" className="section home">
        <div className="home-text">
          <h3 className="intro">Hi, I am Yordanos Adane</h3>

          <h1>
            Aspiring developer focused on <span>learning</span>, building, and
            improving every day.
          </h1>

          <a href="/resume.pdf" download className="secondary">
            Download CV
          </a>
        </div>

        <div className="home-image">
          <img src="/images/computer1.avif" alt="home" />
        </div>
      </section>

      <section id="about" className="section about">
        <div className="about-image">
          <img src="/images/image3.jpg" alt="about" />
        </div>

        <div className="about-text">
          <span className="tag">ABOUT ME</span>

          <h2>
            I am a Software Engineering student passionate about{" "}
            <span>technology</span>.
          </h2>

          <p>
            I am a Software Engineering student at Bahir Dar University,
            focused on developing my programming and data science skills.
          </p>

          <p>
            I also have experience in data annotation where I trained AI
            systems by labeling and organizing datasets.
          </p>
        </div>
      </section>

      <section id="skills" className="section skills">
        <h2>Skills</h2>

        <div className="skills-container">
          <div className="skills-bars">
            {[
              { name: "React", value: 70 },
              { name: "Node.js", value: 50 },
              { name: "Python", value: 80 },
              { name: "HTML", value: 90 },
              { name: "CSS", value: 50 },
              { name: "JavaScript", value: 60 },
              { name: "PHP", value: 70 },
            ].map((skill, i) => (
              <div key={i} className="skill">
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>

                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="skills-icons">
            <div>⚛️ React</div>
            <div>🟢 Node.js</div>
            <div>🐍 Python</div>
            <div>🌐 HTML</div>
            <div>🎨 CSS</div>
            <div>🟨 JavaScript</div>
            <div>🐘 PHP</div>
          </div>
        </div>
      </section>

      <section id="certificates" className="section certificates">
        <h2>Certificates</h2>

        <div className="cert-grid">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="cert-card"
              onClick={() => setSelectedCert(cert.file)}
            >
              <div className="cert-placeholder">
                📄 View Certificate
              </div>

              <h3>{cert.name}</h3>
              <p className="cert-type">PDF Document</p>
            </div>
          ))}
        </div>
      </section>

      {selectedCert && (
        <div className="modal" onClick={() => setSelectedCert(null)}>
          <div className="modal-content">
            <iframe
              src={selectedCert}
              width="100%"
              height="500px"
              title="certificate"
            />
          </div>
        </div>
      )}

      <section id="contact" className="section contact">
        <h2>Contact</h2>

        <div className="contact-cards">
          <a href="mailto:yordanosadane126@gmail.com">Email</a>
          <a href="https://github.com/Yordanos-Adane126">GitHub</a>
          <a href="https://www.linkedin.com/in/yordanos-adane/">LinkedIn</a>
          <a href="https://t.me/YOYEM16">Telegram</a>
          <a href="https://instagram.com/yordi_126">Instagram</a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Yordanos Adane. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;