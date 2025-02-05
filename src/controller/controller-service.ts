import { EventModel } from '@/internal/models/event';
import { PackageModel } from '@/internal/models/package';

const baseUrl = 'http://localhost:3000/api';

//*********Events controller ****************/

let cacheEvent: { data: EventModel[] | null; expiry: number } = { data: null, expiry: 0 };
export async function getAllEvents(): Promise<EventModel[]> {
    if (cacheEvent.data && cacheEvent.expiry > Date.now()) {
        return cacheEvent.data;
    }

    try {
        const response = await fetch(`${baseUrl}/events`);
        const events: EventModel[] = await response.json();
        cacheEvent = { data: events, expiry: Date.now() + 1000 * 60 * 5 };
        return events;
    } 
    catch (error) {
        console.error('Error fetching events:', error);
        throw new Error('Unable to retrieve events at this time. Please try again later.');
    }
}

export async function getEventsByID(id: string): Promise<EventModel> {

    try {
        const response = await fetch(`${baseUrl}/events/${id}`);
        const events: EventModel = await response.json();
        return events;
    } 
    catch (error) {
        console.error('Error fetching events:', error);
        throw new Error('Unable to retrieve events at this time. Please try again later.');
    }
}

//*********Item controller ****************/


//*********Item controller ****************/