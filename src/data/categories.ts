import { Category } from '../types';
import { 
  Laptop, 
  Smartphone, 
  Home, 
  Headphones, 
  Camera, 
  Watch,
  Tv, 
  Gamepad, 
  UtensilsCrossed, // Changed from Kitchen
  Printer, 
  Cpu, 
  Battery
} from 'lucide-react';

export const categories: (Category & { productCount: number })[] = [
  { name: 'Electronics', icon: Laptop, slug: 'electronics', productCount: 156 },
  { name: 'Smartphones', icon: Smartphone, slug: 'smartphones', productCount: 89 },
  { name: 'Home & Kitchen', icon: Home, slug: 'home-kitchen', productCount: 234 },
  { name: 'Audio', icon: Headphones, slug: 'audio', productCount: 78 },
  { name: 'Cameras', icon: Camera, slug: 'cameras', productCount: 45 },
  { name: 'Wearables', icon: Watch, slug: 'wearables', productCount: 67 },
  { name: 'TVs', icon: Tv, slug: 'tvs', productCount: 92 },
  { name: 'Gaming', icon: Gamepad, slug: 'gaming', productCount: 123 },
  { name: 'Appliances', icon: UtensilsCrossed, slug: 'appliances', productCount: 167 },
  { name: 'Printers', icon: Printer, slug: 'printers', productCount: 34 },
  { name: 'Computer Parts', icon: Cpu, slug: 'computer-parts', productCount: 189 },
  { name: 'Power & Batteries', icon: Battery, slug: 'power', productCount: 56 }
];