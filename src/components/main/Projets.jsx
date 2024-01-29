import React, { useState } from 'react';
import ContentHook from './ContentHook';
import data from '../../assets/data/projets.json'

const Projets = () => {

  const [projets] = useState(data.projets);


  return (
    <div className='projets'>
      <div className="projets-left">
        <p>
          <span>PROJETS</span>
        </p>
      </div>
      <div className="projets-container">
        {projets.map((projet, index) => {
          return (
            <>
            <ContentHook
              key={index}
              title={projet.title}
              desc={projet.desc}
              icons={projet.icons}
              links={projet.links}
            />
        
            </>
          );
        })}
      </div>

    </div>
  );
};

export default Projets;