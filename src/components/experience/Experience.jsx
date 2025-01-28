import React from 'react'
import "./experience.css"
const Experience = () => {
  return (
    <section className="experience section" id="experience">
        <h1 className="section__title">Work Experience</h1>
        <span className="section__subtitle">My Journey</span>

        <div className="experience__container container grid">
            <div className="company__year">
                <h2 className="experience__company">Aztec Electric Racing</h2>
                <h3 className="experience__year">2024 - Present</h3>
            </div>

            <div className="title__description">
                <h3 className="experience__title">Controls Software Engineer</h3>
                <p className="experience__description">
                Enhanced battery management system software using ESP32 and the Arduino platform.
                Developed and implemented a flag-based system to optimize cell balancing functionality.
                Led the integration of CAN communication into the battery management system, enabling transmission of error
                and flag messages to the driver.
                </p>
            </div>
        </div>

        <br />

        <div className="experience__container container grid">
            <div className="company__year">
                <h2 className="experience__company">Cyan Swim Academy</h2>
                <h3 className="experience__year">2021 - 2024</h3>
            </div>

            <div className="title__description">
                <h3 className="experience__title">Private Swimming Instructor</h3>
                <p className="experience__description">
                Taught basic skills of swimming to over 30 kids.
                One-on-one private lessons for kids (ages 4-15) and adults.
                Created comprehensive fitness programs tailored to the needs and goals of each individual.
                Provided positive reinforcement and motivation to increase student confidence and performance.
                </p>
            </div>
        </div>

    
    </section>
  )
}

export default Experience