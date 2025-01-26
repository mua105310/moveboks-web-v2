import { EventModel } from '@/internal/models/event';
import { config } from '@/config/config';


//*********business routes ****************/

export async function fetchAllBusinesses(): Promise<EventModel[]> {
    const req = await fetch(`${config.API_ENDPOINT}/businesses`);
    if (!req.ok) throw new Error(`Failed to fetch businesses: ${req.statusText}`);
    const json = await req.json();
    return json?.data || [];
}

//*********items routes ****************/
export async function fetchItemById(id: string, item: string): Promise<any> {
    const req = await fetch(`${config.API_ENDPOINT}/${item}/${id}`);
    if (!req.ok) throw new Error(`Failed to fetch item: ${req.statusText}`);
    const json = await req.json();
    return json?.data || [];
}