import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

import * as Sentry from '@sentry/react';

const App = () => {
  const scroll = new LocomotiveScroll();
  
  return (
    <main className="bg-black overflow-x-hidden overflow-y-auto">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
