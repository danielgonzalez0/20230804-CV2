import React from 'react';
import iconsrc from '../../assets/img/julie/agendaBBG.png';
import Title from '../title/Title';

const hobbies = [
  {
    id: "hob-1",
    title: "",
    desc: [`Depuis 2022, je cultive l’autodiscipline, la détermination et la gestion du stress avec la pratique de la course à pied et du trail. Des qualités qui nourrissent également mon quotidien professionnel. J’accroche quelques dossards dans l’année en me fixant des objectifs atteignables et progressifs, le plaisir doit rester l’essentiel.`],
  },
];

const Hobbies = () => {
  return (
    <div className="hobbies">
      <Title title="en dehors du travail" iconSrc={iconsrc} />
      <div className="hobbies-container">
        {hobbies.map((hobby) => (
          <>
            <div className="hobbies-title" key={hobby.id}>
              {hobby.sub && <span>{hobby.sub}</span>}
            </div>
            <ul>
              {hobby.desc && hobby.desc.map((item, index) => (
                <li key={`hobb${index}`}>{item}</li>
              ))}
            </ul>
          </>

        ))}
      </div>
    </div>
  );
};

export default Hobbies;