import React from 'react';
import { Link } from 'gatsby';

const Capability = ({ iconClass, heading, description, to }) =>
  <section>
    <span className={`icon major ${iconClass}`} />
    <h3>{heading}</h3>
    <p>{description}</p>
    <div className="bottom-wrapper">
      <div className="actions">
        <Link className='button' to={to.href}>{to.label == '' ? heading : to.label}</Link>
      </div>
    </div>
  </section>

export default Capability;
