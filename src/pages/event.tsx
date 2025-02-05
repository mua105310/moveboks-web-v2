import PackageCard from "@/components/card/package-card";
import EventContent from "@/components/event-content";
import HeroSection from "@/components/herosection/herosection";
import { EventModel } from "@/internal/models/event";

export default function Event({ event }: { event: EventModel }) {
    return (
        <div className="h-svh">
            <HeroSection event={event} />
            <EventContent event={event} />
        </div>
    );
}