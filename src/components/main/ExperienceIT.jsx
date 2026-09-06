import React from 'react';
import ContentHook from './ContentHook';

const experience = [
  {
    title: 'Alternant développeur Frontend – Design System',
    sub: 'Société Générale, VDF 09/2024 - 11/2025',
    // desc: `Développpeur front-end React dans l'équipe Design System`,
    array: [
      `Développement et évolution des composants du Design System.`,
      `Migration de composants vers TypeScript, pair programming.`,
      `Support aux équipes consommatrices : analyse et corrections d’issues.`,
      `Utilisation de React, TypeScript, Storybook, styled-components.`,
      `Travail sur lʼaccessibilité (WCAG / a11y) et la cohérence UI`,
      `Contribution à la transition du DS : sortie progressive de d’Ant Design.`
    ]
  }
];

const ExperienceIT = () => {
  return (
    <div className="education">
        <div className="education-left">
            <p><span>EXPERIENCE</span></p>
        </div>
      <div className="education-container">
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

export default ExperienceIT;
