import React from 'react';

import Capability from './Capability';

const CapabilityList = () => {
  const CAPABILITIES = [
    {
      iconClass: 'fa-heart-o',
      heading: 'LadenLiebe',
      description: <>
                   Prototyp einer Plattform im Rahmen des #WirVsVirusHack, die analog zu ShareTheMeal oder Patreon ermöglicht, an lokale Unternehmen zu spenden.
                   </>,
      to: {
        href: 'https://www.ladenliebe.org',
        label: 'ladenliebe.org',
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
