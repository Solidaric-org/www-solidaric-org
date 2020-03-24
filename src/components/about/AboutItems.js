import React from 'react';

import pic1 from '../../images/randy-fath-ymf4_9Y9S_A-unsplash_438x438.jpg';
import pic2 from '../../images/priscilla-du-preez-W3SEyZODn8U-unsplash_438x438.jpg';
import pic3 from '../../images/limor-zellermayer-cANocSiow7g-unsplash_438x438.jpg';
import pic4 from '../../images/malcolm-lightbody-401OD83Ke6o-unsplash_438x438.jpg';
import pic5 from '../../images/mayur-gala-2PODhmrvLik-unsplash_438x438.jpg';

const ABOUT_ITEMS = [
  {
    image: pic1,
    heading: 'Worum geht es?',
    description: <>
                 Schnelle, einfache, unbürokratische und direkte finanzielle Unterstützung für
                 Selbständige, (Klein-)Unternehmen, Geschäfte, Restaurants, Sportvereine,
                 karitative Einrichtungen&nbsp;etc. in&nbsp;Krisenzeiten.
                 </>,
    to: {
      anker: 'engage',
      label: 'Ich mach mit',
    },
  },
  {
    image: pic2,
    heading: 'Was haben wir davon?',
    description: <>
                 Am Ende jeder Krise möchten wir alle weiterhin abwechslungsreich und schön leben.
                 Dafür müssen auch Selbständige, Geschäfte, Restaurants&nbsp;etc. die Krise überstehen.
                 </>,
    to: {
      anker: 'engage',
      label: 'Ich bin dabei',
    },
  },
  {
    image: pic3,
    heading: 'Wie kannst Du helfen?',
    description: <>
                 <i>Stell Dir vor</i>, Du warst gerade wie immer in Deiner Kletterhalle, Deinem Fitnesscenter,
                 einem Deiner beliebten Restaurants, der Eisdiele, dem Konzert&nbsp;etc. Bezahle diesmal einfach
                 für Deinen <i>imaginären</i> Besuch - auch wie immer.
                 </>,
    to: {
      anker: 'engage',
      label: 'Ich mach mit',
    },
  },
  {
    image: pic4,
    heading: 'Warum macht das Sinn?',
    description: <>
                 Viele Einnahmen können nicht <i>nachgeholt</i> werden. Ist ein Restaurant geschlossen,
                 kann es nicht 3 Monate später doppelt so viele Tische vergeben. Die Einnahmen sind
                 verloren. Kredite helfen nicht, denn sie müssen zurückbezahlt werden. Wollen wir unsere
                 Umgebung behalten, braucht diese unsere Unterstützung.
                 </>,
    to: {
      anker: 'engage',
      label: 'Ich bin dabei',
    },
  },
  {
    image: pic5,
    heading: 'Wie funktioniert das?',
    description: <>
                 Mitmachen, Anmelden, Begünstigten auswählen und finanziellen Beitrag senden - So einfach geht Solidarität.
                 </>,
    to: {
      anker: 'engage',
      label: 'Ich mach mit',
    },
  },
]

export default ABOUT_ITEMS;
