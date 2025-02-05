// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/footer";
import { getAllEvents } from "@/controller/controller-service";
import Nav from "@/components/nav/nav";

export const metadata: Metadata = {
  title: "Moveboks",
  description: "Lej en Soundboks til dit næste arrangement gennem Moveboks app – perfekt til festivaler og events.",
  keywords: "Leje Soundboks, lej en Soundboks, lydudlejning, bryllup, konfirmation, DJ, festival, Roskilde Festival, Smukfest, events, julefrokost, nytårsfest, Danmark",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const events = await getAllEvents();
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Provide the businesses to the context */}
            {children}
            <Nav events={events} />
            <Footer events={events} />
      </body>
    </html>
  );
}
