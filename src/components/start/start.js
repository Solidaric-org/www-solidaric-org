import React from 'react';
import Scroll from '../common/Scroll';
import pic1 from '../../images/solidaric-org-icon.svg';


const Start = () =>
  <section id="start" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <img id="logo" src={pic1} alt="" data-position="center center" />
      <h1>Solidaric</h1>
      <p>
        „Das Ganze ist mehr als die Summe seiner Teile.“<br />
        — Aristoteles
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="about">
            <a href="#about" className="button">
              Die Idee
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>


export default Start;
