"use client";

import { EventModel } from "@/internal/models/event";
import { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface BusinessProviderProps {
  businesses: EventModel[] | null; // Plural: All businesses
  selectedBusiness: EventModel | null; // Singular: Currently selected business
  setBusinesses: (businesses: EventModel[] | null) => void;
  setSelectedBusiness: (business: EventModel | null) => void;
}

// Create the context
const BusinessContext = createContext<BusinessProviderProps | null>(null);

// Custom hook for using the context
export const useBusinessProvider = () => {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error("useBusinessProvider must be used within a BusinessProvider");
  }
  return context;
};

// Provider component
export const BusinessProvider = ({
  children,
  businesses = null, // Plural: Initial list of businesses
}: {
  children: ReactNode;
  businesses?: EventModel[] | null;
}) => {
  // Plural: State for all businesses
  const [businessesState, setBusinesses] = useState<EventModel[] | null>(businesses);

  // Singular: State for the currently selected business
  const [selectedBusiness, setSelectedBusiness] = useState<EventModel | null>(null);

  return (
    <BusinessContext.Provider
      value={{
        businesses: businessesState, // Plural
        selectedBusiness, // Singular
        setBusinesses,
        setSelectedBusiness,
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};
