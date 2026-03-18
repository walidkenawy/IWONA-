import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video/Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 -top-[20%]"
      >
        <div className="absolute inset-0 bg-luxury-black/40 z-10" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-[140%] object-cover"
          poster="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000"
        >
          <source src="https://player.vimeo.com/external/494252666.sd.mp4?s=727873424a0ce57b605538d92f546c36937f8464&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
      </motion.div>

      <div className="relative z-20 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-gold mb-6 block font-medium">
            {t('hero.subtitle')}
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif mb-8 leading-[0.9] tracking-tight text-nude-light">
            {t('hero.title')} <span className="italic text-gold">{t('hero.titleItalic')}</span>
          </h1>
          <p className="text-sm md:text-lg text-nude/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
            A Luxury Experience for Body, Mind & Energy. Step into a world where healing meets high-fashion elegance.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <motion.a 
              href="#experience"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gold text-luxury-black text-[11px] uppercase tracking-[0.3em] font-bold transition-all hover:bg-gold-light gold-glow"
            >
              {t('hero.cta')}
            </motion.a>
            <motion.a 
              href="#shop"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-nude/30 text-nude-light text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-nude-light hover:text-luxury-black transition-all"
            >
              {t('nav.shop')}
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-nude/40">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
