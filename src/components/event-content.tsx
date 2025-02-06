import { EventModel } from "@/internal/models/event";
import { getEventById } from "@/controller/controller-service";
import SwiperCarousel from "./carousel/swiper-carousel";
import PackageCard from "./card/package-card";

export default async function EventContent({ event }: { event: EventModel }) {
    const selectedEvent = await getEventById(event.ID);
    if (!selectedEvent) return null;

    return (
        <div className="pt-10 pb-10">
            {selectedEvent?.packages && (
                <SwiperCarousel>
                    {selectedEvent.packages.map((pack) => (
                        <PackageCard key={pack.ID} item={pack} />
                    ))}
                </SwiperCarousel>
            )}
        </div>
    );
}
