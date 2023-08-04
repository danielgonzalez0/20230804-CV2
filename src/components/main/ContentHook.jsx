import React from 'react';

const ContentHook = ({ title, subtitle, desc }) => {

  return (
    <div className="contentHook">
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      {desc && <p>{desc}</p>}
    </div>
  );
};

export default ContentHook;
