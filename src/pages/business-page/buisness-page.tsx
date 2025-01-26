import { EventModel } from "@/internal/models/event";
import  BusinessComponentHerosection from "./components/business-component-herosection";
import BusinessComponentContent from "@/pages/business-page/components/business-component-content";
import { getBusinessById } from "@/controller/business/controller-business";

export default function BusinessPage({ business }: { business: EventModel }) {

    return (
        <div>
            <BusinessComponentHerosection business={business} />
            <BusinessComponentContent business={business} />
        </div>
    );
}
    