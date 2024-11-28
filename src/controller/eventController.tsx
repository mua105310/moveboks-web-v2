// src/controllers/eventController.ts
import { fetchEvents, fetchPackages, fetchProducts} from "@/api/api.service";
import { EventModel } from "@/models/event";
import { PackageModel, ProductConstraintModel } from "@/models/package";
import { ProductModel } from "@/models/product";
// Fetches all events

export const getEvents = (): Promise<EventModel[]> => {
  return fetchEvents();
}
// Fetches packages for given IDs and returns an array of PackageModel
export async function getPackages(ids: string[]): Promise<PackageModel[]> {
    const packagePromises = ids.map(id => fetchPackages(id));
    const fetchedPackages = await Promise.all(packagePromises);
    return fetchedPackages.filter(Boolean) as PackageModel[]; // Filter out any null or undefined values
}

// Fetches products for given IDs and returns an array of ProductModel
export async function getProducts(ids: string[]): Promise<ProductModel[]> {
    const productPromises = ids.map(id => fetchProducts(id));
    const fetchedProducts = await Promise.all(productPromises);
    return fetchedProducts.filter(Boolean) as ProductModel[]; // Filter out any null or undefined values
}