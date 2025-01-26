import React, { useEffect, useState } from "react";
import MainCarousel from "@/components/carousel/main-carousel";
import { getAllBusinesses } from "@/controller/controller-service";

const Home = async () => {
  const businesses = await getAllBusinesses();
  return (
    <MainCarousel businesses={businesses} />
  );
};

export default Home;
