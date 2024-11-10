import { PackageModel } from '@/models/package';
import { events } from '../data/events';
import { packages } from '@/data/packages';
import { products } from '../data/products';
import { ProductModel } from '@/models/product';


export const fetchEvents = async () => events;

export const fetchPackages = async (id: string) => {
    const pack = packages.find((p: PackageModel) => p.id === id);
    if (!pack) console.warn(`Package with id ${id} not found`);
    return pack || null;
};

export const fetchProducts = async (id: string) => {
    const product = products.find((p: ProductModel) => p.id === id);
    if (!product) console.warn(`Product with id ${id} not found`);
    return product || null;
};

export const fetchAccessories = async (id: string) => {
    const response = await fetch('https://api.example.com/asscories');
    return response.json();
};
