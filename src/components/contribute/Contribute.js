import React from 'react';
import { Link } from 'gatsby';
import Scroll from '../common/Scroll';

import CapabilityList from '../capability/CapabilityList';
import CONTRIBUTIONS_DATA from './data/Contributions.yaml'

const Contribute = () =>
  <section id="contribute" className="wrapper style3 fade-up">
    <div className="inner">
      <h2>Was ist zu tun?</h2>

      <p>
        Heute, am 20.03.2020, startete der #WirVsVirus Hackathon. Viele sind enthusiastisch und wollen helfen.
        Mit <i>Solidaric.org</i> entsteht hoffentlich eine Übersicht mit Möglichkeiten zur direkten Hilfe.
        Damit diese Initiative mit Leben gefüllt wird und so die Menschen in Deiner Nähe unterstützt,
        <span className="no-wrap"> ist u.a.</span> <span className="no-wrap">das Folgende wichtig —</span>
        <span className="no-wrap"><strong> es kommt jetzt auf uns alle an!</strong></span>
      </p>
      <p>
        <Scroll type="id" element="engage">
          <a href="#engage" className="button">
            Ich mache mit
          </a>
        </Scroll>
      </p>

      <div className="features without-borders">
        {CapabilityList(CONTRIBUTIONS_DATA)}
      </div>

      {/*
      <ul className="actions">
        <li>
          <Link className="button" to="/de/solidaric-die-idee">
            Erfahre mehr ...
          </Link>
        </li>
      </ul>
      */}
    </div>
  </section>

export default Contribute;
