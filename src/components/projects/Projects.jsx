import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <section className="projects section" id='projects'>
        <h2 className="section__title" id='skills'>Projects</h2>
        <span className="section__subtitle">Projects over the years</span>

        <div className="skills__container container grid">
          <div className="skills__content">
            <div>
              <i className="uil uil-arrow service__icon"></i>
              <h3 className="skills__title">Photography <br /> Portfolio Website</h3>
            </div>

            <span className="skills__button">
              View More
              <i className="uil uil-arrow-right skills__button-icon"></i>
            </span>

            <div className="skills__modal">
              <div className="skills__modal-content">
                <i className="uil uil-times skills__modal-close"></i>

                <img src="" alt="" className="skills__modal-image" />
                <h3 className="skills__modal-title">Photography Portfolio</h3>
                <p className="services__modal-description">
                  Aug 2024 - Present
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Created detailed mockups using Figma and hand-drawings to bring the client's vision to life.
                    </p>
                  </li>
                  
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Developed a dynamic photography business website using React to create a platform that improved user engagement.
                    </p>
                  </li>
                </ul>

              </div>
            </div>
          </div>

          <div className="skills__content">
            <div>
              <i className="uil uil-arrow service__icon"></i>
              <h3 className="skills__title">Personal <br /> Portfolio Website</h3>
            </div>

            <span className="skills__button">
              View More
              <i className="uil uil-arrow-right skills__button-icon"></i>
            </span>

            <div className="skills__modal">
              <div className="skills__modal-content">
                <i className="uil uil-times skills__modal-close"></i>

                <img src="" alt="" className="skills__modal-image" />
                <h3 className="skills__modal-title">Personal Portfolio</h3>
                <p className="services__modal-description">
                  July 2024 - Present
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Created dynamic and interactive web application with React Framework.
                    </p>
                  </li>
                  
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Implemented seamless user experience across various devices with responsive design principles.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Achieved a clean and modern user interface with a focus on intuitive navigation and accessibility.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Integrated a contact form using Email.js to enable users to send messages directly from the website.                    
                    </p>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
        
    </section>
  )
}

export default Projects