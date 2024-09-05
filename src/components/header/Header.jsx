import { useState, useEffect } from 'react';
import "./header.css";
import CV from './../../assets/Kita-CV.pdf';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /*===== Toggle Menu =====*/
  const [Toggle, showMenu] = useState(false);

  return (
    <header className={`header ${scrolled ? "scroll-header" : ""}`}>
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Kita
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__items">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__items">
              <a href="#skills" className="nav__link">
                <i className="uil uil-edit nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__items">
              <a href="#experience" className="nav__link">
                <i className="uil uil-bag nav__icon"></i> Experience
              </a>
            </li>

            <li className="nav__items">
              <a href="#projects" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Projects
              </a>
            </li>

            <li className="nav__items">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>

            <li className="nav__items">
              <a href={CV} className="nav__link" target='_blank' rel="noreferrer">
                <i className="uil uil-message nav__icon"></i> Resume
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
