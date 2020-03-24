import React from 'react';

import FeatureList from '../feature/FeatureList';
import ABOUTS_DATA from './data/Abouts.yaml'

// include (ALL) the images from about/images to webpack and
// rewrite reference string from YAML into loaded object
ABOUTS_DATA.map(feature => {feature.image = require("./images/" + feature.image)})

const About = () =>
  <section id="about" className="wrapper style1 spotlights">
     {FeatureList(ABOUTS_DATA)}
  </section>

export default About;
