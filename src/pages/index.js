import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Home from '../components/Home';

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Neeraj Lagwankar"
        description="Personal Website of Neeraj Lagwankar"
        slug=""
      />
      <Home />
    </Layout>
  );
};

export default Index;
