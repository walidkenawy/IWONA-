import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Sparkles, Heart, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function StoryPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-luxury-black pt-32 pb-20 px-6">
      <SEO 
        title="Our Sacred Story | SPA FOR SOUL"
        description="Discover the genesis and values of SPA FOR SOUL. Learn about our mission to provide a luxury spiritual sanctuary for inner transformation."
        keywords="spa story, wellness mission, spiritual values, sanctuary genesis"
      />
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gold text-[10px] uppercase tracking-[0.4em] mb-12 hover:text-gold-light transition-colors"
        >
          <ArrowLeft size={14} /> {t('story.back')}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-gold text-[10px] uppercase tracking-[0.5em] mb-4 block">{t('story.genesis')}</span>
          <h1 className="text-5xl md:text-7xl font-serif text-nude-light mb-12 leading-tight">
            {t('story.title')} <span className="italic">{t('story.titleItalic')}</span>
          </h1>

          <div className="aspect-video mb-16 overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=2000" 
              alt="Sanctuary" 
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div className="space-y-8 text-nude/70 font-light leading-relaxed text-lg">
              <p>
                {t('story.p1')}
              </p>
              <p>
                {t('story.p2')}
              </p>
            </div>
            <div className="space-y-8 text-nude/70 font-light leading-relaxed text-lg">
              <p>
                {t('story.p3')}
              </p>
              <p>
                {t('story.p4')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
            {[
              { icon: <Sparkles className="text-gold" />, title: t('story.values.purity.title'), desc: t('story.values.purity.desc') },
              { icon: <Heart className="text-gold" />, title: t('story.values.intention.title'), desc: t('story.values.intention.desc') },
              { icon: <Shield className="text-gold" />, title: t('story.values.privacy.title'), desc: t('story.values.privacy.desc') },
              { icon: <Zap className="text-gold" />, title: t('story.values.impact.title'), desc: t('story.values.impact.desc') }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-gold/10 bg-gold/5 text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] mb-2">{item.title}</h4>
                <p className="text-nude/40 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-serif text-nude-light mb-8 italic">"{t('story.quote')}"</h3>
            <Link 
              to="/rituals" 
              className="px-12 py-5 bg-gold text-luxury-black text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-gold-light transition-all gold-glow inline-block"
            >
              {t('story.cta')}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
