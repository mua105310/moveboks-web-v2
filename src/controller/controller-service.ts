import { EventModel } from '@/internal/models/event';
import { PackageModel } from '@/internal/models/package';
import { config } from '@/config/config';

const baseUrl = 'http://localhost:3000/api';

//*********Events controller ****************/

const CACHE_DURATION = 1000 * 60 * 5;
let cacheEvent = { data: null as EventModel[] | null, expiry: 0 };

export async function getAllEvents(): Promise<EventModel[]> {
    if (cacheEvent.data && cacheEvent.expiry > Date.now()) return cacheEvent.data;

    try {

        const response = await fetch(`${config.API_ENDPOINT}/businesses`, { cache: "no-store" });
        if (!response.ok) throw new Error(`Failed to fetch events: ${response.status} ${response.statusText}`);

        const json = await response.json();
        cacheEvent = { data: json.data, expiry: Date.now() + CACHE_DURATION };

        return json.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
}



export async function getEventById(id: string): Promise<EventModel | null> {
    if (!id) {
        console.error("Event ID is required");
        return null;
    }

    try {
        const response = await fetch(`${config.API_ENDPOINT}/businesses/${id}`, { cache: "no-store" });
        if (!response.ok) throw new Error(`Failed to fetch event ${id}: ${response.status} ${response.statusText}`);

        const json = await response.json();
        return json.data; // ✅ Same structure as `getAllEvents()`
    } catch (error) {
        console.error("Error fetching event:", error);
        return null;
    }
}


//*********Item controller ****************/


//*********Item controller ****************/