import React from 'react';

import parseHTML from 'html-react-parser';

const Capability = ({ heading, description, iconClass, to }) =>
  <section>
    { heading !== '' &&
      <span className={`icon major ${iconClass}`} />
    }
    <h3>{parseHTML(heading)}</h3>
    <p>{parseHTML(description)}</p>
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
