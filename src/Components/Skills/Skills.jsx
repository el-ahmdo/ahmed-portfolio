import React from "react";
import "./Skills.css";

const skillsData = [
  { name: "JavaScript", proficiency: "80%" },
  { name: "HTML", proficiency: "85%" },
  { name: "CSS", proficiency: "70%" },
  { name: "Java", proficiency: "60%" },
  { name: "React", proficiency: "70%" },
  { name: "Tailwind", proficiency: "70%" },
  { name: "Bootstrap", proficiency: "70%" },
  { name: "photoshop", proficiency: "60%" },
  { name: "canvas", proficiency: "80%" },
  { name: "microsoft office", proficiency: "90%" },
  { name: "capcut", proficiency: "70%" },
  { name: "powerApps", proficiency: "30%" },
];

const Skills = () => {
  return (
    <section id="skill" className="Skills-section-con">
      <div className="backGround-text-con">
        <p className="back-text">Skills</p>
        <p className="front-text">My Skills</p>
      </div>

      <div className="skills-container">
        <div className="skills-grid">
          <div className="column">
            {skillsData.slice(0, 6).map((skill) => (
              <div key={skill.name} className="skill">
                <div className="skill-name">
                  <div>{skill.name}</div> {skill.proficiency}
                </div>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: skill.proficiency }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="column">
            {skillsData.slice(6).map((skill) => (
              <div key={skill.name} className="skill">
                <div className="skill-name">
                  <div>{skill.name}</div> {skill.proficiency}
                </div>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: skill.proficiency }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
