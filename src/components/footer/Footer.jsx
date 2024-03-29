import React from 'react';

const Footer = () => {
  return (
    <footer>
      <h3>LIENS</h3>
      <ul className="media-container">
        <li>
          <span className="fa-brands fa-linkedin"></span>
          <a
            href="https://www.linkedin.com/in/danielgonzalez1980/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
          >
            linkedin.com/in/danielgonzalez1980/
          </a>
        </li>
        <li>
          <span className="fa-brands fa-github"></span>
          <a
            href="https://github.com/danielgonzalez0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
          >
            github.com/danielgonzalez0
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
