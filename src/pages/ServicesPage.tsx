import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { SERVICES } from '../constants';
import { ArrowLeft, CheckCircle2, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-luxury-black pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gold text-[10px] uppercase tracking-[0.4em] mb-12 hover:text-gold-light transition-colors"
        >
          <ArrowLeft size={14} /> {t('servicesPage.back')}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <span className="text-gold text-[10px] uppercase tracking-[0.5em] mb-4 block">{t('servicesPage.subtitle')}</span>
          <h1 className="text-5xl md:text-8xl font-serif text-nude-light mb-8 leading-tight">
            {t('servicesPage.title')} <span className="italic text-gold">{t('servicesPage.titleItalic')}</span>
          </h1>
          <p className="text-nude/60 max-w-2xl text-lg font-light leading-relaxed">
            {t('servicesPage.desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-32">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
              <div className="w-full lg:w-1/2 aspect-[4/5] overflow-hidden relative group">
                <img 
                  src={service.image} 
                  alt={t(`rituals.items.${service.id}.title`)} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gold/5 mix-blend-overlay" />
              </div>

              <div className="w-full lg:w-1/2 space-y-10">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-gold/40 text-4xl font-serif">0{index + 1}</span>
                    <div className="h-[1px] w-12 bg-gold/20" />
                    <span className="text-gold text-[10px] uppercase tracking-[0.4em]">{service.id.toUpperCase()}</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-serif text-nude-light leading-tight mb-6">
                    {t(`rituals.items.${service.id}.title`).split(': ')[0]} <br />
                    <span className="italic text-gold">{t(`rituals.items.${service.id}.title`).split(': ')[1]}</span>
                  </h2>
                  <p className="text-nude/70 text-lg font-light leading-relaxed italic">
                    {t(`rituals.items.${service.id}.longDescription`)}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                      <Clock size={14} /> {t('servicesPage.duration')}
                    </h4>
                    <ul className="space-y-2 text-nude/50 text-sm font-light">
                      <li className="flex justify-between border-b border-gold/10 pb-2">
                        <span>Standard Ritual (90m)</span>
                        <span className="text-gold">1200 zł</span>
                      </li>
                      <li className="flex justify-between border-b border-gold/10 pb-2">
                        <span>Extended Journey (150m)</span>
                        <span className="text-gold">1800 zł</span>
                      </li>
                      <li className="flex justify-between border-b border-gold/10 pb-2">
                        <span>Private Immersion (Full Day)</span>
                        <span className="text-gold">4500 zł</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                      <Star size={14} /> {t('servicesPage.benefits')}
                    </h4>
                    <div className="space-y-3">
                      {(t(`rituals.items.${service.id}.steps`, { returnObjects: true }) as string[]).map((step, i) => (
                        <div key={i} className="flex items-center gap-3 text-nude/60 text-xs uppercase tracking-widest">
                          <CheckCircle2 size={12} className="text-gold/40" />
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button className="w-full py-5 border border-gold/30 text-gold text-[11px] uppercase tracking-[0.5em] font-bold hover:bg-gold hover:text-luxury-black transition-all duration-500">
                  {t('servicesPage.request')}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40 text-center p-20 border border-gold/10 bg-gold/5">
          <h3 className="text-3xl md:text-5xl font-serif text-nude-light mb-8">{t('servicesPage.membership.title')}</h3>
          <p className="text-nude/60 max-w-2xl mx-auto mb-12 font-light">
            {t('servicesPage.membership.desc')}
          </p>
          <button className="px-12 py-5 bg-gold text-luxury-black text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-gold-light transition-all gold-glow">
            {t('servicesPage.membership.cta')}
          </button>
        </div>
      </div>
    </div>
  );
}
