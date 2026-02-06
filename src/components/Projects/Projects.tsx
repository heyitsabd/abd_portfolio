import "./Projects.css";

const projects = [
  {
    title: "FindCollege Web Application",
    tech: ["Spring Boot", "React", "Context API", "REST APIs"],
    description:
      "Built a full-stack college discovery platform using Spring Boot backend with real-time database integration. Developed APIs for authentication, college and course management, while implementing React Context API for login state handling and seamless UI interaction.",
    github: "https://github.com/heyitsabd/CllgWebApp",
    preview: "https://opengraph.githubassets.com/1/heyitsabd/CllgWebApp"
  },
  {
    title: "Dynamic News Application",
    tech: ["Next.js", "API Integration", "Pagination", "Responsive UI"],
    description:
      "Developed a real-time news application using external API integration. Implemented category-based browsing, search functionality, pagination, and dynamic news detail pages for enhanced user experience and structured content delivery.",
    github: "https://github.com/heyitsabd/newsApp",
    preview: "https://opengraph.githubassets.com/1/heyitsabd/newsApp"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="project-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            {/* GitHub Preview Background */}
            <div
              className="project-preview"
              style={{ backgroundImage: `url(${project.preview})` }}
            ></div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p className="project-desc">{project.description}</p>

              {/* Tech Stack */}
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              {/* Buttons */}
              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  View Code
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
