import React from 'react';
import { Link } from 'gatsby';
import Scroll from '../common/Scroll';

import CapabilityList from '../capability/CapabilityList';
import CONTRIBUTE_ITEMS from './ContributeItems.yaml'

const Contribute = () =>
  <section id="contribute" className="wrapper style3 fade-up">
    <div className="inner">
      <h2>Was ist zu tun?</h2>

      <p>
        Heute, am 20.03.2020, existiert nur die Idee und ein erster Projekt-Entwurf. Damit <i>Solidaric.org</i> schnell
        zum Leben erwacht und die Menschen in unserer Nähe unterstützt, benötigen wir u.a. Antworten auf die folgenden
        Fragen sowie umgesetzte Lösungen.
        <strong> Es kommt auf uns alle an!</strong>
      </p>
      <p>
        <Scroll type="id" element="engage">
          <a href="#engage" className="button">
            Ich mache mit
          </a>
        </Scroll>
      </p>

      <div className="features">
        {CapabilityList(CONTRIBUTE_ITEMS)}
      </div>

      <ul className="actions">
        <li>
          <Link className="button" to="/de/solidaric-die-idee">
            Erfahre mehr ...
          </Link>
        </li>
      </ul>
    </div>
  </section>

export default Contribute;
