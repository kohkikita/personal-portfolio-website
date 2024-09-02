import React from 'react'
import "./experience.css"
const Experience = () => {
  return (
    <section className="experience section" id="experience">
        <h1 className="section__title">Work Experience</h1>
        <span className="section__subtitle">My Journey</span>

        <div className="experience__container">
            <div className="company__year">
                <h2 className="experience__company">Cyan Swim Academy</h2>
                <h3 className="experience__year">2021 - Present</h3>
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