import React from 'react';
// import html from '../../assets/img/logo2/html-1.svg';
// import css from '../../assets/img/logo2/css-3.svg';
import js from '../../assets/img/logo2/javascript-1.svg';
import react from '../../assets/img/logo2/react-2.svg';
import redux from '../../assets/img/logo2/redux.svg';
import sass from '../../assets/img/logo2/sass-1.svg';
// import firebase from '../../assets/img/logo2/firebase-1.svg';
import ts from '../../assets/img/logo2/typescript-2.svg';
// import mongoDB from '../../assets/img/logo2/mongodb-icon-1.svg';
import MySQL from '../../assets/img/logo2/mysql-6.svg';
import angular from '../../assets/img/logo/angular-icon.svg';
import spring from '../../assets/img/logo/spring-3.svg';
import actions from '../../assets/img/logo/github-icon-2.svg';
import docker from '../../assets/img/logo/docker-4.svg';


const Stack = () => {
  const array = [
    // { name: 'HTML', image: `${html}` },
    // { name: 'CSS', image: `${css}` },
    { name: 'JS', image: `${js}` },
    { name: 'TS', image: `${ts}` },
    { name: 'REACT', image: `${react}` },
    { name: 'REDUX', image: `${redux}` },
    { name: 'SASS', image: `${sass}` },
    { name: 'Angular', image: `${angular}` },
    { name: 'Spring', image: `${spring}` },
    { name: 'mySQL', image: `${MySQL}` },
    { name: 'Github Actions', image: `${actions}` },
    { name: 'Docker', image: `${docker}` },
  ];
  return (
    <div className="stack">
      <h3>Compétences techniques</h3>
      <ul className="stack-container">
        {array.map((stack, index) => {
          return (
            <li key={index}>
              <img src={stack.image} alt={stack.name} />
              <span>{stack.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Stack;
