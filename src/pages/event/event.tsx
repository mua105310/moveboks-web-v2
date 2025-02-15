import EventContentComponent from "./components/event-content-component";
import HeroSection from "./components/section/herosection-component";
import { EventModel } from "@/internal/models/event";
import SideMenuComponent from "./components/side-menu-component";

export default function Event({ event }: { event: EventModel }) {
    if (!event) {
        return null;
    }
    return (
        <div className="h-auto space-y-20 lg:space-y-40 2xl:space-y-50">
            <HeroSection event={event} />
            <EventContentComponent event={event} />
            <SideMenuComponent />
        </div>
    );

}
