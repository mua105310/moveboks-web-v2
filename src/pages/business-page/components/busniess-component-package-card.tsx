"use client";
import { PackageModel } from "@/internal/models/package";
import { useOrder } from "@/provider/provider-business-order";
import { use } from "react";
import { useEffect } from "react";

interface PackageProps {
  package: PackageModel;
  onClick?: (pkg: PackageModel) => void; // Optional click handler
}

export default function BusinessComponentPackageCard({ package: pkg, onClick }: PackageProps) {
  if (!pkg) {
    return null;
  }
  const { order } = useOrder();

  useEffect(() => {
    if (order?.package?.ID == pkg.ID) {
      console.log("Package selected", pkg);
    }
  } , [order]);

  return (
    <div
    className={`relative rounded-lg h-48 overflow-hidden cursor-pointer flex-1 hover:opacity-70 transition-all duration-500 ease-in-out  ${
      order?.package.ID === pkg.ID ? "border-2 border-blue-500 " : "border-2 border-white/30"
    }`}
      onClick={() => onClick?.(pkg)} // Call onClick if provided
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

        {/* Price in the bottom-right corner */}
        <span className="text-sm font-semibold self-end">{"Price not available"}</span>
      </div>
    </div>
  );
}
