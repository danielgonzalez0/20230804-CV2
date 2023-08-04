import React from 'react';
import france from '../../assets/img/logo2/france_flag_icon_228673.png';
import portugal from '../../assets/img/logo2/portugal_flag_icon_228688.png';
import anglais from '../../assets/img/logo2/gb_flag_great_britain_england_union_jack_english_icon_228674.png';

const Langue = () => {
  const array = [
    { note: 'C2', image: `${france}`, name: 'drapeau de la france' },
    { note: 'C2', image: `${portugal}`, name: 'drapeau du portugal' },
    { note: 'B2', image: `${anglais}`, name: 'drapeau du UK' },
  ];
  return (
    <div className="langue">
      <h3>Langues</h3>
      <ul className="langue-container">
        {array.map((langue, index) => (
          <li key={index}>
            <img src={langue.image} alt={langue.name} />{' '}
            <span>{langue.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Langue;
