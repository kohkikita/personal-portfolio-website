import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Kohki Kita</h1>

            <ul className="footer__list">
                <li>
                    <a href="#skills" className="footer__link">
                        Skills
                    </a>
                </li>

                <li>
                    <a href="#experience" className="footer__link">
                        Experience
                    </a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">
                        Projects
                    </a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">
                        Contact
                    </a>
                </li>
            </ul>

            <div className="footer__social">
                <a href='https://www.linkedin.com/in/kohki-kita/' className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className="bx bxl-linkedin-square"></i>
                </a>

                <a href='https://github.com/kohkikita' className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className="bx bxl-github"></i>
                </a>
                
                <a href='https://www.instagram.com/kohki_kita/' className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className="bx bxl-instagram-alt"></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169; 2024 Kohki Kita
            </span>
        </div>
    </footer>
  )
}

export default Footer

