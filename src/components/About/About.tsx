import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <h2 className="about-title">About Me</h2>

        <p className="about-text">
          I am a results-driven Software Developer passionate about building 
          scalable and intelligent web and mobile applications using modern 
          technologies like ReactJS, React Native, and TypeScript.
        </p>

        <p className="about-text">
          With strong frontend development experience, I focus on creating 
          high-performance, user-friendly, and maintainable applications. 
          I enjoy solving complex problems, designing reusable component 
          architectures, and integrating AI-powered features to enhance user 
          experiences and business solutions.
        </p>

        {/* Highlight Tags */}
        <div className="about-tags">
          <span>Full Stack Development</span>
          <span>AI Integration</span>
          <span>React Ecosystem</span>
          <span>Performance Optimization</span>
        </div>

      </div>
    </section>
  );
};

export default About;
