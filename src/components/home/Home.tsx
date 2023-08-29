import React from 'react';
import WhoWeAre from './WhoWeAre';
import WhatWeOffer from './WhatWeOffer';
import HomepageCarousel from './HomepageCarousel';

import Projects from './Projects';
import Team from './Team';
import Testimonials from './Testimonials';
import Blog from './Blog';
import OurValues from './OurValues';

const Home = () => {
  return (
    <>
      <HomepageCarousel />
      {/* <WhoWeAre /> */}
      <WhatWeOffer />
      <Projects />
      <OurValues />
      <Team />
      <Blog />
      <Testimonials />
    </>
  );
};

export default Home;
