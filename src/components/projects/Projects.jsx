import React, {useState} from 'react';
import './projects.css';

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
      setToggleState(index);
    }

  return (
    <section className="projects section" id='projects'>
        <h2 className="section__title" id='projects'>Projects</h2>
        <span className="section__subtitle">Projects over the years</span>

        <div className="projects__container container grid">
          <div className="projects__content">
            <div>
              <i className="uil uil-arrow projects__icon"></i>
              <h3 className="projects__title">Photography <br /> Portfolio Website</h3>
            </div>

            <span className="projects__button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>

            <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
              <div className="projects__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                <img src="" alt="" className="projects__modal-image" />
                <h3 className="projects__modal-title">Photography Portfolio</h3>
                <p className="projects__modal-description">
                  Aug 2024 - Present
                </p>
                <p>hello</p>
                <a href="https://github.com/kohkikita/personal-portfolio-website" className="projects__modal-link">View Github</a>


                <ul className="projects__modal-services grid">
                  <li className="projects__modal-service">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                    Created detailed mockups using Figma and hand-drawings to bring the client's vision to life.
                    </p>
                  </li>
                  
                  <li className="projects__modal-service">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                    Developed a dynamic photography business website using React to create a platform that improved user engagement.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="projects__content">
            <div>
              <i className="uil uil-arrow projects__icon"></i>
              <h3 className="projects__title">Personal <br /> Portfolio Website</h3>
            </div>

            <span className="projects__button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right projects__button-icon"></i>
            </span>

            <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
              <div className="projects__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                <img src="" alt="" className="projects__modal-image" />
                <h3 className="projects__modal-title">Personal Portfolio</h3>
                <p className="projects__modal-description">
                  July 2024 - Present
                </p>

                <ul className="projects__modal-services grid">
                  <li className="projects__modal-service">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Created dynamic and interactive web application with React Framework.
                    </p>
                  </li>
                  
                  <li className="projects__modal-service">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Implemented seamless user experience across various devices with responsive design principles.
                    </p>
                  </li>

                  <li className="projects__modal-service">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
                      Achieved a clean and modern user interface with a focus on intuitive navigation and accessibility.
                    </p>
                  </li>

                  <li className="projects__modal-service">
                    <i className="uil uil-check-circle projects__modal-icon"></i>
                    <p className="projects__modal-info">
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