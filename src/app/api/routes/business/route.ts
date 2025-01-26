import { NextResponse } from "next/server";
import { fetchAllBusinesses, fetchBusinessById } from "@/api/handler/business/business";

/**
 * Fetch all businesses.
 * Handles requests to /api/routes/business
 */
async function getAllBusinessesHandler() {
  try {
    const businesses = await fetchAllBusinesses();
    return NextResponse.json(businesses);
  } catch (error: any) {
    console.error("Error fetching all businesses:", error.message);
    return NextResponse.json(
      { error: error.message || "Failed to fetch businesses." },
      { status: 500 }
    );
  }
}

/**
 * Fetch a business by ID.
 * Handles requests to /api/routes/business?id={id}
 */
async function getBusinessByIdHandler(id: string) {
  try {
    const business = await fetchBusinessById(id);
    return NextResponse.json(business);
  } catch (error: any) {
    console.error(`Error fetching business with ID ${id}:`, error.message);
    return NextResponse.json(
      { error: error.message || `Failed to fetch business with ID ${id}.` },
      { status: 500 }
    );
  }
}

/**
 * Handle incoming GET requests.
 * Determines whether to fetch all businesses or a specific one.
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    return getBusinessByIdHandler(id);
  } else {
    return getAllBusinessesHandler();
  }
}
