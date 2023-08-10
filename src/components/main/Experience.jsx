import React from 'react';
import ContentHook from './ContentHook';

const Experience = () => {
  const experience = [
    {
      title: 'Contrôleur de gestion retail 07/2019 - 04/2021',
      sub: 'FCA Capital France, Trappes',
      desc: `Elaboration et suivi budgétaire, pilotage et analyse du résultat, élaboration du compte de résultat et bilan aux mormes IFRS`,
    },
    {
      title: 'Conrtôleur de gestion 07/2012 - 07/2019',
      sub: 'Alphabet (BMW group), Rueil-Malmaison',
      desc: `Budget et forecast, risque sur la valeur résiduelle, marge opérationnelle assurance et contract management, suivi de la flotte de la profitabilité`,
    },
    {
      title: 'Contrôleur de gestion bancaire 04/2011 - 03/2012',
      sub: 'KBL SWISS Private Banking, Genève Suisse',
      desc: `Elaboration et suivi budgétaire, pilotage et analyse du résultat`,
    },
    {
      title: 'Financial account manager 07/2019 - 04/2021',
      sub: 'Société Générale (SGCIB), la  Défense ',
      desc: `Analyse des frais généraux et présentation des reporting, intégration et gestion des bases de données(Access)`,
    },
  ];
  return (
    <div className="experience">
      <div className="experience-left">
        <p>
          <span>EXPERIENCE</span>
        </p>
      </div>
      <div className="experience-container">
        {experience.map((work, index) => (
          <ContentHook
            key={index}
            title={work.title}
            subtitle={work.sub}
            desc={work.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
