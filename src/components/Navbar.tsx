import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, Heart, Globe } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useTranslation } from 'react-i18next';
import CartDrawer from './CartDrawer';
import WishlistDrawer from './WishlistDrawer';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const { totalItems } = useCart();
  const { wishlistCount } = useWishlist();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pl' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.rituals'), href: '#rituals' },
    { name: t('nav.shop'), href: '#shop' },
    { name: t('nav.home'), href: '#journey' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-luxury-black/80 backdrop-blur-lg py-4 border-b border-gold/10' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex-1 hidden md:flex gap-8 items-center">
            {navLinks.slice(0, 2).map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[11px] uppercase tracking-[0.3em] text-nude/70 hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a href="#" className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-serif tracking-[0.2em] text-gold italic">SPA FOR SOUL</h1>
          </a>

          <div className="flex-1 flex justify-end items-center gap-6 md:gap-8">
            <div className="hidden md:flex gap-8 items-center">
              {navLinks.slice(2).map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-[11px] uppercase tracking-[0.3em] text-nude/70 hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-nude/40 hover:text-gold transition-colors"
            >
              <Globe size={16} strokeWidth={1.5} />
              <span className="hidden sm:inline">{i18n.language.toUpperCase()}</span>
            </button>

            <button 
              onClick={() => setIsWishlistOpen(true)}
              className="text-nude/70 hover:text-gold transition-colors relative"
            >
              <Heart size={20} strokeWidth={1.5} />
              {wishlistCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full text-[8px] flex items-center justify-center text-luxury-black font-bold"
                >
                  {wishlistCount}
                </motion.span>
              )}
            </button>
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="text-nude/70 hover:text-gold transition-colors relative"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full text-[8px] flex items-center justify-center text-luxury-black font-bold"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            <button 
              className="md:hidden text-nude/70 hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-luxury-black/95 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col h-full items-center justify-center gap-12 px-6">
                <div className="flex flex-col gap-8 items-center">
                  {navLinks.map((link, i) => (
                    <motion.a 
                      key={link.name} 
                      href={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-2xl font-serif tracking-[0.2em] text-nude-light hover:text-gold transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-center gap-8"
                >
                  <button 
                    onClick={toggleLanguage}
                    className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold"
                  >
                    <Globe size={20} strokeWidth={1.5} />
                    {i18n.language === 'en' ? 'English' : 'Polski'}
                  </button>
                  
                  <button className="px-12 py-4 border border-gold/30 text-gold text-xs uppercase tracking-[0.4em] hover:bg-gold hover:text-luxury-black transition-all duration-500">
                    Apply for Session
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WishlistDrawer isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
    </>
  );
}
