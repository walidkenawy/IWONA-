import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Calendar as CalendarIcon, ArrowLeft, ArrowRight, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceId?: string | null;
}

type Step = 'details' | 'calendar' | 'success';

export default function BookingModal({ isOpen, onClose, selectedServiceId }: BookingModalProps) {
  const { t } = useTranslation();
  const [step, setStep] = useState<Step>('details');
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    intention: ''
  });

  const timeSlots = [
    '09:00', '11:00', '13:00', '15:00', '17:00', '19:00'
  ];

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

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('calendar');
  };

  const handleFinalSubmit = async () => {
    if (!selectedDate || !selectedTime) return;
    
    setIsSending(true);
    
    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Booking Confirmed:', {
      ...formData,
      date: format(selectedDate, 'yyyy-MM-dd'),
      time: selectedTime
    });
    
    setIsSending(false);
    setStep('success');
    
    setTimeout(() => {
      onClose();
      // Reset after close
      setTimeout(() => setStep('details'), 500);
    }, 4000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-luxury-black/95 backdrop-blur-2xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`relative w-full h-full md:h-auto md:max-w-5xl bg-[#0a0a0a] border-gold/20 flex flex-col overflow-hidden ${
              step === 'calendar' ? 'md:h-[90vh]' : ''
            }`}
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-nude/40 hover:text-gold transition-colors z-50"
            >
              <X size={24} />
            </button>

            <div className="flex-1 overflow-y-auto no-scrollbar p-8 md:p-16">
              {step === 'details' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <div className="text-center mb-12">
                    <span className="text-gold text-[10px] uppercase tracking-[0.5em] mb-4 block">{t('booking.subtitle')}</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-nude-light mb-4">
                      {t('booking.title')} <span className="italic">{t('booking.titleItalic')}</span>
                    </h2>
                    <p className="text-nude/60 font-light tracking-wide text-sm max-w-xl mx-auto">
                      {t('booking.description')}
                    </p>
                  </div>

                  <form onSubmit={handleNextStep} className="space-y-8 max-w-2xl mx-auto">
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
                      className="w-full py-5 bg-gold text-luxury-black text-[11px] uppercase tracking-[0.4em] font-bold gold-glow mt-8 flex items-center justify-center gap-3"
                    >
                      Choose Date & Time <ArrowRight size={16} />
                    </motion.button>
                  </form>
                </motion.div>
              )}

              {step === 'calendar' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="h-full flex flex-col"
                >
                  <button 
                    onClick={() => setStep('details')}
                    className="flex items-center gap-2 text-gold text-[10px] uppercase tracking-[0.3em] mb-8 hover:text-gold-light transition-colors"
                  >
                    <ArrowLeft size={14} /> Back to Details
                  </button>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-1">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-serif text-nude-light italic">Select a Sacred Date</h3>
                      <div className="bg-white/5 p-6 border border-gold/10">
                        <Calendar 
                          onChange={(val) => setSelectedDate(val as Date)} 
                          value={selectedDate}
                          minDate={new Date()}
                          className="luxury-calendar"
                        />
                      </div>
                    </div>

                    <div className="space-y-8">
                      <h3 className="text-2xl font-serif text-nude-light italic">Select Your Alignment Time</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-4 border text-[11px] tracking-[0.2em] transition-all ${
                              selectedTime === time 
                                ? 'bg-gold border-gold text-luxury-black font-bold' 
                                : 'border-nude/20 text-nude/60 hover:border-gold/50 hover:text-nude-light'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>

                      {selectedDate && selectedTime && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-6 bg-gold/5 border border-gold/20 mt-12"
                        >
                          <div className="flex items-center gap-4 mb-4">
                            <CalendarIcon size={20} className="text-gold" />
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.2em] text-gold">Selected Ritual Time</p>
                              <p className="text-nude-light font-serif italic text-lg">
                                {format(selectedDate, 'MMMM do, yyyy')} at {selectedTime}
                              </p>
                            </div>
                          </div>
                          
                          <button
                            onClick={handleFinalSubmit}
                            disabled={isSending}
                            className="w-full py-5 bg-gold text-luxury-black text-[11px] uppercase tracking-[0.4em] font-bold gold-glow flex items-center justify-center gap-3 disabled:opacity-50"
                          >
                            {isSending ? (
                              <>Sending Application... <Mail className="animate-pulse" size={16} /></>
                            ) : (
                              <>Confirm & Send Application <Check size={16} /></>
                            )}
                          </button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-20 text-center"
                >
                  <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-gold/20">
                    <Check className="text-gold" size={48} />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif text-nude-light mb-6 italic">Ritual Application Sent</h3>
                  <p className="text-nude/60 font-light tracking-widest text-sm max-w-md mx-auto leading-relaxed">
                    A celestial confirmation has been sent to <span className="text-gold">{formData.email}</span>. 
                    Our concierge will contact you shortly to finalize your transformation.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
