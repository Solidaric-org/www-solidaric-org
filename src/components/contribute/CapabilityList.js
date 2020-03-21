import React from 'react';

import Capability from './Capability';

const CapabilityList = () => {
  const CAPABILITIES = [
    {
      iconClass: 'fa-cog',
      heading: 'Fürsprecher finden',
      description: <>
                   Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                   </>,
    },
    {
      iconClass: 'fa-cog',
      heading: 'Gleichgesinnte bewegen',
      description: <>
                   Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                   </>,
    },
    {
      iconClass: 'fa-cog',
      heading: 'Entwicklung umsetzen',
      description: <>
                   Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                   </>,
    },
    {
      iconClass: 'fa-cog',
      heading: 'Infrastruktur aufbauen',
      description: <>
                   Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                   </>,
    },
    {
      iconClass: 'fa-cog',
      heading: 'Aufgaben übernehmen',
      description: <>
                   Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                   </>,
    },
    {
      iconClass: 'fa-cog',
      heading: 'Rechtliches klären',
      description: <>
                   Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                   </>,
    },
  ]

  const [capabilities] = React.useState(CAPABILITIES);

  return (
    <>
      {capabilities.map((capability) => <Capability key={capability.heading} {...capability} />)}
    </>
  )
}

export default CapabilityList;
