import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-32 px-6 bg-luxury-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] overflow-hidden group"
        >
          <img 
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1200" 
            alt="Ritual" 
            className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 border-[20px] border-luxury-black/20 pointer-events-none" />
          <motion.div 
            initial={{ scaleY: 1 }}
            whileInView={{ scaleY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute inset-0 bg-luxury-black origin-top z-10"
          />
        </motion.div>

        <div className="flex flex-col">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="text-gold text-[10px] uppercase tracking-[0.5em] mb-6 block"
          >
            {t('about.philosophy')}
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-nude-light"
          >
            {t('about.title')}<br />
            <span className="italic text-gold">{t('about.titleItalic')}</span>
          </motion.h2>

          <div className="space-y-6 text-nude/70 leading-relaxed tracking-wide font-light">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            >
              {t('about.p1')}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            >
              {t('about.p2')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
              className="italic font-serif text-xl text-nude-light pt-4 border-l-2 border-gold pl-6"
            >
              "{t('about.quote')}"
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1 }}
          >
            <Link 
              to="/story"
              className="mt-12 group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-gold self-start"
            >
              {t('about.cta')}
              <div className="w-12 h-[1px] bg-gold transition-all group-hover:w-20" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
