import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import About from '../components/About';

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" description="Some information about me" slug="about" />
      <About />
    </Layout>
  );
};

export default AboutPage;
