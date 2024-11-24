// src/controllers/eventController.ts
import { fetchEvents, fetchPackages, fetchProducts, fetchAccessories } from "@/api/api.service";
import { EventModel } from "@/models/event";
import { PackageModel, ProductConstraintModel } from "@/models/package";
import { ProductModel } from "@/models/product";
import { AccessoryModel } from "@/models/accessory";
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

// Fetches accessories for given IDs and returns an array of AccessoryModel
export async function getAccessories(ids: string[]): Promise<AccessoryModel[]> {
    const accessoryPromises = ids.map(id => fetchAccessories(id));
    const fetchedAccessories = await Promise.all(accessoryPromises);
    return fetchedAccessories.filter(Boolean) as AccessoryModel[];
}

// New function to fetch a product with its accessories
export async function getProductWithAccessories(productId: string, packageOptions?: ProductConstraintModel[]): Promise<{
    product: ProductModel;
    accessories: AccessoryModel[];
}> {
    // Fetch the product
    const [product] = await getProducts([productId]);
    if (!product) {
        throw new Error('Product not found');
    }

    // Find product constraints from package options
    const productConstraint = packageOptions?.find(
        option => option.productId === productId
    );

    // Fetch accessories if they exist in constraints
    let accessories: AccessoryModel[] = [];
    if (productConstraint?.accessoryIds?.length) {
        accessories = await getAccessories(productConstraint.accessoryIds);
    }

    return { product, accessories };
}
