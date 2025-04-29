import React from 'react';
import "./about.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2>About Me</h2>
            <p>
              Hello! I'm <strong>Nimesha Sewmini</strong>, an enthusiastic <strong>Intern Developer</strong> passionate about <strong>Web Development</strong> and <strong>Software Engineering</strong>. I love building <em>responsive, user-friendly, and dynamic websites</em> that provide a smooth user experience.
            </p>
            <p>
              I have hands-on experience working on projects like portfolio websites, movie applications, food ordering systems, and more. My technical expertise includes:
            </p>
            <ul>
              <li>Frontend Development: React, HTML, CSS, JavaScript</li>
              <li>Backend Development: .NET, MySQL, XAMPP</li>
              <li>Other Tools: GitHub, Visual Studio, Figma, Adobe XD</li>
            </ul>
            <p>
              I'm passionate about continuous learning and have completed several online courses to sharpen my skills, including React, Frontend Development, Python, Java, and UI/UX Design.
            </p>
            <p>
              Feel free to connect with me via <a href="https://www.linkedin.com/in/nimesha-sewmini-983706285/">LinkedIn</a> or check out my projects on <a href="https://github.com/nimeshasewmini">GitHub</a>. I'm excited to collaborate on innovative projects and explore new opportunities!
            </p>
          </div>
          <div className="col-lg-6">
            <img src="/nimesha.jpg" alt="Nimesha" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
