import { config } from "@/config/config";

export async function fetchAllBusinesses() {
  const response = await fetch(config.baseUrl + "/businesses");
  const data = await response.json();
  return data;
}