import React from 'react';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Support from 'sections/support';
import PremiumFeature from 'sections/premium-feature';
import AppFeature from 'sections/app-feature';
import Dashboard from 'sections/dashboard';
import Pricing from 'sections/pricing';
import Testimonials from 'sections/testimonials';
import Subscribe from 'sections/subscribe';

export default function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Shofrica"
        description="Demonstrate the origin, ownership, and characteristics of your products"
      />
      <Banner />
      <Support />
      <PremiumFeature />
      <AppFeature />
      <Dashboard />
      <Pricing />
      <Testimonials />
      <Subscribe />
    </Layout>
  );
}
