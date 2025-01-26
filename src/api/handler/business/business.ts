import { config } from "@/config/config";
import { EventModel } from "@/internal/models/event";

// Fetch all businesses
export async function fetchAllBusinesses(): Promise<EventModel[]> {
  const response = await fetch(config.API_ENDPOINT+ "/businesses");
  
  if (!response.ok) {
    throw new Error(`Failed to fetch businesses: ${response.statusText}`);
  }

  const data: EventModel[] = await response.json();
  return data;
}
// Fetch a business by its ID
export async function fetchBusinessById(id: string): Promise<EventModel> {
  const response = await fetch(`${config.API_ENDPOINT}/businesses/${id}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch business with ID ${id}: ${response.statusText}`);
  }

  const data: EventModel = await response.json();
  return data;
}