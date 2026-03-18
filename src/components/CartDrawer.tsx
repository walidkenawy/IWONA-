import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-luxury-black/80 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-luxury-black border-l border-gold/10 z-[70] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-8 border-b border-gold/10 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-serif text-nude-light">{t('cart.title')} <span className="italic text-gold">{t('cart.titleItalic')}</span></h2>
                <p className="text-[10px] uppercase tracking-[0.2em] text-nude/40 mt-1">{totalItems} {t('cart.itemsSelected')}</p>
              </div>
              <button 
                onClick={onClose}
                className="text-nude/40 hover:text-gold transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <p className="text-nude/40 font-light italic mb-8">{t('cart.empty')}</p>
                  <button 
                    onClick={onClose}
                    className="text-[10px] uppercase tracking-[0.3em] text-gold border-b border-gold/30 pb-1"
                  >
                    {t('cart.continue')}
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="w-24 h-32 bg-[#0f0f0f] overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-lg font-serif text-nude-light">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-nude/20 hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-[9px] uppercase tracking-[0.1em] text-nude/40 mb-2">{item.category}</p>
                        <p className="text-gold text-sm font-light">{item.price}</p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-gold/20 px-2 py-1 gap-4">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-nude/40 hover:text-gold transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-xs text-nude-light w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-nude/40 hover:text-gold transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 border-t border-gold/10 bg-gold/5">
                <div className="flex justify-between items-end mb-8">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-nude/40">{t('cart.total')}</span>
                  <span className="text-2xl font-serif text-gold">{totalPrice.toFixed(2)} zł</span>
                </div>
                <button className="w-full py-5 bg-gold text-luxury-black text-[11px] uppercase tracking-[0.4em] font-bold gold-glow hover:bg-gold-light transition-all">
                  {t('cart.checkout')}
                </button>
                <p className="text-[8px] uppercase tracking-[0.2em] text-nude/30 text-center mt-6">
                  {t('cart.shipping')}
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
