import { EventModel } from "@/internal/models/event";
import HeroSectionComponent from "./components/herosection-component";
import ContentComponent from "./components/content-component";
import Sidebar from "@/components/placeorder/sidebar";
import ToggleSidebar from "@/components/placeorder/toggle-sidebar";


export default function BusinessPage({ business }: { business: EventModel }) {

    return (
        <div>
            <HeroSectionComponent business={business} />
            <ContentComponent business={business} />
            <Sidebar />
           <ToggleSidebar />
        </div>
    );
}
    