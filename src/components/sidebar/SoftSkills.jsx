import React from 'react';
import styled from 'styled-components';


const StyledSpan = styled.span`
  & {
    display: block;
    margin: 0 auto;
    position: relative;
    width: 100%;
  }
  &:after,
  &:before {
    position: absolute;
    content: '';
    bottom: -10px;
    left: 0;
    height: 7px;
  }
  &:after {
    z-index: 2;
    width: 100%;
    background: rgb(218, 222, 223);
  }
  &:before {
    z-index: 3;
    width: ${(props) => props.$width || '100%'};
    background: rgb(250, 241, 0);
  }
`;

const SoftSkills = () => {
  const array = [
    { name: 'Pro activité / Réactivité', width: '80%' },
    { name: 'Organisation et Autonomie', width: '85%' },
    { name: `Esprit d'équipe`, width: '90%' },
    { name: `Capacité d'analyse`, width: '90%' },
    { name: 'Rigueur, respect des délais', width: '95%' },
  ];
  return (
    <div className="softSkills">
      <h3>Soft skills</h3>
      <ul>
        {array.map((skill, index) => (
          <li key={index}>
            <StyledSpan $width={skill.width}>{skill.name}</StyledSpan>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoftSkills;
