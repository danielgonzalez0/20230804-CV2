import React from 'react';
import ContentHook from './ContentHook';

const Certification = () => {
  const array1 = [
    {
      title: `Créer des applications web`,
      icons: ['REACT', 'REDUX', 'Design pattern', 'Custom hooks'],
    },
    {
      title: `Mettre en place des dashboards et des graphiques`,
      icons: ['librairies REACT'],
    },
    {
      title: `Moderniser / optimiser du code existant`,
      icons: ['Custom hooks', 'Refactoring'],
    },
    {
      title: `Mettre en œuvre des test unitaires et d'intégration`,
      icons: ['JEST', 'JEST-DOM'],
    },
    { title: `Créer des algorithmes de recherche`, icons: ['Algorigramme', `fiche d'investigation`] },
  ];
  const array2 = [
    {
      title: `Intégrer une maquette`,
      icons: ['HTML', 'CSS'],
    },
    {
      title: `Créer des animations avec Sass`,
      icons: ['SASS'],
    },
    {
      title: `Optimiser un site existant`,
      icons: [
        'SEO',
        'PERFORMANCE',
        'ACCESSIBILITÉ',
      ],
    },
    {
      title: `Utiliser JS pour créer des interactions`,
      icons: [
        'JS',
        'DOM',
        'Refactoring'
      ],
    },
    {
      title: `Créer une API sécurisée`,
      icons: ['MONGODB', 'JWT', 'EXPRESS', 'BCRYPT'],
    },
    {
      title: `Créer un réseau social d'entreprise`,
      icons: [
        'REACT',
        'REDUX',
        'MySQL',
        'EXPRESS',
      ],
    },
  ];

  const certification = [
    {
      title: 'Développeur Frontend - Javascript React 09/2022 - 09/2023',
      sub: 'formation Openclassrooms - titre RNCP niveau 6',
      desc: (
        <>
          {array1.map((skill, index) => {
            return (
              <li key={index}>
                <div className="desc-p"> {skill.title}</div>
                <div className="desc-span">
                  {' '}
                  {skill.icons.map((icon, index) => {
                    return <span key={index}>{icon}</span>;
                  })}
                </div>
              </li>
            );
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
            return (
              <li key={index}>
                <div className="desc-p"> {skill.title}</div>
                <div className="desc-span">
                  {' '}
                  {skill.icons.map((icon, index) => {
                    return <span key={index}>{icon}</span>;
                  })}
                </div>
              </li>
            );
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
