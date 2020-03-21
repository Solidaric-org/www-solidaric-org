import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../../assets/sass/main.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Gemeinsam in Krisenzeiten - gemeinsam im Leben.' },
            { name: 'keywords', content: 'Solidarität, Gemeinschaft, Unterstützung, Hilfe' },
            { name: 'og:title', content: 'Solidaric.org - Menschen für Menschen' },
            { name: 'og:description', content: 'Gemeinsam in Krisenzeiten - gemeinsam im Leben.' },
            { name: 'og:image', content: '/static/solidaric-org-social-fix-image-1200x630.png' },
            { name: 'og:url', content: '/de' },
            { name: 'twitter:card', content: 'summary_large_image' },
          ]}
        >
          <html lang="de" />
        </Helmet>
        <div>{children}</div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
