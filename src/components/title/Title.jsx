import React from 'react';

const Title = ({title, iconSrc}) => {
  return (
    <div className='title-wrapper'>
      <img src={iconSrc} alt="icon" />
      <h2>{title}</h2>
    </div>
  );
};

export default Title;