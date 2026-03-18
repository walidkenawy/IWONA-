import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { useTranslation } from 'react-i18next';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function ChatBot() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Welcome to the Sacred Sanctuary. I am your Ritual Concierge. How may I guide your journey today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: messages.concat({ role: 'user', text: userMessage }).map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: "You are the 'Sacred Ritual Concierge' for SPA FOR SOUL, a luxury wellness and high-fashion healing sanctuary. Your tone is mystical, elegant, sophisticated, and deeply respectful. You guide users through our rituals: The Healer (Energy Alignment), The Shaman (Ancestral Wisdom), and The Coach (Manifestation). You also know about our signature products like Midnight Bloom perfume and Sacred Silk hair oil. Keep responses concise but atmospheric. Use words like 'sanctuary', 'ritual', 'essence', 'alignment', and 'journey'.",
          temperature: 0.7,
        }
      });

      const modelText = response.text || "The energies are shifting. Please try again in a moment.";
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, { role: 'model', text: "Forgive me, the connection to the ethereal plane is weak. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom left' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 left-0 w-[350px] md:w-[400px] bg-luxury-black border border-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-gold/10 flex items-center justify-between bg-gold/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                  <Sparkles size={16} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.3em] text-gold font-bold">Ritual Concierge</h3>
                  <span className="text-[8px] uppercase tracking-[0.2em] text-nude/40">Online in Sanctuary</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-nude/40 hover:text-gold transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 h-[400px] overflow-y-auto p-6 space-y-6 no-scrollbar"
            >
              {messages.map((m, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 text-xs leading-relaxed tracking-wide ${
                    m.role === 'user' 
                      ? 'bg-gold/10 border border-gold/20 text-nude-light rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl' 
                      : 'bg-white/5 text-nude/80 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl'
                  }`}>
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl">
                    <Loader2 size={16} className="text-gold animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-gold/10 bg-gold/5">
              <div className="relative flex items-center">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask the Concierge..."
                  className="w-full bg-transparent border-b border-nude/20 py-3 pr-10 text-xs text-nude-light focus:border-gold outline-none transition-colors font-light placeholder:text-nude/20"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-0 text-gold hover:text-gold-light transition-colors disabled:opacity-30"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${
          isOpen ? 'bg-luxury-black border border-gold/20 rotate-90' : 'bg-gold gold-glow'
        }`}
      >
        {isOpen ? <X className="text-gold" /> : <MessageSquare className="text-luxury-black" />}
      </motion.button>
    </div>
  );
}
