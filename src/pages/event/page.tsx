import { EventModel } from "@/internal/models/event";

export default function EventPage({ event }: { event: EventModel }) {
    return (
    <div>
        <h1>{event.title}</h1>
    </div>
    );
}