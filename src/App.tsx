import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ServicesSection from './components/ServicesSection';
import Shop from './components/Shop';
import Journey from './components/Journey';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';
import StoryPage from './pages/StoryPage';
import ServicesPage from './pages/ServicesPage';
import ChatBot from './components/ChatBot';
import SEO from './components/SEO';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <main>
      <SEO 
        title="SPA FOR SOUL | Luxury Wellness & Spiritual Sanctuary"
        description="Experience a celestial journey of transformation at SPA FOR SOUL. Luxury wellness, spiritual rituals, and sacred sanctuary for your inner being."
      />
      <Hero />
      
      <About />

      <ServicesSection />
      
      <Shop />
      
      <Journey />
      
      <Testimonials />
      
      <Booking />
    </main>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll implementation for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <HelmetProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <ScrollToTop />
            <div className="relative selection:bg-gold selection:text-luxury-black">
            {/* Progress Bar */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-[2px] bg-gold z-[100] origin-left"
              style={{ scaleX }}
            />

            <Navbar />
            
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/story" element={<StoryPage />} />
              <Route path="/rituals" element={<ServicesPage />} />
            </Routes>

            <Footer />

            <ChatBot />

            {/* Ambient Sound Hint (Visual only as per guidelines) */}
            <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3">
              <div className="flex gap-1 items-end h-4">
                {[0.4, 0.7, 0.5, 0.9, 0.6].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [h * 16, (h * 0.5) * 16, h * 16] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    className="w-[2px] bg-gold/40"
                  />
                ))}
              </div>
              <span className="text-[8px] uppercase tracking-[0.3em] text-nude/40">Ambient Ritual Audio</span>
            </div>
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  </HelmetProvider>
);
}
