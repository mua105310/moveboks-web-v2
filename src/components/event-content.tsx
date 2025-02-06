import { EventModel } from "@/internal/models/event";
import { getEventById } from "@/controller/controller-service";
import PackageCard from "./card/package-card";
import CardSlider from "./carousel/card-slider";

export default async function EventContent({ event }: { event: EventModel }) {
    // Fetch event data directly on the server
    const selectedEvent = await getEventById(event.ID);
    if (!selectedEvent) return null;

    return (
        <div className="pt-10 pb-10">

            {selectedEvent?.packages && (
                <CardSlider items={selectedEvent.packages} />
            )}
        </div>
    );
}
