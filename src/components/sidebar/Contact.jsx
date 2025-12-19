import React from 'react';
import telsrc from '../../assets/img/julie/telephoneB.png';
import mailsrc from '../../assets/img/julie/emailB.png';
// import adressesrc from '../../assets/img/julie/adresseB.png';

// const profil = [{
//   id: "profil-1", text: `Experte en financement, j'accompagne quotidiennement les concessionnaires dans la gestion et l’optimisation de leurs financements de stock tout en assurant la compétitivité et la rentabilité des produits de financement proposés.`
// },
// { id: "profil-2", text: `Je souhaite aborder l’année 2025 en explorant de nouveaux horizons et en me réinventant dans un nouveau domaine.` },
// ];
// const softskills = [{
//   id: "soft-1", text: `Je juge l’importance des différents sujets et les priorise`
// },
// {
//   id: "soft-2", text: `Je maîtrise la charge de travail pour délivrer dans les délais impartis`
// },
// { id: "soft-3", text: `J'apporte des solutions` },
// { id: "soft-4", text: `Je joue collectif` }
// ];

const profil = [{
  id: "profil-1",
  titre: "CROIX-ROUGE FRANÇAISE",
  text: `Formation premiers secours citoyen (PSC)`
},
{ id: "profil-2", 
  titre: "GROUPE BMW FRANCE",
  text: `Formation Sauveteur Secouriste du Travail (SST)` },
];
const softskills = [{
  id: "soft-1", text: `- Gestion des priorités`
},
{ id: "soft-2", text: `- Collaboration` },
{
  id: "soft-3", text: `- Adaptabilité`
},
{ id: "soft-4", text: `- Résilience` }
];



const Contact = () => {
  return (
    <div className="contact">
      <h3>FORMATION</h3>
      {profil.map((item) => (
        <>
          <p key={item.id} className='text-bold'>{item.titre}</p>
          <p key={item.id} className='text'>{item.text}</p>
        </>
       ))}
      <h3>COMPETENCES</h3>
      {softskills.map((item) => (<p key={item.id} className='text'>{item.text}</p>))}
      <h3>CONTACTEZ-MOI</h3>
      {/* <div className="container">
        <img src={adressesrc} alt="adresse" />
        <div className="wrapper">
          <p>85 résidence Elysée 2</p>
          <p>78170 La Celle-Saint-Cloud</p>
        </div>
      </div> */}
      <div className="container">
        <img src={mailsrc} alt="email" />
        <div className="wrapper">
          <p>julie_ruault@hotmail.fr</p>
        </div>
      </div>
      <div className="container">
        <img src={telsrc} alt="tel" />
        <div className="wrapper">
          <p>06 68 54 62 58</p>
        </div>
      </div>
      {/* <img src={qrcode} alt="linkedin qr code" /> */}
    </div>
  );
};

export default Contact;
