// [businesses]/page.tsx
import { getAllEvents } from "@/controller/controller-service";
import EventPage from "@/pages/event/page";
import { notFound } from "next/navigation";

// Define the Params type for dynamic segments
type Params = Promise<{ events: string }>;

// Generate dynamic metadata based on the events data
export async function generateMetadata({ params }: { params: Params }) {
  const resolvedParams = await params; // Await the params
  const events = await getAllEvents();
  const event = events.find((business) => business.path === resolvedParams.events);

  if (!event) {
    return {
      title: "events Not Found - Moveboks",
      description: "The eventsyou are looking for could not be found.",
    };
  }

  return {
    title: `${event.title}`,
    description: `${event.short_description}`,
  };
}

// Generate static paths for all events
export async function generateStaticParams() {
  const events = await getAllEvents();
  return events.map((event) => ({
    events:event.path, // Must match the dynamic segment name `[events]`
  }));
}

// Render the events page
export default async function EventPageWrapper({ params }: { params: Params }) {
  const resolvedParams = await params; // Await the params
  const events = await getAllEvents();
  const event = events.find((event) => event.path === resolvedParams.events);

  if (!event) {
    return notFound();
  }

  return <EventPage event={event} />;
}
