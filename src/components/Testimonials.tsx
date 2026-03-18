import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="py-32 px-6 bg-luxury-black border-y border-gold/10">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <Quote className="text-gold mx-auto mb-8 opacity-50" size={40} strokeWidth={1} />
          <h2 className="text-4xl md:text-5xl font-serif text-nude-light italic">
            {t('testimonials.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {TESTIMONIALS.map((t_item, index) => (
            <motion.div 
              key={t_item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative p-12 bg-gold/5 border border-gold/10 group hover:bg-gold/10 transition-colors duration-500"
            >
              <p className="text-nude/80 text-lg font-light leading-relaxed mb-8 italic">
                "{t(`testimonials.items.${t_item.id}.quote`)}"
              </p>
              <div>
                <h4 className="text-gold font-serif text-xl">{t(`testimonials.items.${t_item.id}.author`)}</h4>
                <span className="text-[10px] uppercase tracking-[0.3em] text-nude/40">{t(`testimonials.items.${t_item.id}.role`)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
