"use client";
import { PackageModel } from "@/internal/models/package";
import { useOrder } from "@/provider/provider-business-order";
import { useEffect } from "react";
import { getMinimumPrice } from "@/utils/pricing/price.calculating";

interface PackageProps {
  package: PackageModel;
  onClick?: (pkg: PackageModel) => void; // Optional click handler
}

export default function PackageCardComponent({ package: pkg, onClick }: PackageProps) {
  if (!pkg) {
    return null;
  }
  const { order } = useOrder();

  useEffect(() => {
    if (order?.package?.ID === pkg.ID) {
      console.log("Package selected", pkg);
    }
    console.log("options", pkg.options);
  }, [order, pkg]);

  // 1) Get the minimum for each option, if any
  const optionMinimums = pkg.options?.map(option => getMinimumPrice(option)) ?? [];

  // 2) Pick the overall lowest price
  const overallMinimum = optionMinimums.length > 0
    ? Math.min(...optionMinimums)
    : 0; // fallback to 0 if no options

  return (
    <div
      className={`relative rounded-lg h-48 overflow-hidden cursor-pointer flex-1 hover:opacity-70 transition-all duration-500 ease-in-out  ${
        order?.package?.ID === pkg.ID ? "border-2 border-blue-500" : "border-2 border-white/30"
      }`}
      onClick={() => onClick?.(pkg)}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${pkg.image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 p-4 text-white h-full flex flex-col justify-between">
        {/* Title in the top-left corner */}
        <h2 className="text-lg font-bold">{pkg.title}</h2>

        {/* Short description below the title */}
        <p className="text-sm mt-2 flex-grow">{pkg.short_description}</p>
        
        {/* Display "From price" in the bottom-right corner */}
        <span className="text-sm font-semibold self-end">
          From {overallMinimum},- DKK
        </span>
      </div>
    </div>
  );
}
