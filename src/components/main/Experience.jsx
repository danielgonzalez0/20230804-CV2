import React from 'react';
import Title from '../title/Title';
import iconsrc from '../../assets/img/julie/valiseBBG.png';

const Experience = () => {
  const experience = [{
    entreprise: "BMW Finance (groupe BMW France)",
    jobs: [
      {
        id: "exp-1",
        title: "Responsable Financement Réseau",
        sub: '10/2022 - 05/2025',
        desc: [{
          id: "desc-1",
          descTitle: "Accompagnement du réseau :",
          descSub: [
            "Conseils et support quotidien auprès des concessionnaires sur le financement de leurs stocks",
            "Mise en avant des solutions de financement adaptées aux besoins spécifiques des concessionnaires",
            "Formation des nouveaux membres du réseau (utilisation des outils, compréhension des plans de financement et de la tarification)"
          ]
        },
        {
          id: "desc-2",
          descTitle: "Pilotage des conditions de financement :",
          descSub: [
            "Élaboration et suivi des taux appliqués aux concessionnaires, garantissant l’atteinte des objectifs de marge tout en maintenant une position concurrentielle",

          ]
        },
        {
          id: "desc-3",
          descTitle: "Collaboration transverse avec différentes équipes :",
          descSub: [
            "Contrôle de gestion (tarification réseau)",
            "Analystes crédit (gestion des dossiers de crédit, comités crédit)",
            "Équipes terrain (visites communes en concession et partage d’informations)",
            "Équipes BMW France"
          ]
        },
        {
          id: "desc-4",
          descTitle: "Encadrement d’une équipe :",
          descSub: [
            "Pilotage des activités opérationnelles et accompagnement individuel pour développer les compétences de chacun",
          ]
        },
        ],
      },
      {
        id: "exp-2",
        title: "Chargée d'études financement réseaux",
        sub: '10/2019 - 09/2022',
      }
      ,
      {
        id: "exp-3",
        title: "Analyste crédit financement réseaux",
        sub: '02/2017 - 09/2019 ',
      },
    ],
  }, // end bmw
  {
    entreprise: "Alphabet France (groupe BMW France)",
    jobs: [
      {
        id: "exp-4",
        title: "Analyste Crédit",
        sub: '04/2012 - 01/2017',
      },
      {
        id: "exp-5",
        title: "Analyste Pricing",
        sub: '05/2011 - 03/2012',
      },
    ]
  }]


  return (
    <div className="experience">
      <Title title="Expérience professionnelle" iconSrc={iconsrc} />
      <div className="experience-container">

        {experience.map((entreprise, index) => (
          <>
            <div className="experience-title" key={index}>
              <h3>{entreprise.entreprise} </h3>
            </div>

            <div className='job-container'>
              {entreprise.jobs.map((job) => (
                <>
                  <div>
                    <div className="experience-job-title" key={job.id}>{job.title}  <span>{job.sub}</span></div>  
                  </div>

                  {job.desc ? job.desc.map((item, index) => (
                    <ul key={`${item.id}${index}`}>
                      <p>{item.descTitle}</p>
                      {item.descSub.map((item, index) => (
                        <li key={`${item.id}${index}`}>- {item}</li>
                      ))}
                    </ul>
                  )) : null}


                </>
              ))}
            </div>
          </>
        ))}




 
      </div>
    </div>
  );
};

export default Experience;
