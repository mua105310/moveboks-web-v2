import HeroSection from "@/components/herosection/herosection";
import { EventModel } from "@/internal/models/event";

export default function EventPage({ event }: { event: EventModel }) {
    return (
    <div className="h-svh">
        <HeroSection event={event} />
    </div>
    );
}