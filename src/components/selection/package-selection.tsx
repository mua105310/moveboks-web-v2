import { EventModel } from "@/internal/models/event";
import { getEventById } from "@/controller/controller-service";
import SwiperCarousel from "@/components/selection/carousel/swiper-carousel";
import PackageCard from "@/components/card/package-card";

export default function Selection({ event }: { event: EventModel }) {
    return (
        <div>
            {event?.packages && (
                <SwiperCarousel>
                    {event.packages.map((pack) => (
                        <PackageCard key={pack.ID} item={pack} />
                    ))}
                </SwiperCarousel>
            )}
        </div>
    );
}
