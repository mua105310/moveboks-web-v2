import { EventModel } from '@/internal/models/event';
import { PackageModel } from '@/internal/models/package';
import { config } from '@/config/config';

const baseUrl = 'http://localhost:3000/api';

//*********Events controller ****************/

export async function getAllEvents(): Promise<EventModel[]> {
    try {
        const response = await fetch(`${config.API_ENDPOINT}/businesses`, {
            next: { revalidate: 60 }, 
        });

        if (!response.ok) throw new Error(`Failed to fetch events: ${response.status} ${response.statusText}`);

        const json = await response.json();
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
        const response = await fetch(`${config.API_ENDPOINT}/businesses/${id}`);
        if (!response.ok) throw new Error(`Failed to fetch event ${id}: ${response.status} ${response.statusText}`);

        const json = await response.json();
        return json.data; 
    } catch (error) {
        console.error("Error fetching event:", error);
        return null;
    }
}


//*********Item controller ****************/


//*********Item controller ****************/$