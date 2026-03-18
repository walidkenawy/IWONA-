import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = React.useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <AnimatePresence>
      {product && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-luxury-black/90 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-5xl bg-luxury-black border border-gold/20 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 text-nude/40 hover:text-gold transition-colors"
            >
              <X size={24} />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 aspect-square md:aspect-auto relative overflow-hidden bg-[#0f0f0f]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/20 to-transparent" />
            </div>

            {/* Info Section */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center overflow-y-auto custom-scrollbar">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-gold text-[10px] uppercase tracking-[0.5em] mb-4 block">
                  {product.category}
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-nude-light mb-6 leading-tight">
                  {product.name}
                </h2>
                <p className="text-gold text-2xl font-serif mb-8">{product.price}</p>
                
                <div className="space-y-8 mb-12">
                  <div className="space-y-4">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-nude/40 border-b border-gold/10 pb-2">The Story</h4>
                    <p className="text-nude/70 font-light leading-relaxed tracking-wide">
                      {product.description}
                    </p>
                  </div>

                  {product.notes && (
                    <div className="space-y-4">
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-nude/40 border-b border-gold/10 pb-2">Fragrance Notes</h4>
                      <div className="flex flex-wrap gap-3">
                        {product.notes.map((note, i) => (
                          <span key={i} className="px-3 py-1 border border-gold/20 text-[10px] uppercase tracking-[0.1em] text-gold/80 italic">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {product.benefits && (
                    <div className="space-y-4">
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-nude/40 border-b border-gold/10 pb-2">Ritual Benefits</h4>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, i) => (
                          <li key={i} className="text-nude/70 font-light text-sm flex items-center gap-3">
                            <div className="w-1 h-1 bg-gold rounded-full" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`w-full py-5 text-[11px] uppercase tracking-[0.4em] font-bold transition-all duration-500 flex items-center justify-center gap-3 ${
                    isAdded ? 'bg-green-600 text-white' : 'bg-gold text-luxury-black gold-glow hover:bg-gold-light'
                  }`}
                >
                  {isAdded ? (
                    'Added to Ritual'
                  ) : (
                    <>
                      <ShoppingBag size={16} />
                      Acquire for Ritual
                    </>
                  )}
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
