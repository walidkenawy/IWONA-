import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceId?: string | null;
}

export default function BookingModal({ isOpen, onClose, selectedServiceId }: BookingModalProps) {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    intention: ''
  });

  useEffect(() => {
    if (selectedServiceId) {
      const serviceMap: { [key: string]: string } = {
        's1': t('booking.options.healer'),
        's2': t('booking.options.shaman'),
        's3': t('booking.options.coach'),
        's4': t('booking.options.dancer'),
        's5': t('booking.options.angel'),
        'bundle-1': t('booking.options.bundle')
      };
      setFormData(prev => ({ ...prev, experience: serviceMap[selectedServiceId] || '' }));
    }
  }, [selectedServiceId, t, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-luxury-black/90 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-gold/20 p-8 md:p-12 overflow-y-auto max-h-[90vh] no-scrollbar"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-nude/40 hover:text-gold transition-colors"
            >
              <X size={24} />
            </button>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-20 text-center"
              >
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/20">
                  <Check className="text-gold" size={40} />
                </div>
                <h3 className="text-3xl font-serif text-nude-light mb-4 italic">Application Received</h3>
                <p className="text-nude/60 font-light tracking-wide">
                  Our concierge will review your intention and contact you within 24 hours to finalize your ritual.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="text-center mb-12">
                  <span className="text-gold text-[10px] uppercase tracking-[0.5em] mb-4 block">{t('booking.subtitle')}</span>
                  <h2 className="text-3xl md:text-5xl font-serif text-nude-light mb-4">
                    {t('booking.title')} <span className="italic">{t('booking.titleItalic')}</span>
                  </h2>
                  <p className="text-nude/60 font-light tracking-wide text-sm">
                    {t('booking.description')}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-gold ml-1">{t('booking.name')}</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-nude/20 py-4 px-1 text-nude-light focus:border-gold outline-none transition-colors font-light"
                        placeholder={t('booking.namePlaceholder')}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-gold ml-1">{t('booking.email')}</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-nude/20 py-4 px-1 text-nude-light focus:border-gold outline-none transition-colors font-light"
                        placeholder={t('booking.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-gold ml-1">{t('booking.experience')}</label>
                    <select 
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full bg-transparent border-b border-nude/20 py-4 px-1 text-nude-light focus:border-gold outline-none transition-colors font-light appearance-none"
                    >
                      <option value="" disabled className="bg-luxury-black">Select Experience</option>
                      <option className="bg-luxury-black" value={t('booking.options.healer')}>{t('booking.options.healer')}</option>
                      <option className="bg-luxury-black" value={t('booking.options.shaman')}>{t('booking.options.shaman')}</option>
                      <option className="bg-luxury-black" value={t('booking.options.coach')}>{t('booking.options.coach')}</option>
                      <option className="bg-luxury-black" value={t('booking.options.dancer')}>{t('booking.options.dancer')}</option>
                      <option className="bg-luxury-black" value={t('booking.options.angel')}>{t('booking.options.angel')}</option>
                      <option className="bg-luxury-black" value={t('booking.options.bundle')}>{t('booking.options.bundle')}</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-gold ml-1">{t('booking.intention')}</label>
                    <textarea 
                      required
                      rows={3}
                      value={formData.intention}
                      onChange={(e) => setFormData({ ...formData, intention: e.target.value })}
                      className="w-full bg-transparent border-b border-nude/20 py-4 px-1 text-nude-light focus:border-gold outline-none transition-colors font-light resize-none"
                      placeholder={t('booking.intentionPlaceholder')}
                    />
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-5 bg-gold text-luxury-black text-[11px] uppercase tracking-[0.4em] font-bold gold-glow mt-8"
                  >
                    {t('booking.submit')}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
