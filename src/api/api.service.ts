import { PackageModel } from '@/models/package';
import { events } from '../data/events';
import { packages } from '@/data/packages';
import { products } from '../data/products';
import { ProductModel } from '@/models/product';

//Fetch events
export async function fetchEvents() {
    return events;
}
//Fetch packages
export async function fetchPackages(id: string) {
    const pack = packages.find((pack: PackageModel) => pack.id === id);

    if (!pack) {
        console.warn(`Package with id ${id} not found`);
        return null; 
    }

    return pack;
}
//Fetch products
export async function fetchProducts(id: string) {
    const product = products.find((product: ProductModel) => product.id === id);
    if (!product) {
        console.warn(`Product with id ${id} not found`);
        return null;
    }
    return product;
}
//Fetch accessories
export async function fetchAccessories(id: string) {
    const response = await fetch('https://api.example.com/asscories');
    return response.json();
}