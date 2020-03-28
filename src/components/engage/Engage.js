import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import CapabilityList from '../capability/CapabilityList';

const Engage = () => {
  const data = useStaticQuery(
    graphql`
      {
        solidaric: allEngagementsYaml(
          filter: {
            status: {eq: "production"},
            category: {in: ["voucher", "donation"]}
          },
          sort: {
            order: ASC, fields: heading
          }
        ) {
          edges {
            ...engagementNode
          }
        }
        commercial: allEngagementsYaml(
          filter: {
            status: {eq: "production"},
            category: {in: ["onboarding"]}
          },
          sort: {
            order: ASC, fields: heading
          }
        ) {
          edges {
            ...engagementNode
          }
        }
        development: allEngagementsYaml(
          filter: {
            status: {eq: "development"}
          },
          sort: {
            order: ASC, fields: heading
          }
        ) {
          edges {
            ...engagementNode
          }
        }
      }
      fragment engagementNode on EngagementsYamlEdge {
        node {
          heading
          description
          iconClass
          category
          status
          to {
            href
            label
          }
        }
       }
  `)

  return (
    <section id="engage" className="wrapper style2 fade-up">
      <div className="inner">
        <h2>Mitmachen - Jetzt unterstützen!</h2>
        <p>
          Toll, dass Du Dich beteiligst und Deinen Beitrag leistest!
          <br/>
          So eine große Aufgabe geht nur mit Hilfe vieler Hände und Unterstützer.
        </p>
        <p>
          Du findest hier Angebote und bestehende Initiativen bei denen Du Dich gerne einbringst
          oder Du stellst Deine <span className="no-wrap">eigenen Ideen vor.</span>
        </p>

        <br />

        <p>
          Update, am 28.03.2020, stellen wir die Aktualisierungen der Initiativen und Projekte ein. Es sind
          einfach in den letzten Tage Initiativen wie Pilze aus dem Boden geschossen. Damit jemand helfen
          kann, muss ja auch Zugang möglich sein. Bei so vielen Initiativen verliert sich schnell der
          Überblick. Damit wir nicht zur Verwirrung beitragen, bleibt die Seite im aktuellen Stand archiviert.
          Wer möchte kann sich alles unter GitHub laden und weiter oder selber machen.
        </p>

        <br />

        <h3>Spenden und Initiativen</h3>
        <p>
          <i>Diese Initiativen nutzen vorwiegend Spenden und Gutscheine um direkte finanzielle Unterstützung zu leisten.</i>
        </p>
        <div className="features without-borders">
          {CapabilityList(data.solidaric.edges)}
        </div>

        <br />

        <h3>e-Leistungen anbieten</h3>
        <p>
          <i>Diese Lösungen bemühen sich darum, die Leistungen online verfügbar zu machen und darüber Umsätze und Einnahmen zu erzeugen.</i>
        </p>
        <p></p>
        <div className="features without-borders">
          {CapabilityList(data.commercial.edges)}
        </div>

        <br />

        <h3>Ideen und Prototypen</h3>
        <p>
          <i>Diese Projekte sind noch in der Entwicklung und freuen sich bestimmt auch
          über Deine Mithilfe.</i>
        </p>
        <div className="features without-borders">
          {CapabilityList(data.development.edges)}
        </div>
      </div>
    </section>
  )
}

export default Engage;
