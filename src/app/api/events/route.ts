import { NextResponse } from "next/server";
import { config } from "@/config/config";

//** Get all events **//
export async function GET() {
    try {
        const response = await fetch(`${config.API_ENDPOINT}/businesses`);
        if (!response.ok) {
            throw new Error(`Failed to fetch events: ${response.statusText}`);
        }

        const data = await response.json();
        return NextResponse.json(data.data);
    } catch (error) {
        console.error("Error events:", error);
        return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
    }
}
