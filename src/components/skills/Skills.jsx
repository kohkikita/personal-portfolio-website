import React from 'react';
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id='skills'>
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Skills</span>

        <div className="skills__container container grid">
            
            {/* Programming Languages */}
            <div className="skills__content">
                <h3 className="skills__category">Programming Languages</h3>
                <ul className="skills__list">
                    <li className="skills__item">C</li>
                    <li className="skills__item">C++</li>
                    <li className="skills__item">Verilog</li>
                    <li className="skills__item">Python</li>
                    <li className="skills__item">JavaScript</li>
                </ul>
            </div>

            {/* Tools */}
            <div className="skills__content">
                <h3 className="skills__category">Programming Tools</h3>
                <ul className="skills__list">
                    <li className="skills__item">Git</li>
                    <li className="skills__item">VS Code</li>
                    <li className="skills__item">Arduino</li>
                    <li className="skills__item">Figma</li>
                    <li className="skills__item">Adobe Lightroom</li>
                </ul>
            </div>

            

        </div>
    </section>
  )
}

export default Skills;
