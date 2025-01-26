import { EventModel } from '@/internal/models/event';
import { config } from '@/config/config';
import { fetchAllBusinesses, fetchItemById } from '@/api/api-service';


//*********business controller ****************/

let cache: { data: EventModel[] | null; expiry: number } = { data: null, expiry: 0 };

export async function getAllBusinesses(): Promise<EventModel[]> {
  if (cache.data && cache.expiry > Date.now()) {
    return cache.data;
  }

  const response = await fetchAllBusinesses();
  cache = {
    data: response || [],
    expiry: Date.now() + 60000, // Cache valid for 60 seconds
  };

  return cache.data || [];
}


//*********item controller ****************/

export async function getItemByID(id: string, item: string): Promise<any> {
  try {
      const response = await fetchItemById(id, item);
      // Ensure we only return the `data` field from the response
      return response || [];
  } catch (error) {
      console.error('Error fetching item:', error);
      throw new Error('Unable to retrieve item at this time. Please try again later.');
  }
}


//*********item controller ****************/