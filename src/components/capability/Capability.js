import React from 'react';

import parseHTML from 'html-react-parser';

const Capability = ({ heading, description, iconClass, to }) =>
  <section>
    <span className={`icon major ${iconClass}`} />
    <h3>
      {to
        ? <a href={to.href}>{heading}</a>
        : <>{heading}</>
      }
    </h3>
    <p>
      {parseHTML(description)}
    </p>
    { to && to.label &&
    <div className="bottom-wrapper">
      <div className="actions">
        <a className='button' href={to.href}>{to.label}</a>
      </div>
    </div>
    }
  </section>

export default Capability;
