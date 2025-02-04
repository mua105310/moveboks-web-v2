import { EventModel } from '@/internal/models/event';

const baseUrl = 'http://localhost:3000/api';

//*********business controller ****************/

// let cache: { data: EventModel[] | null; expiry: number } = { data: null, expiry: 0 };

export async function getAllEvents(): Promise<EventModel[]> {

    const response = await fetch(`${baseUrl}/events`);
    const events: EventModel[] = await response.json();
    console.log(events);

    return events;
}

//*********item controller ****************/

// export async function getItemByID(id: string, item: string): Promise<any> {
//   try {
//       const response = await fetchItemById(id, item);
//       // Ensure we only return the `data` field from the response
//       return response || [];
//   } catch (error) {
//       console.error('Error fetching item:', error);
//       throw new Error('Unable to retrieve item at this time. Please try again later.');
//   }
// }


//*********item controller ****************/