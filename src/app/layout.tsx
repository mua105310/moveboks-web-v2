// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { BusinessProvider } from "@/provider/business-provider"; 
import { OrderProvider } from "@/provider/provider-business-order";
import Footer from "@/components/footer/footer";
import { getAllBusinesses } from "@/controller/controller-service";
import Nav from "@/components/nav/nav";
import { DialogProvider } from "@/provider/dialog-provider";

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
        <BusinessProvider>
          <OrderProvider>
            <DialogProvider>
              {children}
              <Footer events={businesses} />
              <Nav events={businesses} />
            </DialogProvider>
          </OrderProvider>
        </BusinessProvider>
      </body>
    </html>
  );
}
