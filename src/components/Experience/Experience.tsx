import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="exp-title">Professional Experience</h2>

      <div className="timeline">

        {/* Paperflite */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="exp-card">
            <h3>
              <a
                href="https://www.paperflite.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="company-link"
              >
                Paperflite Marketing Technology
              </a>
            </h3>

            <p className="role">Software Developer | May 2025 - Present</p>

            <ul>
              <li>
                Designing and developing scalable, high-performance web
                applications using React, TypeScript, and modern UI architecture.
              </li>
              <li>
                Building reusable modular component systems to improve
                maintainability and development efficiency.
              </li>
              <li>
                Collaborating with backend teams to integrate APIs and optimize
                data workflows.
              </li>
              <li>
                Improving performance through optimized rendering, lazy loading,
                and state management.
              </li>
              <li>
                Working in agile teams to deliver feature enhancements and
                maintain code quality.
              </li>
            </ul>
          </div>
        </div>

        {/* Zarif Full Time */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="exp-card">
            <h3>
              <a
                href="https://dariff.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="company-link"
              >
                Zarif Quest International
              </a>
            </h3>

            <p className="role">Software Developer | July 2024 - May 2025</p>

            <ul>
              <li>
                Built responsive full-stack web applications using React and
                Firebase services.
              </li>
              <li>
                Developed a gaming web application with lottery-based evaluation
                and optimized database logic.
              </li>
              <li>
                Designed scalable component architecture and separated business
                logic into reusable utilities.
              </li>
              <li>
                Improved UI responsiveness across devices and browsers.
              </li>
            </ul>
          </div>
        </div>

        {/* Zarif Internship */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="exp-card">
            <h3>
              <a
                href="https://dariff.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="company-link"
              >
                Zarif Quest International
              </a>
            </h3>

            <p className="role">Software Developer Intern | Jan 2024 - June 2024</p>

            <ul>
              <li>
                Assisted in building frontend components using React and
                JavaScript.
              </li>
              <li>
                Learned real-world application architecture and development
                workflows.
              </li>
              <li>
                Supported feature implementation, debugging, and UI enhancement
                tasks.
              </li>
              <li>
                Gained hands-on experience with Firebase and cloud deployment.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
