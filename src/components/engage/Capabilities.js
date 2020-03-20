import React from 'react';
import { Link } from 'gatsby';

import CapabilityList from './CapabilityList';

const Engage = () =>
  <section id="engage" className="wrapper style2 fade-up">
    <div className="inner">
      <h2>Mitmachen</h2>
      <p>
        Toll, dass Du Dich beteiligst und Deinen Beitrag leistest!
        <br/>
        So ein großes Projekt geht nur mit Hilfe vieler Hände und Unterstützer.
        <br />
        Du findest hier verschiedene Anregungen und Aufgaben bei denen Du gerne mitwirken kannst oder
        Du bringst Deine eigenen Ideen ein.
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

export default Engage;
