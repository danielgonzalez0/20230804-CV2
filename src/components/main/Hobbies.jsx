import React from 'react';
import iconsrc from '../../assets/img/julie/agendaBBG.png';
import Title from '../title/Title';

const hobbies = [
  {
    id: "hob-1",
    title: "sport",
    desc: [`Pratique du Muay-Thaï, une vraie bouffée d'oxygène 3 fois par semaine. Ce sport de combat demande de la rigueur et de
l'autodiscipline.`],
  },
  {
    id: "hob-2",
    title: "objectif",
    desc: [`Objectif personnel 2022: Progresser en course à pied (endurance et vitesse). Cette discipline n'est clairement pas mon sport de prédilection. Le challenge va être d'autant plus important mais le succès d'autant plus savouré.`, `Je me fixe des objectifs atteignables, progressifs : Une 1ère course en Juin, la course Royale au château de Versailles (15KM). Un semi en Septembre.`],
  }
];

const Hobbies = () => {
  return (
    <div className="hobbies">
      <Title title="en dehors de l'hélice" iconSrc={iconsrc} />
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