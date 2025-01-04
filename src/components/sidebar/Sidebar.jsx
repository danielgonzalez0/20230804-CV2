import React from 'react';
import userImg from '../../assets/img/daniel_small.jpg';
import Stack from './Stack';
import SoftSkills from './SoftSkills';
import Langue from './Langue';
import Contact from './Contact';

const Sidebar = () => {
  return (
    <>
      <div className="img-container">
        <img
          src={userImg}
          alt="portrait de profil"
          style={{ maxWidth: '100%', height: 'auto', width: 'auto',borderRadius: '50%'}}
        />
      </div>
      <div className="user">
        <Stack/>
        <SoftSkills/>
        <Langue/>
      </div>
        <Contact/>
    </>
  );
};

export default Sidebar;
