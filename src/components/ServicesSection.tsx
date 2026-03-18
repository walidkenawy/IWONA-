import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../constants';
import { ArrowRight, ChevronDown, ChevronUp, ArrowUp, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import BookingModal from './BookingModal';

export default function ServicesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const { t } = useTranslation();

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleBookNow = (id: string) => {
    setSelectedServiceId(id);
    setIsBookingOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!expandedId) {
        setShowScrollTop(false);
        return;
      }
      const card = cardRefs.current[expandedId];
      if (card) {
        const rect = card.getBoundingClientRect();
        // Show button if the top of the card is scrolled up past the viewport top
        // and the bottom of the card is still below the viewport top
        setShowScrollTop(rect.top < -100 && rect.bottom > 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [expandedId]);

  return (
    <section id="rituals" className="py-32 bg-luxury-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-32">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-gold text-[10px] uppercase tracking-[0.5em] mb-6 block"
          >
            {t('rituals.subtitle')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif text-nude-light leading-tight"
          >
            {t('rituals.title')} <br />
            <span className="italic text-gold ml-12 md:ml-24">{t('rituals.titleItalic')}</span>
          </motion.h2>
        </div>

        <div className="space-y-40">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              ref={el => cardRefs.current[service.id] = el}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-start`}
            >
              {/* Image Column */}
              <div 
                className="w-full md:w-1/2 relative group cursor-pointer"
                onClick={() => toggleExpand(service.id)}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={t(`rituals.items.${service.id}.title`)}
                    className={`w-full h-full object-cover transition-all duration-1000 ${expandedId === service.id ? 'scale-105 opacity-100' : 'group-hover:scale-110 opacity-80 group-hover:opacity-100'}`}
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute inset-0 bg-gold/10 mix-blend-overlay transition-opacity duration-700 ${expandedId === service.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                </div>
                
                {/* Floating Number */}
                <div className={`absolute -top-12 ${index % 2 === 1 ? '-left-12' : '-right-12'} hidden lg:block`}>
                  <span className={`text-[12rem] font-serif transition-colors duration-700 select-none leading-none ${expandedId === service.id ? 'text-gold/20' : 'text-gold/5'}`}>
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* Content Column */}
              <div className="w-full md:w-1/2 pt-8">
                <div className="max-w-md">
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 1 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col gap-8"
                  >
                    {/* Ritual Steps (Preview) */}
                    {t(`rituals.items.${service.id}.steps`, { returnObjects: true }) && (t(`rituals.items.${service.id}.steps`, { returnObjects: true }) as string[]).length > 0 && !expandedId && (
                      <div className="flex flex-col gap-2 mb-4">
                        {(t(`rituals.items.${service.id}.steps`, { returnObjects: true }) as string[]).slice(0, 2).map((step, i) => (
                          <span key={i} className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">
                            0{i + 1} {step}
                          </span>
                        ))}
                        {(t(`rituals.items.${service.id}.steps`, { returnObjects: true }) as string[]).length > 2 && (
                          <span className="text-[9px] uppercase tracking-[0.3em] text-gold/40">
                            + {(t(`rituals.items.${service.id}.steps`, { returnObjects: true }) as string[]).length - 2} more steps
                          </span>
                        )}
                      </div>
                    )}

                    <div 
                      className="cursor-pointer group/title"
                      onClick={() => toggleExpand(service.id)}
                    >
                      <h3 className="text-3xl md:text-5xl font-serif text-nude-light leading-tight group-hover/title:text-white transition-colors">
                        {t(`rituals.items.${service.id}.title`).split(': ')[0]} <br />
                        <span className="italic text-gold group-hover/title:text-gold-light transition-colors">{t(`rituals.items.${service.id}.title`).split(': ')[1]}</span>
                      </h3>
                    </div>

                    <p className="text-nude/60 font-light leading-relaxed tracking-wide text-lg">
                      {t(`rituals.items.${service.id}.description`)}
                    </p>

                    <div className="flex flex-col gap-6">
                      <button 
                        onClick={() => toggleExpand(service.id)}
                        className="flex items-center gap-3 text-gold text-[11px] uppercase tracking-[0.4em] font-bold hover:text-gold-light transition-colors self-start"
                      >
                        {expandedId === service.id ? (
                          <>{t('rituals.hideDetails')} <ChevronUp size={16} /></>
                        ) : (
                          <>{t('rituals.viewDetails')} <ChevronDown size={16} /></>
                        )}
                      </button>

                      <AnimatePresence>
                        {expandedId === service.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pt-8 flex flex-col gap-10 border-t border-gold/10">
                              <motion.p 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-nude/80 font-light leading-relaxed text-base italic"
                              >
                                {t(`rituals.items.${service.id}.longDescription`, { defaultValue: service.longDescription })}
                              </motion.p>

                              {/* Full Ritual Steps */}
                              <div className="grid grid-cols-1 gap-6">
                                <motion.span 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.3 }}
                                  className="text-gold text-[10px] uppercase tracking-[0.5em] mb-2 block"
                                >
                                  {t('rituals.fullRitual')}
                                </motion.span>
                                <div className="space-y-4">
                                  {(t(`rituals.items.${service.id}.steps`, { returnObjects: true, defaultValue: service.ritualSteps }) as string[]).map((step, i) => (
                                    <motion.div 
                                      key={i}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.4 + (i * 0.1) }}
                                      className="flex items-center gap-6 group/step"
                                    >
                                      <span className="text-2xl font-serif text-gold/20 group-hover/step:text-gold transition-colors">0{i + 1}</span>
                                      <span className="text-xs uppercase tracking-[0.3em] text-nude/60 group-hover/step:text-nude transition-colors">{step}</span>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>

                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4"
                              >
                                <button 
                                  onClick={() => handleBookNow(service.id)}
                                  className="px-10 py-4 bg-gold text-luxury-black text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-gold-light transition-all duration-500 self-start text-center flex items-center justify-center gap-3 gold-glow"
                                >
                                  <Calendar size={16} />
                                  {t('servicesPage.request')}
                                </button>
                                <Link 
                                  to="/rituals"
                                  className="px-10 py-4 border border-gold/30 text-gold text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-gold hover:text-luxury-black transition-all duration-500 self-start text-center inline-block"
                                >
                                  {t('rituals.beginJourney')}
                                </Link>
                              </motion.div>

                              {/* Scroll to Top Button */}
                              <AnimatePresence>
                                {showScrollTop && expandedId === service.id && (
                                  <motion.button
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      cardRefs.current[service.id]?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="fixed bottom-8 right-8 z-50 p-4 bg-gold text-luxury-black rounded-full shadow-[0_0_30px_rgba(197,160,89,0.4)] hover:bg-gold-light transition-all duration-300 group/scroll"
                                    aria-label="Scroll to top of service"
                                  >
                                    <ArrowUp size={20} className="group-hover/scroll:-translate-y-1 transition-transform" />
                                  </motion.button>
                                )}
                              </AnimatePresence>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {!expandedId && (
                        <Link 
                          to="/rituals"
                          className="mt-4 px-10 py-4 border border-gold/30 text-gold text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-gold hover:text-luxury-black transition-all duration-500 self-start text-center"
                        >
                          {t('rituals.beginJourney')}
                        </Link>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        selectedServiceId={selectedServiceId}
      />
    </section>
  );
}
