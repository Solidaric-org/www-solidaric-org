import React from 'react';

import Layout   from '../../components/common/layout';
import Footer   from '../../components/common/Footer';
import Sidebar  from '../../components/common/Sidebar';

import SEO      from '../../components/seo/SEO';

import Start        from '../../components/start/Start';
import Features     from '../../components/about/Features';
import Contribute   from '../../components/contribute/Capabilities';
import Engage       from '../../components/engage/Capabilities';
import Contact      from '../../components/contact/Contact';

const IndexPage = () =>
  <Layout>
    <SEO title="My Amazing Gatsby App" />
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
