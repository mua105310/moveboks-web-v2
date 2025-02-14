import EventContentComponent from "./components/event-content-component";
import HeroSection from "./components/herosection-component";
import { EventModel } from "@/internal/models/event";

export default function Event({ event }: { event: EventModel }) {
    if (!event) {
        return null;
    }
    return (
        <div className="h-auto">
            <HeroSection event={event} />
            <EventContentComponent event={event} />
        </div>
    );

}
