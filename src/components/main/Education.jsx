import React from 'react';
import ContentHook from './ContentHook';

const education = [
  {
    title: 'Gestion Entreprise, Master 2 09/2003 - 05/2006',
    sub: 'Reims Management School, Reims',
  },
  {
    title: 'Maîtrise de Science et Gestion, 09/2000 - 05/2002',
    sub: 'Université de Versailles St-Quentin, SQY',
  },
  {
    title: `DEUG d'Économie et Gestion, 09/1998 - 05/2000`,
    sub: 'Université de Versailles St-Quentin, SQY',
  },
];

const Education = () => {
  return (
    <div className="education">
        <div className="education-left">
            <p><span>FORMATION</span></p>
        </div>
      <div className="education-container">
        {education.map((degree, index) => (
          <ContentHook key={index} title={degree.title} subtitle={degree.sub} />
        ))}
      </div>
    </div>
  );
};

export default Education;
