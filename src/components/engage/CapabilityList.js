import React from 'react';

import Capability from './Capability';

const CapabilityList = () => {
  const CAPABILITIES = [
    {
      iconClass: 'fa-code',
      heading: 'Fürsprecher',
      description: <>
                   Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                   </>,
    },
    {
      iconClass: 'fa-code',
      heading: 'Unterstützer',
      description: <>
                   Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                   </>,
    },
    {
      iconClass: 'fa-code',
      heading: 'Entwickler',
      description: <>
                   Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                   </>,
    },
    {
      iconClass: 'fa-code',
      heading: 'Techniker',
      description: <>
                   Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                   </>,
    },
    {
      iconClass: 'fa-code',
      heading: 'Rechtsanwalt',
      description: <>
                   Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                   </>,
    },
    {
      iconClass: 'fa-code',
      heading: 'Steuer- und Finanzexperte',
      description: <>
                   Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                   </>,
    },
    {
      iconClass: 'fa-code',
      heading: 'Pionier',
      description: <>
                   Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                   </>,
    },
    {
      iconClass: 'fa-code',
      heading: 'Helfende Hände',
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
