//fetch busniess from http://127.0.0.1:3000/v1/businesses

export async function fetchAllBusinesses() {
  const response = await fetch("http://127.0.0.1:3000/v1/businesses");
  const data = await response.json();
  return data;
}