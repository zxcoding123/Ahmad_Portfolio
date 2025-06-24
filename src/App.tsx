import { useEffect, useState } from 'react';
import { RefreshCcw } from 'lucide-react'; // optional icon lib

import './App.css';
import './index.css';

import WelcomePage from './assets/components/WelcomePage';
import AboutBento from './assets/components/AboutSection';
import TechSection from './assets/components/TechSection';
import WorksSection from './assets/components/SingleWorkSection';
import DoubleWorkSection from './assets/components/TwoWorkSection';
import ScrollVelocity from './assets/components/ScrollVelocity';
import TestimonialSlider from './assets/components/TestimonailSlider';
import ContactSection from './assets/components/ContactMe';
import Footer from './assets/components/Footer';

function App() {
  const [showTip, setShowTip] = useState(true);

  useEffect(() => {
    // Optional: Hide after 10s
    const timeout = setTimeout(() => setShowTip(false), 10000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showTip && (
        <div className="fixed top-4 right-4 z-50 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-full px-4 py-2 shadow-xl animate-bounce flex items-center gap-2 text-sm">
          <RefreshCcw className="w-4 h-4 animate-spin-slow" />
          If some components fail to load, please refresh the page.
        </div>
      )}

      <WelcomePage />
      <AboutBento />
      <TechSection />
      <ScrollVelocity />
      <WorksSection />
      <DoubleWorkSection />
      <TestimonialSlider />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
