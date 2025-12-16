import React from 'react';
import ContentHook from './ContentHook';

const Experience = () => {
  const experience = [
    // {
    //   title: 'Alternant développeur Frontend – Design System',
    //   sub: 'Société Générale, VDF 09/2024 - 11/2025',
    //   // desc: `Développpeur front-end React dans l'équipe Design System`,
    //   array: [
    //     `Développement et évolution des composants du Design System.`,
    //     `Migration de composants vers TypeScript, pair programming.`,
    //     `Support aux équipes consommatrices : analyse et corrections d’issues.`,
    //     `Utilisation de React, TypeScript, Storybook, styled-components.`,
    //     `Participation à l’implémentation d’un nouveau thème global.`,
    //     `Contribution à la transition du DS : sortie progressive de d’Ant Design.`
    //   ]
    // },
    {
      title: 'Contrôleur de gestion retail 07/2019 - 04/2021',
      sub: 'FCA Capital France, Trappes',
      // desc: `Elaboration et suivi budgétaire, pilotage et analyse du résultat, élaboration du compte de résultat et bilan aux mormes IFRS`,
    },
    {
      title: 'Contrôleur de gestion 07/2012 - 07/2019',
      sub: 'Alphabet (BMW group), Rueil-Malmaison',
      // desc: `Budget et forecast, risque sur la valeur résiduelle, marge opérationnelle assurance et contract management, suivi de la flotte de la profitabilité`,
    },
    {
      title: 'Contrôleur de gestion bancaire 04/2011 - 03/2012',
      sub: 'KBL SWISS Private Banking, Genève Suisse',
      // desc: `Elaboration et suivi budgétaire, pilotage et analyse du résultat`,
    },
    {
      title: 'Financial account manager 08/2006 - 12/2010',
      sub: 'Société Générale (SGCIB), la  Défense ',
      // desc: `Analyse des frais généraux et présentation des reporting, intégration et gestion des bases de données(Access)`,
    },
  ];
  return (
    <div className="experience">
      <div className="experience-left">
        <p>
          <span>EXPERIENCES ANTERIEURES</span>
        </p>
      </div>
      <div className="experience-container">
        {experience.map((work, index) => (
          <ContentHook
            key={index}
            title={work.title}
            subtitle={work.sub}
            desc={work.desc}
            array={work.array}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
