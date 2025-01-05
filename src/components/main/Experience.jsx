import React from 'react';
import Title from '../title/Title';
import iconsrc from '../../assets/img/julie/valiseBBG.png';

const Experience = () => {
  const experience = [
    {
      id: "exp-1",
      title: "Chargée d'études financement réseaux BMW FINANCE",
      sub: 'depuis Novembre 2019',
      desc: [`Gestion de la relation avec le réseau de concessionnaires`, `Préparation des revues de crédit et présentation des analyses en comité`, `Évaluation et dimensionnement des besoins de financement du réseau de concessionnaires`]
    }
    ,
    {
      id: "exp-2",
      title: "Analyste crédit financement réseaux BMW FINANCE",
      sub: 'Février 2017 - Octobre 2019 ',
      desc: [`Etude des demandes de financement Wholesale pour le réseau de concessionnaires`, `Recommandation motivée et structurée en respectant la réglementation bancaire`, `Contribution à l’évolution des méthodes et procédures de suivi et de mesure des risques`]
    },
    {
      id: "exp-3",
      title: "ALPHABET FRANCE",
      sub: 'Mai 2011 - Janvier 2017',
      desc: [`Analyste Crédit`, `Analyste Pricing`]
    },

  ];
  return (
    <div className="experience">
      <Title title="Expérience professionnelle" iconSrc={iconsrc} />
      <div className="experience-container">
        {experience.map((work) => (
          <>
            <div className="experience-title" key={work.id}>
              <h3>{work.title} </h3>
              <span>{work.sub}</span>
            </div>
            <ul>
              {work.desc.map((item, index) => (
                <li key={`${work.id}${index}`}>- {item}</li>
              ))}
            </ul>
          </>

        ))}
      </div>
    </div>
  );
};

export default Experience;
