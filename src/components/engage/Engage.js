import React from 'react';

import CapabilityList from '../capability/CapabilityList';
import ENGAGE_STABLE_ITEMS from './EngageStableItems';
import ENGAGE_PROTOTYPE_ITEMS from './EngagePrototypeItems';

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
      <br />
      <h3>Verfügbare Projekte</h3>
      <p>
        Diese Angebote sind online und haben ihren regulären Betrieb aufgenommen.
      </p>
      <div className="features">
        {CapabilityList(ENGAGE_STABLE_ITEMS)}
      </div>
      <br />
      <h3>Ideen und Prototypen</h3>
      <p>
        Diese Projekte sind noch in der Entwicklung und benötigen bestimmt auch Deine Mithilfe.
      </p>
      <div className="features">
        {CapabilityList(ENGAGE_PROTOTYPE_ITEMS)}
      </div>
    </div>
  </section>

export default Engage;
