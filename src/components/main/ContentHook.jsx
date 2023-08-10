import React from 'react';

const ContentHook = ({ title, subtitle, desc }) => {

  return (
    <div className="contentHook">
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      {desc && <ul className='contentHook-desc'>{desc}</ul>}
    </div>
  );
};

export default ContentHook;
