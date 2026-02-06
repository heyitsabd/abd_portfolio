import "./Skills.css";
import {
  FaReact,
  FaJava,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiRedux,
  SiReduxsaga,
  SiSpringboot,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb
} from "react-icons/si";


/* ✅ Types */
type Skill = {
  name: string;
  icon?: React.ReactNode;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Java", icon: <FaJava /> }
    ]
  },
{
  title: "Frameworks & Libraries",
  skills: [
    { name: "ReactJS", icon: <FaReact /> },
    { name: "React Native", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Redux Saga", icon: <SiReduxsaga /> },
    { name: "Spring Boot", icon: <SiSpringboot /> }
  ]
},
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Firebase" },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> }
    ]
  },
  {
    title: "Concepts",
    skills: [
      { name: "REST APIs" },
      { name: "State Management" },
      { name: "Component Architecture" },
      { name: "Performance Optimization" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-card">
            <h3>{category.title}</h3>

            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  {skill.icon && (
                    <span className="skill-icon">{skill.icon}</span>
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
