export interface Product {
  id: string;
  name: string;
  category: 'skincare' | 'haircare' | 'perfume';
  description: string;
  price: string;
  image: string;
  notes?: string[];
  benefits?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  ritualSteps: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  story: string;
  role: string;
}
