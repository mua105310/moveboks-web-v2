// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { getAllBusinesses } from "@/controller/business/controller-business";
import { BusinessProvider } from "@/provider/business-provider"; 
import { OrderProvider } from "@/provider/provider-business-order";

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
  // Fetch all businesses
  const businesses = await getAllBusinesses();
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Provide the businesses to the context */}
        <BusinessProvider businesses={businesses}>
          <OrderProvider>
            {children}
          </OrderProvider>
        </BusinessProvider>
      </body>
    </html>
  );
}
