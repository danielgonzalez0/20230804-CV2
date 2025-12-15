import React from 'react';

// const text = (
//   <>
//     14 mois d’alternance au Design System de la Société Générale (React, TypeScript, accessibilité, CI/CD).
//     <br />
//     Formé à Angular & Spring Boot avec réalisation d’une application fullstack sécurisée (API, JWT, MySQL).
//     <br />
//     J’aime apprendre et concevoir des solutions claires, maintenables et pensées pour durer.
//     <br />
//   </>
// );

// const text = (
//   <>
//     Développeur fullstack avec une expérience en React acquise en alternance et en projets réels avec 3 titres RNCP obtenus.
//     <br />
//     Je cherche à intégrer une équipe tech pour contribuer à des projets web concrets, en continuant à monter en compétences.
//     <br />
//     Autonome, rigoureux, j’aime apprendre et concevoir des solutions claires, maintenables et pensées pour durer.
//   </>
// );

// const textArray = [
//   'Développeur fullstack avec une expérience acquise en alternance et en projets réels avec 3 titres RNCP obtenus.',
//   'Je cherche à intégrer une équipe tech pour contribuer à des projets web concrets, en continuant à monter en compétences.',
//   'Autonome, rigoureux, j’aime apprendre et concevoir des solutions claires, maintenables et pensées pour durer.',
// ]
const textArray = [
  `Titulaire de trois titres RNCP et ancien contrôleur de gestion, j’ai réalisé 14 mois d’alternance au Design System de Société Générale (React, TypeScript, accessibilité, Storybook). `,
  `J’allie rigueur analytique et expertise technique pour concevoir des solutions claires, maintenables et durables, tout en développant mes compétences fullstack.`,
]
// const textArray = [
//   `Titulaire de trois titres RNCP, j’ai réalisé 14 mois d’alternance au Design System de la Société Générale, où j’ai travaillé sur React, TypeScript, l’accessibilité et storybook.`,
//   `Je recherche aujourd’hui des projets web concrets où continuer à progresser. Curieux et rigoureux, j’aime concevoir des solutions claires, maintenables et durables.`,
// ]

// const text = `Professionnel aguerri, je m’investis depuis 2 ans dans le développement web. Rigueur, autonomie, fiabilité et engagement sont autant de valeurs que je porte dans chaque projet. Pour moi, le métier de développeur représente une opportunité de partager des connaissances, d'apprendre de nouvelles technologies et de collaborer autour d'un objectif commun.`;
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
        <h4>Développeur Frontend en évolution vers le fullstack – React | Angular | Spring Boot</h4>
        <p>
        {textArray.map((line, index) => (
          <span key={index}>{line}</span>
        ))}
        </p>
      </div>
    </header>
  );
};

export default Header;
