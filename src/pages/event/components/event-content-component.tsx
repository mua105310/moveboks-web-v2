import SwiperCarousel from "@/components/carousel/swiper-carousel";
import { EventModel } from "@/internal/models/event";
import PackageCardComponent from "./package-card-component";
import { getEventById } from "@/controller/controller-service";
import SectionComponent from "./section-component";

export default async function EventContentComponent({event}: {event: EventModel}) {
    const actualEvent = await getEventById(event.ID);

    return(
        <div>
            {/* Show packages */}
            <SectionComponent title='Vælg pakke'>
                <SwiperCarousel>
                    {actualEvent?.packages.map((packageItem, index) => (
                        <PackageCardComponent key={index} item={packageItem} />
                    ))}
                </SwiperCarousel>
            </SectionComponent>
            {/* Show Products */}
        </div>
    )
}