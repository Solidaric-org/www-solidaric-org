import React from 'react';

import CapabilityList from './CapabilityList';

const Engage = () =>
  <section id="engage" className="wrapper style2 fade-up">
    <div className="inner">
      <h2>Mitmachen</h2>
      <p>
        Toll, dass Du Dich beteiligst und Deinen Beitrag leistest!
        <br/>
        So eine große Aufgabe geht nur mit Hilfe vieler Hände und Unterstützer.
      </p>
      <p>
        Du findest hier Angebote bei denen Du Dich gerne einbringen kannst oder
        Du stellst Deine eigenen&nbsp;Ideen&nbsp;vor.
      </p>
      <div className="features">
        <CapabilityList />
      </div>
    </div>
  </section>

export default Engage;
