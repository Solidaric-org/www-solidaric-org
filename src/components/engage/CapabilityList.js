import React from 'react';

import Capability from './Capability';

const CapabilityList = () => {
  const CAPABILITIES = [
    {
      iconClass: 'fa-link',
      heading: 'Save Your Pub',
      description: <>
                   Unterstütze dein Lieblingslokal mit einer kleinen Spende und sorge dafür, dass es nach der Corona-Zeit weiterhin existieren kann.
                   </>,
      to: {
        href: 'https://www.saveyourpub.com',
        label: 'saveyourpub.com',
      },
    },
    {
      iconClass: 'fa-link',
      heading: '#WirVsVirusHack Projekt 522',
      description: <>
                   Idee zu einer Plattform, die analog zu ShareTheMeal oder Patreon ermöglicht, an lokale Unternehmen zu spenden.
                   </>,
      to: {
        href: 'https://devpost.com/software/1_d_16_lokaleunternehmen-plus-tmpname',
        label: '',
      },
    },
    {
      iconClass: 'fa-code',
      heading: 'Entwickler',
      description: <>
                   Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                   </>,
      to: {
        href: 'https://www.betterplace.me/hannover-corona-soforthilfe',
        label: '',
      },
    },
    {
      iconClass: 'fa-code',
      heading: 'Techniker',
      description: <>
                   Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                   </>,
      to: {
        href: 'aaa',
        label: '',
      },
    },
    {
      iconClass: 'fa-code',
      heading: 'Rechtsanwalt',
      description: <>
                   Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                   </>,
      to: {
        href: 'aaa',
        label: '',
      },
    },
    {
      iconClass: 'fa-code',
      heading: 'Steuer- und Finanzexperte',
      description: <>
                   Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                   </>,
      to: {
        href: '',
        label: '',
      },
    },
    {
      iconClass: 'fa-code',
      heading: 'Pionier',
      description: <>
                   Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                   </>,
      to: {
        href: '',
        label: '',
      },
    },
    {
      iconClass: 'fa-code',
      heading: 'Helfende Hände',
      description: <>
                   Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
                   </>,
      to: {
        href: '',
        label: '',
      },
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
