import React from 'react';

import Layout   from '../components/common/layout';
import Footer   from '../components/common/Footer';
import Sidebar  from '../components/common/Sidebar';

import Start        from '../components/start/Start';
import About        from '../components/about/About';
import Contribute   from '../components/contribute/Contribute';
import Engage       from '../components/engage/Engage';
import Contact      from '../components/contact/Contact';

const IndexPage = () =>
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <Start />
      <About />
      <Contribute />
      <Engage />
      <Contact />
    </div>

    <Footer />
  </Layout>

export default IndexPage;
