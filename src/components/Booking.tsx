import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Booking() {
  const { t } = useTranslation();

  return (
    <section id="booking" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?auto=format&fit=crop&q=80&w=2000" 
          alt="Background" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold text-[10px] uppercase tracking-[0.5em] mb-4 block">{t('booking.subtitle')}</span>
          <h2 className="text-4xl md:text-6xl font-serif text-nude-light mb-6">
            {t('booking.title')} <span className="italic">{t('booking.titleItalic')}</span>
          </h2>
          <p className="text-nude/60 font-light tracking-wide">
            {t('booking.description')}
          </p>
        </div>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gold ml-1">{t('booking.name')}</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-nude/20 py-4 px-1 text-nude-light focus:border-gold outline-none transition-colors font-light"
                placeholder={t('booking.namePlaceholder')}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gold ml-1">{t('booking.email')}</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-nude/20 py-4 px-1 text-nude-light focus:border-gold outline-none transition-colors font-light"
                placeholder={t('booking.emailPlaceholder')}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-gold ml-1">{t('booking.experience')}</label>
            <select className="w-full bg-transparent border-b border-nude/20 py-4 px-1 text-nude-light focus:border-gold outline-none transition-colors font-light appearance-none">
              <option className="bg-luxury-black">{t('booking.options.healer')}</option>
              <option className="bg-luxury-black">{t('booking.options.shaman')}</option>
              <option className="bg-luxury-black">{t('booking.options.coach')}</option>
              <option className="bg-luxury-black">{t('booking.options.bundle')}</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-gold ml-1">{t('booking.intention')}</label>
            <textarea 
              rows={4}
              className="w-full bg-transparent border-b border-nude/20 py-4 px-1 text-nude-light focus:border-gold outline-none transition-colors font-light resize-none"
              placeholder={t('booking.intentionPlaceholder')}
            />
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 bg-gold text-luxury-black text-[11px] uppercase tracking-[0.4em] font-bold gold-glow mt-8"
          >
            {t('booking.submit')}
          </motion.button>
        </form>
      </div>
    </section>
  );
}
