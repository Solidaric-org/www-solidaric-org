import React from 'react';

const Capability = ({ iconClass, heading, description }) =>
  <section>
    <span className={`icon major ${iconClass}`} />
    <h3>{heading}</h3>
    <p>{description}</p>
  </section>

export default Capability;
