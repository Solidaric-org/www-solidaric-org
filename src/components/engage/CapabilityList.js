import React from 'react';

import Capability from './Capability';

const CapabilityList = () => {
  const CAPABILITIES = [
    {
      iconClass: 'fa-heart-o',
      heading: 'Lokale Liebe',
      description: <>
                   Start einer Plattform im Rahmen des #WirVsVirusHack, die analog zu ShareTheMeal oder Patreon ermöglicht, an lokale Unternehmen zu spenden.
                   </>,
      to: {
        href: 'https://devpost.com/software/1_d_16_lokaleunternehmen-plus-tmpname',
        label: 'lokale-liebe.de',
      },
    },
    {
      iconClass: 'fa-heart-o',
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
      iconClass: 'fa-heart-o',
      heading: 'Spendenaktion',
      description: <>
                   Wir für Hannovers Gastro! Corona-Soforthilfe auf betterplace.me.
                   </>,
      to: {
        href: 'https://www.betterplace.me/hannover-corona-soforthilfe',
        label: 'betterplace.me',
      },
    },
    {
      iconClass: 'fa-heart-o',
      heading: '#WirVsVirus Hackaton',
      description: <>
                   Sei mit Deinen Fähigkeiten dabei, wenn wir Lösungen aus der Gesellschaft für die Gesellschaft entwickeln.
                   </>,
      to: {
        href: 'https://wirvsvirushackathon.org/',
        label: '#WirVsVirus',
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
