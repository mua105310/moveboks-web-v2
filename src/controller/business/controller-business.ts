import { EventModel } from "@/internal/models/event";
import { config } from "../../config/config";

export async function getAllBusinesses(): Promise<EventModel> {
  const req = await fetch(config.baseUrl + "/businesses");
  console.log(req);
  return req.json();
}   