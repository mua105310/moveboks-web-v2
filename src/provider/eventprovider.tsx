"use client";

import { createContext, useContext, useState } from "react";
import { EventModel } from "@/models/event";

type EventsContextType = {
  events: EventModel[] | null;
};

const EventsContext = createContext<EventsContextType | undefined>(undefined);

export function EventsProvider({
  children,
  initialEvents,
}: {
  children: React.ReactNode;
  initialEvents: EventModel[];
}) {
  const [events] = useState<EventModel[]>(initialEvents);

  return (
    <EventsContext.Provider value={{ events }}>
      {children}
    </EventsContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventsContext);
  if (!context) throw new Error("useEvents must be used within EventsProvider");
  return context.events;
}
