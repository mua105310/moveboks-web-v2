import { EventModel } from "@/internal/models/event";
import { getEventById } from "@/controller/controller-service";
import Selection from "./selection/selection";

export default async function EventContent({ event }: { event: EventModel }) {
    const selectedEvent = await getEventById(event.ID);
    if (!selectedEvent) return null;
    
    return (
        <div className="pt-20 pb-20 max-w-[1300px] mx-auto">
            {/* CHOOSE PACKAGE AND PRODUCT*/}
            <Selection event={selectedEvent} />
        </div>
    );
}
