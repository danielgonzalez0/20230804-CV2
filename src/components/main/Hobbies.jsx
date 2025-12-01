import React from 'react';
import iconsrc from '../../assets/img/julie/agendaBBG.png';
import Title from '../title/Title';

const hobbies = [
  {
    id: "hob-1",
    title: "",
    desc: [`Depuis 2022, la course à pied et le trail renforcent mon autodiscipline, ma détermination et ma gestion du stress: des atouts que j'applique au quotidien professionnel. J’accroche quelques dossards chaque année en me fixant des objectifs atteignables et progressifs, le plaisir doit rester l’essentiel.`],
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