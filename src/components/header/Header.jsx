import React from 'react';

const text = `En reconversion, je suis aujourd'hui à la recherche d'un premier poste développeur frontend junior. 
Professionnel doté d'une grande expérience en contrôle de gestion, je suis capable de fonctionner de manière autonome, et fais preuve d'un fort sens de l'organisation et de capacités d’analyse avérées. 
De nature empathique, je suis à l’écoute des autres et je peux facilement travailler en équipe.
`;

const Header = () => {
  return (
    <header>
      <div className="logoCv-container">
        <p><span>A</span><span>PROPOS</span></p>
      </div>
      <div className="about-container">
        <h3>Daniel Gonzalez</h3>
        <h4>Développeur Front-End</h4>
        <p>{text}</p>
      </div>
    </header>
  );
};

export default Header;
