// [businesses]/page.tsx
import { getAllBusinesses } from "@/controller/controller-service";
import BusinessPage from "@/pages/business/buisness-page";
import { notFound } from "next/navigation";

// Define the Params type for dynamic segments
type Params = Promise<{ businesses: string }>;

// Generate dynamic metadata based on the business data
export async function generateMetadata({ params }: { params: Params }) {
  const resolvedParams = await params; // Await the params
  const businesses = await getAllBusinesses();
  const business = businesses.find((business) => business.path === resolvedParams.businesses);

  if (!business) {
    return {
      title: "Business Not Found - Moveboks",
      description: "The business you are looking for could not be found.",
    };
  }

  return {
    title: `${business.title}`,
    description: `${business.short_description}`,
  };
}

// Generate static paths for all businesses
export async function generateStaticParams() {
  const businesses = await getAllBusinesses();
  return businesses.map((business) => ({
    businesses: business.path, // Must match the dynamic segment name `[businesses]`
  }));
}

// Render the business page
export default async function BusinessPageWrapper({ params }: { params: Params }) {
  const resolvedParams = await params; // Await the params
  const businesses = await getAllBusinesses();
  const business = businesses.find((business) => business.path === resolvedParams.businesses);

  if (!business) {
    return notFound();
  }

  return <BusinessPage business={business} />;
}
