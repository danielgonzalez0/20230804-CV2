import React from 'react';

const text = `Professionnel aguerri, je m’investis depuis 2 ans dans le développement web. Rigueur, autonomie, fiabilité et engagement sont autant de valeurs que je porte dans chaque projet. Pour moi, le métier de développeur représente une opportunité de partager des connaissances, d'apprendre de nouvelles technologies et de collaborer autour d'un objectif commun.`;
// const text = `Développeur web spécialisé en React, je suis capable de travailler sur des projets d'intégration web, d'optimisation ou de débogage de code, ou encore d'implémentation de nouvelles fonctionnalités.
// Ancien contrôleur de gestion, j'ai pu acquérir de nombreuses connaissances financières et comptables sur la gestion d'entreprise. 
// `;
// const text = `Développeur frontend spécialisé en React, je suis capable de travailler sur des projets d'intégration web, d'optimisation ou de débogage de code, ou encore d'implémentation de nouvelles fonctionnalités.
// Ancien contrôleur de gestion, j'ai pu acquérir de nombreuses connaissances financières et comptables sur la gestion d'entreprise. 
// `;


const Header = () => {
  return (
    <header>
      <div className="logoCv-container">
        <p><span>RESUME</span></p>
      </div>
      <div className="about-container">
        <h3>Daniel Gonzalez</h3>
        <h4>Développeur fullstack en recherche d'alternance</h4>
        <p>{text}</p>
      </div>
    </header>
  );
};

export default Header;
