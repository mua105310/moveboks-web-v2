// [events]/page.tsx
import { getEvents } from "@/controller/eventController";
import EventPage from "@/template/event/page";
import { notFound } from "next/navigation";
import { EventProvider } from "@/provider/eventProvider";
import { OrderProvider } from "@/provider/orderProvider";

// Generate dynamic metadata based on the event data
export async function generateMetadata({ params }: { params: { events: string } }) {
  const events = await getEvents();
  const event = events.find((event) => event.path === params.events);

  if (!event) {
    return {
      title: "Event Not Found - Moveboks",
      description: "The event you are looking for could not be found.",
    };
  }

  return {
    title: `${event.meta.title}`,
    description: `${event.meta.description}`,
    keywords:`${event.meta.keywords}`,
  };
}

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

  return (
    <OrderProvider>
      <EventProvider>
        <EventPage event={event} />
      </EventProvider>
    </OrderProvider>
  );
}
