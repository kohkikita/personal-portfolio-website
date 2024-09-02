import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
        <a href='https://www.linkedin.com/in/kohki-kita/' className="a home__social-icon" target="_blank" rel="noreferrer">
            <i className="uil uil-linkedin-alt"></i>
        </a>

        <a href='https://github.com/kohkikita' className="a home__social-icon" target="_blank" rel="noreferrer">
            <i className="uil uil-github-alt"></i>
        </a>
        
        <a href='https://www.instagram.com/kohki_kita/' className="a home__social-icon" target="_blank" rel="noreferrer">
            <i className="uil uil-instagram"></i>
        </a>
        {/* For putting the resume with the SNS icons
        <a href={CV} className="a home__social-icon" target="_blank" rel="noreferrer">
            <i className="uil uil-file"></i>
        </a>*/
        }
        
    </div>
  )
}

export default Social