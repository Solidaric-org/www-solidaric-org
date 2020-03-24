import React from 'react';

import CapabilityList from '../capability/CapabilityList';
import ENGAGE_STABLE_ITEMS from './EngageStableItems.yaml';
import ENGAGE_PROTOTYPE_ITEMS from './EngagePrototypeItems.yaml';

const Engage = () =>
  <section id="engage" className="wrapper style2 fade-up">
    <div className="inner">
      <h2>Mitmachen - Jetzt unterstützen!</h2>
      <p>
        Toll, dass Du Dich beteiligst und Deinen Beitrag leistest!
        <br/>
        So eine große Aufgabe geht nur mit Hilfe vieler Hände und Unterstützer.
      </p>
      <p>
        Du findest hier Angebote sowie bestehende Initiativen bei denen Du Dich
        gerne einbringen kannst oder Du stellst Deine eigenen&nbsp;Ideen&nbsp;vor.
      </p>

      <br />

      <h3>Verfügbare Initiativen</h3>
      <p></p>
      <div className="features">
        {CapabilityList(ENGAGE_STABLE_ITEMS)}
      </div>

      <br />

      <h3>Ideen und Prototypen</h3>
      <p>
        <i>Diese Projekte sind noch in der Entwicklung und freuen sich bestimmt auch
        über Deine Mithilfe.</i>
      </p>
      <div className="features">
        {CapabilityList(ENGAGE_PROTOTYPE_ITEMS)}
      </div>
    </div>
  </section>

export default Engage;
