import React from 'react';

import pic1 from '../../images/randy-fath-ymf4_9Y9S_A-unsplash.jpg';

import Layout from '../../components/common/layout';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';


const SolidaricDieIdeePage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">Solidaric - die Idee</h1>
          <span className="image fit">
            <img src={pic1} alt="" />
          </span>
          <p>
            Artikel und Informationen erscheinen in Kürze.
          </p>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SolidaricDieIdeePage;
