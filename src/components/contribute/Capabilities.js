import React from 'react';
import { Link } from 'gatsby';
import Scroll from '../common/Scroll';

import CapabilityList from './CapabilityList';

const Contribute = () =>
  <section id="contribute" className="wrapper style3 fade-up">
    <div className="inner">
      <h2>Was ist zu tun?</h2>
      <p>
        Heute, am 20.03.2020, existiert nur die Idee und ein erster Projekt-Entwurf. Damit <i>Solidaric.org</i> schnell
        zum Leben erwacht und die Menschen in unserer Nähe unterstützt, benötigen wir u.a. Antworten auf die folgenden
        Fragen sowie umgesetzte Lösungen.
        <br />
        <br />
        <Scroll type="id" element="engage">
          <a href="#engage" className="button">
            MACH MIT!
          </a>
        </Scroll>
        <br />
        <br />
        <strong>Es kommt auf uns alle an!</strong>
      </p>
      <div className="features">
        <CapabilityList />
      </div>
      <ul className="actions">
        <li>
          <Link className="button" to="/de/solidaric-die-idee">
            Erfahre mehr
          </Link>
        </li>
      </ul>
    </div>
  </section>

export default Contribute;
