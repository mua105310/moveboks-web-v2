"use client";
import { EventModel } from "@/internal/models/event";
import React, {useEffect, useState} from "react";
import { getItemByID } from "@/controller/controller-service";
import { useOrder } from "@/provider/provider-business-order";
import PackagesComponent from "./packages-component";
import ProductsComponent from "./products-component";
import { BusinessProvider } from "@/provider/business-provider";

export default function ContentComponent({ business }: { business: EventModel}) {
    const { order } = useOrder();
    const [packages, setPackages] = useState([]);
    const [selectedBusiness, setSelectedBusiness] = useState<EventModel | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getItemByID(business.ID, "businesses");
      setPackages(data.packages);
      setSelectedBusiness(business);
    };
    fetchData();
  }, [business.ID]);

  return (
    <div className="min-h-[1000px]">
      {/* Show all packages  */}
      <div>
        <h1 className="uppercase text-md pt-10 pl-10 mb-4">Choose a Package</h1>
        <PackagesComponent packages={packages} />
      </div>
      {/* Show all products when a package have been selected */}
      {order?.package && selectedBusiness?.ID === order.package.parent_business_id && (
      <div>
        <h1 className="uppercase text-md pt-10 pl-10 mb-4">Choose a product</h1>
        <ProductsComponent products={order?.package.options!} />
      </div>
    )}
    </div>
  );
}