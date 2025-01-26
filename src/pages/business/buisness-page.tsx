import { EventModel } from "@/internal/models/event";
import HeroSectionComponent from "./components/herosection-component";
import ContentComponent from "./components/content-component";


export default function BusinessPage({ business }: { business: EventModel }) {

    return (
        <div>
            <HeroSectionComponent business={business} />
            <ContentComponent business={business} />
        </div>
    );
}
    