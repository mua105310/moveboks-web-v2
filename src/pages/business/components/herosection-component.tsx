import { EventModel } from "@/internal/models/event";
import Image from "next/image";

export default function HeroSectionComponent({business}: {business: EventModel}) {
    return (
        <div>
            <div className="relative" style={{ height: 'calc(40svh)' }}>
                <div className="absolute z-10 top-0 bg-black w-full h-full opacity-65"></div>
                <div className="w-full relative h-full z-0">
                    <Image
                        src={business.image_url}
                        alt={business.title}
                        fill
                        priority={false}
                        style={{ objectFit: 'cover' }}
                        loading="lazy"
                    />
                </div>
                <div className='absolute bottom-0 z-10 p-10'>
                    <h1>{business.title}</h1>
                    <p className='text-xs'>{business.short_description}</p>
                </div>
            </div>
        </div>
    );
}