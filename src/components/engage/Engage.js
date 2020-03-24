import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import CapabilityList from '../capability/CapabilityList';

const Engage = () => {
  const data = useStaticQuery(
    graphql`
      {
        stable: allEngagementsYaml(filter: {stable: {eq: true}}) {
          edges {
            ...engagementNode
          }
        }
        unstable: allEngagementsYaml(filter: {stable: {eq: false}}) {
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
          stable
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
          Du findest hier Angebote sowie bestehende Initiativen bei denen Du Dich gerne einbringen kannst
          oder Du stellst Deine <span className="no-wrap">eigenen Ideen vor.</span>
        </p>

        <br />

        <h3>Verfügbare Initiativen</h3>
        <p></p>
        <div className="features without-borders">
          {CapabilityList(data.stable.edges)}
        </div>

        <br />

        <h3>Ideen und Prototypen</h3>
        <p>
          <i>Diese Projekte sind noch in der Entwicklung und freuen sich bestimmt auch
          über Deine Mithilfe.</i>
        </p>
        <div className="features without-borders">
          {CapabilityList(data.unstable.edges)}
        </div>
      </div>
    </section>
  )
}

export default Engage;
