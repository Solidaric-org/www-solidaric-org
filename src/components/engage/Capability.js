import React from 'react';
import { Link } from 'gatsby';

const Capability = ({ iconClass, heading, description, to }) =>
  <section>
    { heading != '' &&
      <span className={`icon major ${iconClass}`} />
    }
    <h3>{heading}</h3>
    <p>{description}</p>
    <div className="bottom-wrapper">
      { to && to.href != '' &&
        <div className="actions">
          <a className='button' href={to.href}>{to.label == '' ? heading : to.label}</a>
        </div>
      }
    </div>
  </section>

export default Capability;
