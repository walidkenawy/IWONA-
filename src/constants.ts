import { Product, Service, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Midnight Bloom',
    category: 'perfume',
    description: 'A dark, mysterious fragrance that evokes the essence of the night jasmine and rare oud. A ritual in every spray.',
    price: '960 zł',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000',
    notes: ['Night Jasmine', 'Black Oud', 'Saffron', 'Amber'],
  },
  {
    id: 'p2',
    name: 'Divine Glow Serum',
    category: 'skincare',
    description: 'Infused with 24k gold flakes and rare botanical extracts to awaken your skin\'s natural radiance.',
    price: '740 zł',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=1000',
    benefits: ['Intense Hydration', 'Cellular Renewal', 'Luminous Finish'],
  },
  {
    id: 'p3',
    name: 'Sacred Silk Oil',
    category: 'haircare',
    description: 'A lightweight yet powerful treatment that restores strength and vitality to every strand.',
    price: '480 zł',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=1000',
    benefits: ['Heat Protection', 'Deep Nourishment', 'Weightless Shine'],
  },
  {
    id: 'p4',
    name: 'Solaris Essence',
    category: 'perfume',
    description: 'The warmth of the sun captured in a bottle. Bright citrus notes balanced by deep sandalwood.',
    price: '840 zł',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000',
    notes: ['Bergamot', 'Neroli', 'Sandalwood', 'White Musk'],
  },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'The Healer: Somatic Alchemy',
    description: 'A deep restorative journey where the healer uses intuitive touch and sacred oils to release ancestral tension and restore the body\'s natural crystalline frequency.',
    longDescription: 'This ritual begins with a diagnostic scent invocation, identifying areas of energetic blockage. Using a combination of myofascial release, lymphatic drainage, and intuitive energy work, the healer works to dissolve physical manifestations of emotional trauma. Sacred oils, infused with high-frequency botanicals, are applied to key meridian points to anchor the healing. The session concludes with a golden aura sealing, protecting your newly restored crystalline frequency.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200',
    ritualSteps: ['SCENT INVOCATION', 'NERVOUS SYSTEM RESET', 'DEEP TISSUE ALCHEMY', 'GOLDEN AURA SEALING'],
  },
  {
    id: 's2',
    title: 'The Shaman: Spirit Flight',
    description: 'A rhythmic ritual of breath and movement. Enter a trance state to communicate with your higher self, shedding old skins and reclaiming your primal power.',
    longDescription: 'The Spirit Flight is a transformative journey into the subconscious. We begin with a ceremonial cacao invocation to open the heart space. Through guided primal breathwork, you will bypass the analytical mind and enter a state of expanded consciousness. Ecstatic soul dance allows the body to express and release stored energies, while integration silence provides the space for profound insights and spiritual reclamation. This is a ritual of shedding the old and birthing the new.',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1200',
    ritualSteps: ['CACAO INVOCATION', 'PRIMAL BREATHWORK', 'ECSTATIC SOUL DANCE', 'INTEGRATION SILENCE'],
  },
  {
    id: 's3',
    title: 'The Coach: Destiny Architecture',
    description: 'Strategic soul-alignment sessions. Your trainer acts as a mirror and architect, helping you dismantle limiting structures and design a life of absolute sovereignty.',
    longDescription: 'Destiny Architecture is for those ready to consciously design their reality. We start with shadow mapping, identifying the hidden beliefs and patterns that have dictated your choices. Through belief deconstruction, we dismantle these limiting structures. We then move into sovereignty strategy, defining your true desires and aligning your actions with your highest purpose. The final legacy blueprint provides a practical and spiritual roadmap for manifesting a life of absolute sovereignty and impact.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200',
    ritualSteps: ['SHADOW MAPPING', 'BELIEF DECONSTRUCTION', 'SOVEREIGNTY STRATEGY', 'LEGACY BLUEPRINT'],
  },
  {
    id: 's4',
    title: 'The Dancer: Shakti Flow',
    description: 'A sacred movement practice to awaken the divine feminine energy. Through fluid dance and conscious breath, reconnect with your creative power and sensual essence.',
    longDescription: 'Shakti Dance is the yoga of dance. This ritual begins with rhythmic breathing to activate the kundalini energy. We then move into fluid, organic movements that follow the natural flow of your body\'s energy centers. As the music intensifies, you will enter a state of ecstatic expression, releasing inhibitions and reclaiming your radiant essence. The journey concludes with a deep restorative relaxation, allowing the awakened Shakti energy to integrate and nourish your entire being.',
    image: 'https://images.unsplash.com/photo-1545208393-596651103691?auto=format&fit=crop&q=80&w=1200',
    ritualSteps: ['KUNDALINI ACTIVATION', 'FLUID FLOW', 'ECSTATIC EXPRESSION', 'SHAKTI INTEGRATION'],
  },
  {
    id: 's5',
    title: 'The Angel: Angel Touch',
    description: 'A celestial massage experience that transcends the physical. Soft, ethereal strokes combined with high-vibrational energy work to lift your spirit and soothe your soul.',
    longDescription: 'The Angel Touch is our most delicate yet profound massage ritual. It begins with a celestial misting of white rose and frankincense to clear your energetic field. Using feather-light strokes and specialized hand placements, the practitioner works with the subtle energy bodies to release deep-seated emotional blockages. This ritual is designed to make you feel weightless, as if being held by divine presence. It concludes with a crystal sound bath to anchor the high-vibrational state into your physical cells.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1200',
    ritualSteps: ['CELESTIAL MISTING', 'ETHEREAL STROKES', 'ENERGY ALIGNMENT', 'CRYSTAL SOUND BATH'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Elena Vance',
    role: 'Creative Director',
    story: 'The SPA FOR SOUL experience is not just a service; it\'s a rebirth. I arrived fragmented and left whole, carrying the scent of Midnight Bloom like a shield of power.',
  },
  {
    id: 't2',
    name: 'Julian Thorne',
    role: 'Entrepreneur',
    story: 'Rarely do you find a brand that understands the intersection of luxury and deep spiritual work. The self-development sessions have been life-altering.',
  },
];
