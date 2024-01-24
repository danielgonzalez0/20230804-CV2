import React from 'react';
import html from '../../assets/img/logo2/html-1.svg';
import css from '../../assets/img/logo2/css-3.svg';
import js from '../../assets/img/logo2/javascript-1.svg';
import react from '../../assets/img/logo2/react-2.svg';
import redux from '../../assets/img/logo2/redux.svg';
import sass from '../../assets/img/logo2/sass-1.svg';
import firebase from '../../assets/img/logo2/firebase-1.svg';
import ts from '../../assets/img/logo2/typescript-2.svg';
import mongoDB from '../../assets/img/logo2/mongodb-icon-1.svg';
import MySQL from '../../assets/img/logo2/mysql-6.svg';

const Stack = () => {
  const array = [
    { name: 'HTML', image: `${html}` },
    { name: 'CSS', image: `${css}` },
    { name: 'JS', image: `${js}` },
    { name: 'REACT', image: `${react}` },
    { name: 'REDUX', image: `${redux}` },
    { name: 'SASS', image: `${sass}` },
    { name: 'firebase', image: `${firebase}` },
    { name: 'TS', image: `${ts}` },
    { name: 'mongo', image: `${mongoDB}` },
    { name: 'mySQL', image: `${MySQL}` },
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
