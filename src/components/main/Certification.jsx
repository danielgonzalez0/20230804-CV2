import React from 'react';
import ContentHook from './ContentHook';

const Certification = () => {
  const array1 = [
    `Créer des applications web avec Javascript et React`,
    `Mettre en place des dashboards et des graphiques`,
    `Moderniser / optimiser du code existant`,
    `Mettre en œuvre des test unitaires et d'intégration`,
    `Créer des algorithmes de recherche et de tri`,
  ];
  const array2 = [
    `Intégrer une maquette en HTML / CSS`,
    `Créer des animations avec Sass`,
    `Appliquer les standards du web (SEO, accessibilité)`,
    `Utiliser JS pour créer des interactions avec l'utilisateur`,
    `Créer et gérer une base de données NoSQL et SQL`,
  ];

  const certification = [
    {
      title: 'Développeur Frontend - Javascript React 09/2022 - 09/2023',
      sub: 'formation Openclassrooms - titre RNCP niveau 6',
      desc: (
        <>
          {array1.map((skill, index) => {
            return <span key={index}>{skill}</span>;
          })}
        </>
      ),
    },
    {
      title: 'Développeur web 07/2021 - 08/2021',
      sub: 'formation Openclassrooms - titre RNCP niveau 5',
      desc: (
        <>
          {array2.map((skill, index) => {
            return <span key={index}>{skill}</span>;
          })}
        </>
      ),
    },
  ];
  return (
    <div className="certification">
      <div className="certification-left">
        <p>
          <span>CERTIFICATION</span>
        </p>
      </div>
      <div className="certification-container">
        {certification.map((certif, index) => (
          <ContentHook
            key={index}
            title={certif.title}
            subtitle={certif.sub}
            desc={certif.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Certification;
