import React from 'react';

import FeatureList from '../feature/FeatureList';
import ABOUT_ITEMS from './AboutItems';

const About = () =>
  <section id="about" className="wrapper style1 spotlights">
     {FeatureList(ABOUT_ITEMS)}
  </section>

export default About;
