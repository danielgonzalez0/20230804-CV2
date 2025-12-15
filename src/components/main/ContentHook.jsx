import React from 'react';

const ContentHook = ({ title, subtitle, desc, array, links }) => {

  return (
    <div className="contentHook">
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      {desc && <ul className='contentHook-desc'>{desc}</ul>}
      {array && <ul className='contentHook-array'>
        {array.map((item, index) => (
          <li key={index}>- {item}</li>
        ))}
      </ul> }
      {/* {icons && <ul className='icons-container'>
        {icons.map((icon, index) => {
          return <li key={index}>{icon}</li>
        })}
      </ul>} */}
      {links && <ul className='links-container'>
        <li>
          <a
            href={links[1]}
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
          >
            DEMO
          </a>
        </li>
        <li>
          <a
            href={links[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
          >
            CODE
          </a>
        </li>
       </ul>
        }
    </div>
  );
};

export default ContentHook;
