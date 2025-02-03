import React, { useState } from 'react';
import './projects.css';

const Projects = () => {
    const [modalStates, setModalStates] = useState({});

    const toggleTab = (index) => {
      setModalStates((prev) => ({
        ...prev,
        [index]: !prev[index], // Toggle specific modal
      }));
    };

    return (
        <section className="projects section" id='projects'>
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Projects over the years</span>

            <div className="projects__container container grid">
                {/* Project 1 */}
                <div className="projects__content">
                    <div>
                        <i className="uil uil-arrow projects__icon"></i>
                        <h3 className="projects__title">IoT Wireless <br /> Image Display</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={modalStates[1] ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(1)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">IoT Wireless Image Display System</h3>
                            <p className="projects__modal-description">June 2024 - August 2024</p>

                            <ul className="projects__modal-services grid">
                                <li className="projects__modal-service">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Tools: ESP32, Arduino, C++
                                    </p>
                                </li>
                                <li className="projects__modal-service">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Developed an IoT image display system using ESP32 with an LCD screen utilizing the SPI interface
                                    </p>
                                </li>
                                <li className="projects__modal-service">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                      Integrated Adafruit libraries for efficient graphics rendering on the LCD
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="projects__content">
                    <div>
                        <i className="uil uil-arrow projects__icon"></i>
                        <h3 className="projects__title">Personal <br /> Portfolio Website</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(2)}>
                        View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={modalStates[2] ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(2)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">Personal Portfolio</h3>
                            <p className="projects__modal-description">July 2024 - Present</p>

                            <ul className="projects__modal-services grid">
                                <li className="projects__modal-service">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Created a dynamic and interactive web application with React.
                                    </p>
                                </li>
                                <li className="projects__modal-service">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Implemented responsive design principles.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="projects__content">
                    <div>
                        <i className="uil uil-arrow projects__icon"></i>
                        <h3 className="projects__title">FPGA <br /> Record Player</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(3)}>
                        View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={modalStates[3] ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(3)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">FPGA Record Player</h3>
                            <p className="projects__modal-description">February 2025 - Present</p>

                            <ul className="projects__modal-services grid">
                                <li className="projects__modal-service">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        More information coming soon...
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Project 4 */}
                <div className="projects__content">
                    <div>
                        <i className="uil uil-arrow projects__icon"></i>
                        <h3 className="projects__title">Fullstack <br /> Website</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(4)}>
                        View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={modalStates[4] ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(4)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">Fullstack Website</h3>
                            <p className="projects__modal-description">February 2025 - Present</p>

                            <ul className="projects__modal-services grid">
                                <li className="projects__modal-service">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        More information coming soon...
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
