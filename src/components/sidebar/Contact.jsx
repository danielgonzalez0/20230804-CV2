import React from 'react';
import qrcode from '../../assets/img/logo2/qr-code-linkedin.png';

const Contact = () => {
  return (
    <div className="contact">
      <h3>COORDONNÉES</h3>
      <div className="container">
        <h4>TEL</h4>
        <p>+33 6 60 29 91 14</p>
      </div>
      <div className="container">
        <h4>EMAIL</h4>
        <p>daniel.gonzalez.02@gmail.com</p>
      </div>
      <div className="container">
        <h4>PORTFOLIO</h4>
        <p>gonzalez-daniel.com</p>
      </div>
      <div className="adresse-container">
        <h4>ADRESSE</h4>
        <p>85 résidence Elysée 2</p>
        <p>78170 La Celle-Saint-Cloud</p>
      </div>
      <img src={qrcode} alt="linkedin qr code" />
    </div>
  );
};

export default Contact;
