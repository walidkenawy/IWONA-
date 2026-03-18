import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../constants';
import { ShoppingBag, Plus, Check, Heart, Search, X, Calendar } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductModal from './ProductModal';
import BookingModal from './BookingModal';
import { Product } from '../types';
import { useTranslation } from 'react-i18next';

export default function Shop() {
  const [filter, setFilter] = useState<'all' | 'skincare' | 'haircare' | 'perfume'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [addedId, setAddedId] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { t } = useTranslation();

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesFilter = filter === 'all' || product.category === filter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.stopPropagation();
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  const handleToggleWishlist = (e: React.MouseEvent, product: any) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <section id="shop" className="py-32 px-6 bg-luxury-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="w-full md:w-auto">
            <span className="text-gold text-[10px] uppercase tracking-[0.5em] mb-4 block">{t('shop.subtitle')}</span>
            <h2 className="text-4xl md:text-6xl font-serif text-nude-light">
              {t('shop.title')} <span className="italic">{t('shop.titleItalic')}</span>
            </h2>
          </div>
          
          <div className="flex flex-col md:items-end gap-6 w-full md:w-auto">
            <div className="flex items-center gap-6 w-full md:w-auto justify-end">
              <div className={`relative flex items-center transition-all duration-500 ${isSearchOpen ? 'w-full md:w-64 opacity-100' : 'w-0 opacity-0 pointer-events-none'}`}>
                <input
                  type="text"
                  placeholder={t('shop.searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent border-b border-gold/30 py-2 pl-2 pr-8 text-nude text-xs uppercase tracking-widest focus:outline-none focus:border-gold transition-colors placeholder:text-nude/20"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-0 text-nude/40 hover:text-gold transition-colors"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
              
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 transition-colors ${isSearchOpen ? 'text-gold' : 'text-nude/40 hover:text-nude'}`}
                aria-label="Toggle search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex gap-8 border-b border-nude/10 pb-2 overflow-x-auto w-full md:w-auto no-scrollbar">
              {['all', 'skincare', 'haircare', 'perfume'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as any)}
                  className={`text-[10px] uppercase tracking-[0.3em] transition-all whitespace-nowrap ${
                    filter === cat ? 'text-gold' : 'text-nude/40 hover:text-nude'
                  }`}
                >
                  {t(`shop.categories.${cat}`)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative aspect-[4/5] bg-[#0f0f0f] overflow-hidden mb-6 cursor-pointer transition-all duration-700 group-hover:shadow-[0_0_40px_rgba(197,160,89,0.2)] group-hover:ring-1 group-hover:ring-gold/20">
                    <img 
                      src={product.image} 
                      alt={t(`shop.items.${product.id}.name`)}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gold/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <button 
                      onClick={(e) => handleToggleWishlist(e, product)}
                      className="absolute top-4 right-4 z-10 p-2 rounded-full bg-luxury-black/40 backdrop-blur-md border border-gold/20 text-nude hover:text-gold transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <Heart 
                        size={16} 
                        fill={isInWishlist(product.id) ? "currentColor" : "none"} 
                        className={isInWishlist(product.id) ? "text-gold" : ""}
                      />
                    </button>
                    
                    <button 
                      onClick={(e) => handleAddToCart(e, product)}
                      className={`absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] py-3 text-[9px] uppercase tracking-[0.3em] font-bold translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-2 ${
                        addedId === product.id ? 'bg-green-600 text-white' : 'bg-gold text-luxury-black'
                      }`}
                    >
                      {addedId === product.id ? (
                        <><Check size={14} /> {t('shop.added')}</>
                      ) : (
                        <><Plus size={14} /> {t('shop.addToRitual')}</>
                      )}
                    </button>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-nude/40 mb-2 block">{t(`shop.categories.${product.category}`)}</span>
                    <h3 className="text-lg font-serif text-nude-light mb-1 group-hover:text-gold transition-colors">{t(`shop.items.${product.id}.name`)}</h3>
                    <p className="text-gold text-sm font-light">{product.price}</p>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <p className="text-nude/40 font-serif italic text-xl">{t('shop.noResults')} "{searchTerm}"</p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="mt-4 text-gold text-[10px] uppercase tracking-[0.3em] hover:text-gold-light transition-colors"
                >
                  {t('shop.viewAll')}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Signature Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 border border-gold/20 bg-gradient-to-br from-gold/5 to-transparent relative overflow-hidden"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold text-[10px] uppercase tracking-[0.5em] mb-6 block">{t('shop.signature.subtitle')}</span>
              <h3 className="text-3xl md:text-5xl font-serif text-nude-light mb-8 leading-tight">
                {t('shop.signature.title')} <span className="italic">{t('shop.signature.titleItalic')}</span>
              </h3>
              <p className="text-nude/70 mb-10 leading-relaxed font-light">
                {t('shop.signature.description')}
              </p>
              <div className="flex items-baseline gap-4 mb-10">
                <span className="text-3xl text-gold font-serif">{t('shop.signature.price')}</span>
                <span className="text-nude/30 line-through text-sm">{t('shop.signature.value')}</span>
              </div>
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="px-10 py-4 bg-gold text-luxury-black text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-gold-light transition-all gold-glow flex items-center justify-center gap-3"
              >
                <Calendar size={16} />
                {t('shop.signature.cta')}
              </button>
            </div>
            <div className="relative aspect-square group/bundle cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1563170351-be8d1882fe67?auto=format&fit=crop&q=80&w=1000" 
                alt="Ritual Bundle"
                className="w-full h-full object-cover rounded-full border border-gold/30 p-4 transition-transform duration-[2s] group-hover/bundle:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 rounded-full bg-gold/5 animate-pulse group-hover/bundle:bg-gold/10 transition-colors" />
              <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(197,160,89,0)] group-hover/bundle:shadow-[0_0_60px_rgba(197,160,89,0.3)] transition-shadow duration-700" />
            </div>
          </div>
        </motion.div>
      </div>

      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        selectedServiceId="bundle-1"
      />
    </section>
  );
}
