import PackageCard from "@/components/card/package-card";
import EventContent from "@/components/event-content";
import HeroSection from "@/components/herosection/herosection";
import PlaceOrder from "@/components/place-order/place-order";
import { EventModel } from "@/internal/models/event";

export default function Event({ event }: { event: EventModel }) {
    if (!event) {
        return null;
    }
    return (
        <div className="h-auto">
            <HeroSection event={event} />
            <EventContent event={event} />
            <PlaceOrder />
        </div>
    );

}
