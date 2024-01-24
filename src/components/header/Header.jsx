import React from 'react';

const text = `Développeur web spécialisé en React, je suis capable de travailler sur des projets d'intégration web, d'optimisation ou de débogage de code, ou encore d'implémentation de nouvelles fonctionnalités.
Ancien contrôleur de gestion, j'ai pu acquérir de nombreuses connaissances financières et comptables sur la gestion d'entreprise. 
`;
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
