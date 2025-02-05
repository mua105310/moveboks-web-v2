import { NextResponse } from "next/server";
import { config } from "@/config/config";

//** Get all packages **//
export async function GET() {
    try {
        const response = await fetch(`${config.API_ENDPOINT}/packages`);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch packages: ${response.statusText}`);
        }

        const data = await response.json();

        return NextResponse.json(data.data);
    } catch (error) {
        console.error("Error packages:", error);
        return NextResponse.json({ error: "Failed to fetch packages" }, { status: 500 });
    }
}