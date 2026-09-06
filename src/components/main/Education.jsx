import React from 'react';
import Title from '../title/Title';
import iconsrc from '../../assets/img/julie/innovationBBG.png';

const experience = [
  {
    id: "par-0",
    title: "IFSI VERSAILLES",
    desc: [`Diplôme d'État d'infrimier | 2026 - 2029`
    ],
  },
  {
    id: "par-1",
    title: "Université de Rennes 1",
    desc: [`Master Économie et Gestion des Entreprises | 2008 - 2010`,
      `Licence AES | 2005 - 2008`
    ],
  }
  ,
  {
    id: "par-3",
    title: "Programmes d'échange",
    desc: [`Université de Guadalajara, Mexique | 2009 - 2010`,
      `Université d’Aristotle, Grèce | 2007 - 2008`
    ],
  },

];

const Education = () => {

  return (
    <div className="education">
      <Title title="parcours universitaire" iconSrc={iconsrc} />
      <div className="education-container">
        {experience.map((work) => (
          <>
            <div className="education-title" key={work.id}>
              <h3>{work.title}</h3>
              {work.sub && <span>{work.sub}</span>}
            <ul>
              {work.desc && work.desc.map((item, index) => (
                <li key={`educ${index}`}>- {item}</li>
              ))}
            </ul>
            </div>
          </>

        ))}
      </div>
    </div>
  );
};

export default Education;
