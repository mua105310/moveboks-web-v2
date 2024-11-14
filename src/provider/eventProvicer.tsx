import { createContext, useContext, Context } from "react";

const EventContext = createContext(null);

export const useEventContext = () => {
  return useContext(EventContext);
};

export default EventContext;
