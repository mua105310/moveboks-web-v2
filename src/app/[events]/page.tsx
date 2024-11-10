import { getEvents } from "@/controller/eventController";
import EventPage from "@/template/event/page";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const events = await getEvents();

  return events.map((event) => ({
    events: event.path,
  }));
}

export default async function EventPageWrapper({ params }: { params: { events: string } }) {
  const events = await getEvents(); 
  const event = events.find((event) => event.path === params.events);

  if (!event) {
   return notFound();
  }

  return <EventPage event={event} />;
}
