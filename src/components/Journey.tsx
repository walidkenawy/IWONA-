import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Journey() {
  const { t } = useTranslation();
  const steps = [
    { title: t('journey.steps.0.title'), desc: t('journey.steps.0.description') },
    { title: t('journey.steps.1.title'), desc: t('journey.steps.1.description') },
    { title: t('journey.steps.2.title'), desc: t('journey.steps.2.description') },
    { title: t('journey.steps.3.title'), desc: t('journey.steps.3.description') },
    { title: t('journey.steps.4.title'), desc: t('journey.steps.4.description') },
  ];

  return (
    <section id="journey" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-gold text-[10px] uppercase tracking-[0.5em] mb-4 block">{t('journey.subtitle')}</span>
          <h2 className="text-4xl md:text-6xl font-serif text-nude-light">
            {t('journey.title')} <span className="italic">{t('journey.titleItalic')}</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gold/10 -translate-x-1/2 hidden md:block" 
          />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-20 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-2xl md:text-3xl font-serif text-gold mb-4">{step.title}</h3>
                  <p className="text-nude/60 font-light leading-relaxed tracking-wide max-w-sm mx-auto md:mx-0 inline-block">
                    {step.desc}
                  </p>
                </div>

                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", damping: 12, stiffness: 100, delay: index * 0.1 + 0.3 }}
                  className="relative z-10 w-12 h-12 rounded-full border border-gold bg-luxury-black flex items-center justify-center text-gold font-serif italic text-xl"
                >
                  {index + 1}
                </motion.div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
