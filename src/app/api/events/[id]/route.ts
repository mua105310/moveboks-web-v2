import { NextResponse } from "next/server";
import { config } from "@/config/config";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        if (!id) {
            return NextResponse.json({ error: "Event ID is required" }, { status: 400 });
        }

        const response = await fetch(`${config.API_ENDPOINT}/businesses/${id}`);

        if (!response.ok) {
            return NextResponse.json({ error: "Event not found" }, { status: 404 });
        }

        const data = await response.json();
        return NextResponse.json(data.data);
    } catch (error) {
        console.error("Error fetching event:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
