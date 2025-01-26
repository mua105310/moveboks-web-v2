
"use client"

//import function fetchBusinessesFromApi  from "./controller/business.ts";
import { fetchAllBusinesses } from '@/api/handlers/business';

import React, { useEffect, useState } from "react";

export default async function Home() {
  const [businesses, setBusinesses] = useState([]);
  useEffect(() => {
    const fetchBusinesses = async () => {
      const businesses = await fetchAllBusinesses();
      console.log(businesses);
      setBusinesses(businesses);
    };
    fetchBusinesses();
  }, []);


  return (
    <div>
      <div></div>
    </div>
  );
}
