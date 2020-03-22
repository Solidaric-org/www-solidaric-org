import React from 'react';

const Capability = ({ iconClass, heading, description, to }) =>
  <section>
    { heading !== '' &&
      <span className={`icon major ${iconClass}`} />
    }
    <h3>{heading}</h3>
    <p>{description}</p>
    { to &&
    <div className="bottom-wrapper">
      { to.href !== '' &&
        <div className="actions">
          <a className='button' href={to.href}>{to.label === '' ? heading : to.label}</a>
        </div>
      }
    </div>
    }
  </section>

export default Capability;
