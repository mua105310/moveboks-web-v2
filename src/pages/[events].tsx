import { events } from '@/data/events';
import { EventModel } from '@/models/event';
import EventTemplate from '../template/event/page';
import React from 'react';
import Nav from '@/components/nav/nav';
import Footer from '@/components/footer/footer';

export async function getStaticPaths() {
  const paths = events.map((event) => ({
    params: { events: event.path },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { events: string } }) {
  const event = events.find((event) => event.path === params.events);

  if (!event) {
    return { notFound: true };
  }

  const { dateInfo, ...serializedEvent } = event;

  return { props: { event: serializedEvent } };
}

export default function EventPage({ event }: { event: EventModel }) {
  return (
    <div>
      <Nav events={events} />
      <EventTemplate event={event} />
      {/* <Footer events={events} /> */}
    </div>  
  );
}
