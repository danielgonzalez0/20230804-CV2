import React from 'react';
import analyse from '../../assets/img/soft/analysing.png';
import deadline from '../../assets/img/soft/deadline.png';
import autonomie from '../../assets/img/soft/autonomy.png';
import performance from '../../assets/img/soft/performance.png';
import equipe from '../../assets/img/soft/team-spirit.png';
// import styled from 'styled-components';

// const StyledSpan = styled.span`
//   & {
//     display: block;
//     margin: 0 auto;
//     position: relative;
//     width: 100%;
//   }
//   &:after,
//   &:before {
//     position: absolute;
//     content: '';
//     bottom: -10px;
//     left: 0;
//     height: 7px;
//   }
//   &:after {
//     z-index: 2;
//     width: 100%;
//     background: rgb(218, 222, 223);
//   }
//   &:before {
//     z-index: 3;
//     width: ${(props) => props.$width || '100%'};
//     background: rgb(250, 241, 0);
//   }
// `;

const SoftSkills = () => {
  const array = [
    { name: `Capacité d'apatation`, width: '80%', icon: performance },
    { name: 'Organisation et Autonomie', width: '85%', icon: autonomie },
    { name: `Esprit d'équipe`, width: '90%', icon: equipe },
    { name: `Capacité d'analyse`, width: '90%', icon: analyse },
    { name: 'Rigueur, respect des délais', width: '95%', icon: deadline },
  ];
  return (
    <div className="softSkills">
      <h3>Soft skills</h3>
      <ul>
        {array.map((skill, index) => (
          <li key={index}>
            {' '}
            <img src={skill.icon} alt={skill.name} />
            {skill.name}
            {/* <StyledSpan $width={skill.width}>{skill.name}</StyledSpan> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoftSkills;
