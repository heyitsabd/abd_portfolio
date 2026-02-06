import { useEffect, useState } from "react";
import "./Hero.css";

const roles = [
  "Software Engineer",
  "Frontend Developer",
  "React Specialist"
];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing Animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < roles[roleIndex].length) {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 70);

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  return (
    <section className="hero">
      <div className="hero-content">

        <h1 className="hero-name">Abdullah Ahmad</h1>

        <h2 className="hero-role">
          {text}
          <span className="cursor">|</span>
        </h2>

        <p className="hero-desc">
          Building scalable Web & Mobile applications using React, TypeScript,
          and AI-driven solutions focused on performance, usability, and modern
          user experiences.
        </p>

        {/* CTA Buttons */}
        <div className="hero-buttons">
          <a href="#contact" className="primary-btn">
            Hire Me
          </a>

          <a href="#projects" className="secondary-btn">
            View Projects
          </a>
        </div>

        {/* Tech badges */}
        <div className="tech-badges">
          <span>React</span>
          <span>TypeScript</span>
          <span>Next.js</span>
          <span>Firebase</span>
        </div>

      </div>

      {/* Background Glow */}
      <div className="hero-glow"></div>
    </section>
  );
};

export default Hero;
