import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Linkedin, Youtube, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-20 px-6 bg-luxury-black border-t border-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif text-gold tracking-[0.2em] italic mb-8">SPA FOR SOUL</h2>
            <p className="text-nude/50 max-w-md font-light leading-relaxed mb-8">
              {t('footer.description')}
            </p>
            <div className="flex gap-6">
              {[Instagram, Facebook, Twitter, Linkedin, Youtube, Mail].map((Icon, i) => (
                <a key={i} href="#" className="text-nude/40 hover:text-gold transition-colors">
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-8">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4">
              {[
                { label: t('nav.experience'), href: '#experience' },
                { label: t('nav.rituals'), href: '#rituals' },
                { label: t('nav.shop'), href: '#shop' },
                { label: t('nav.journey'), href: '#journey' }
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-nude/40 hover:text-nude transition-colors text-sm font-light">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-8">{t('footer.contact.title')}</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-nude/40 text-sm font-light">
                <MapPin size={16} className="text-gold/60" />
                {t('footer.contact.address')}
              </li>
              <li className="flex items-center gap-3 text-nude/40 text-sm font-light">
                <Mail size={16} className="text-gold/60" />
                <a href={`mailto:${t('footer.contact.email')}`} className="hover:text-gold transition-colors">
                  {t('footer.contact.email')}
                </a>
              </li>
              <li className="flex items-center gap-3 text-nude/40 text-sm font-light">
                <Phone size={16} className="text-gold/60" />
                <a href={`tel:${t('footer.contact.phone').replace(/\s/g, '')}`} className="hover:text-gold transition-colors">
                  {t('footer.contact.phone')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gold/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] uppercase tracking-[0.3em] text-nude/30">
            © 2026 SPA FOR SOUL RITUALS. {t('footer.rights')}
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[9px] uppercase tracking-[0.3em] text-nude/30 hover:text-nude transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="text-[9px] uppercase tracking-[0.3em] text-nude/30 hover:text-nude transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
