"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { EventModel } from "@/internal/models/event";

// Define intial state 
interface EventState {
    selectedEvent: EventModel | undefined;
    setEvent: (selectedEvent: EventModel) => void;
}

// Create context
const EventContext = createContext<EventState | undefined>(undefined);

// Provider component 
export const EventProvider = ({ children }: { children: ReactNode }) => {
    const [event, setEvent] = useState<EventModel | undefined>(undefined);

    return (
        <EventContext.Provider value={{ selectedEvent: event, setEvent }}>
            {children}
        </EventContext.Provider>
    );
};

// Custom hook to use event context
export const useEvent = () => {
    const context = useContext(EventContext);
    if (!context) {
        throw new Error('useEvent must be used within a EventProvider');
    }
    return context;
}