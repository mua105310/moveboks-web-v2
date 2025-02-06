"use client";
import { EventModel } from "@/internal/models/event";
import { getEventsByID } from "@/controller/controller-service";
import PackageCard from "./card/package-card";
import { useEvent } from "@/provider/event-provider";
import { useEffect } from "react";
import CardSlider from "./carousel/card-slider";

export default function EventContent({ event }: { event: EventModel }) {
    const { selectedEvent, setEvent } = useEvent();

    useEffect(() => {
        getEventsByID(event.ID).then((data) => {
            setEvent(data);
            console.log(data);  
        });
    }, [event.ID]);


    return (
        <div className="pt-10 pb-10">
                {selectedEvent && selectedEvent.packages && selectedEvent.packages.length > 0 && (
                    <CardSlider
                        items={selectedEvent.packages}
                        renderItem={(pack) => <PackageCard key={pack.ID} pack={pack} />}
                    />
                )}
        </div>
    );
}
