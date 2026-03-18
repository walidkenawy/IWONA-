import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WishlistDrawer({ isOpen, onClose }: WishlistDrawerProps) {
  const { wishlist, removeFromWishlist, wishlistCount } = useWishlist();
  const { addToCart } = useCart();
  const { t } = useTranslation();

  const handleMoveToCart = (product: any) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

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
            className="fixed inset-0 bg-luxury-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-luxury-black border-l border-gold/10 z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-gold/10 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-serif text-nude-light">{t('wishlist.title')} <span className="italic text-gold">{t('wishlist.titleItalic')}</span></h2>
                <p className="text-[10px] uppercase tracking-[0.2em] text-nude/40 mt-1">{wishlistCount} {t('wishlist.itemsSaved')}</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gold/10 rounded-full transition-colors text-gold"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              {wishlist.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <Heart size={48} className="text-gold/20 mb-6" />
                  <h3 className="text-xl font-serif text-nude-light mb-2">{t('wishlist.empty')}</h3>
                  <p className="text-sm text-nude/40 font-light max-w-[200px]">
                    {t('wishlist.emptyDesc')}
                  </p>
                  <button 
                    onClick={onClose}
                    className="mt-8 px-8 py-3 border border-gold/30 text-gold text-[10px] uppercase tracking-[0.2em] hover:bg-gold hover:text-luxury-black transition-all"
                  >
                    {t('wishlist.explore')}
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {wishlist.map((item) => (
                    <div key={item.id} className="flex gap-6 group">
                      <div className="w-24 h-24 bg-[#0f0f0f] overflow-hidden border border-gold/10">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="text-nude-light font-serif text-lg">{item.name}</h4>
                            <button 
                              onClick={() => removeFromWishlist(item.id)}
                              className="text-nude/20 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="text-gold text-sm font-light mt-1">{item.price}</p>
                        </div>
                        <button 
                          onClick={() => handleMoveToCart(item)}
                          className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors mt-4"
                        >
                          <ShoppingBag size={14} />
                          {t('wishlist.moveToCart')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
