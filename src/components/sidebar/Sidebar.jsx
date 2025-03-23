import React from 'react';
import userImg from '../../assets/img/julie/profil-J.jpg';
import Contact from './Contact';

const Sidebar = () => {
  return (
    <>
      <div className="img-container">
        <img
          src={userImg}
          alt="portrait de profil"
          style={{ maxWidth: '100%', height: 'auto', width: 'auto', borderRadius: '50%' }}
        />
      </div>
      <h1>JULIE RUAULT</h1>
      <div className="user">
        <Contact />
      </div>
    </>
  );
};

export default Sidebar;
