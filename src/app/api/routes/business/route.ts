import { NextResponse } from "next/server"
import { fetchAllBusinesses } from "@/api/handler/business/business"

export async function GET() {
    const data = await fetchAllBusinesses();
    return NextResponse.json(data);
}

