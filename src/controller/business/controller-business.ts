import { EventModel } from "@/internal/models/event";
import { config } from "../../config/config";

// Get all business
// prevent multiple requests in a short time frame
let cachedBusinesses: EventModel[] | null = null;
let cacheExpiry = 0;

export async function getAllBusinesses(): Promise<EventModel[]> {
  const now = Date.now();

  if (!cachedBusinesses || now > cacheExpiry) {
    console.log(cachedBusinesses ? "Cache expired. Fetching new data." : "Fetching data.");
    const req = await fetch(`${config.baseUrl}/api/routes/business`);

    if (!req.ok) throw new Error(`Failed to fetch businesses: ${req.statusText}`);

    const json = await req.json();
    cachedBusinesses = json?.data || [];
    cacheExpiry = now + 60 * 1000; // Set cache to expire in 60 seconds
    return cachedBusinesses as EventModel[];
  }

  console.log("Returning cached data.");
  return cachedBusinesses;
}

// Get business by ID
export async function getBusinessById(id: string): Promise<EventModel> {
  const req = await fetch(`${config.baseUrl}/api/routes/business?id=${id}`);

  if (!req.ok) {
    throw new Error(`Failed to fetch business with ID ${id}: ${req.statusText}`);
  }

  const json = await req.json();

  // Ensure we return the "data" property like in getAllBusinesses
  const business = json?.data;
  if (!business) {
    throw new Error(`Business with ID ${id} not found.`);
  }

  return business as EventModel;
}