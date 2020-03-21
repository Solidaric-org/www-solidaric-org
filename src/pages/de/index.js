import React from 'react';

import Layout   from '../../components/common/layout';
import Footer   from '../../components/common/Footer';
import Sidebar  from '../../components/common/Sidebar';

import SEO      from '../../components/seo/SEO';
import SEO_card from '../../assets/img/solidaric-org-social-fix-image-1200x630.png';


import Start        from '../../components/start/Start';
import Features     from '../../components/about/Features';
import Contribute   from '../../components/contribute/Capabilities';
import Engage       from '../../components/engage/Capabilities';
import Contact      from '../../components/contact/Contact';

const IndexPage = () =>
  <Layout>
    <SEO image={SEO_card} />
    <Sidebar />

    <div id="wrapper">
      <Start />
      <Features />
      <Contribute />
      <Engage />
      <Contact />
    </div>

    <Footer />
  </Layout>

export default IndexPage;
