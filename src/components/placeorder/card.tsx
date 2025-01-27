"use client";

import { useState } from "react";
import { ProductionSelection } from "@/internal/models/bookingcreation-model";

export default function Card({ product }: { product: ProductionSelection }) {
  if (!product) return null;

  const { product: productDetails, constraint } = product;
  const [quantity, setQuantity] = useState(product.quantity);

  const handleIncrement = () => {
    if (!constraint?.available_quantity || quantity < constraint.available_quantity) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="flex items-center gap-4 md:gap-6 border-b border-white/20 p-4">
      {/* Product Image */}
      <div className="flex-none w-24 h-24 md:w-32 md:h-32 relative overflow-hidden rounded-md bg-gray-600">
        {productDetails.image_url ? (
          <img
            src={productDetails.image_url}
            alt={productDetails.title}
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm">
            No Image
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-start gap-1.5 flex-grow">
        <h2 className="text-lg font-bold text-gray-100">{productDetails.title}</h2>
        <p className="text-sm text-gray-400">{productDetails.shortDescription}</p>
        <div className="mt-2 text-sm text-gray-300">
          {constraint?.type === "buy" && constraint.buy_price
            ? `Buy Price: $${constraint.buy_price.toFixed(2)}`
            : constraint?.type === "rent" && constraint.rent_prices?.length
            ? `Rent: $${constraint.rent_prices[0].price.toFixed(2)} for ${constraint.rent_prices[0].hours} hours`
            : "Price not available"}
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="shrink-0 text-sm">
        <div className="grid gap-3">
          <div className="flex items-center relative">
            <input
              type="number"
              value={quantity}
              min={0}
              max={constraint?.available_quantity || 100}
              readOnly
              className="w-20 h-10 bg-gray-700 text-gray-200 border border-gray-600 rounded-md text-center"
            />
            <div className="absolute right-0 flex flex-col items-center justify-center h-full">
              <button
                onClick={handleIncrement}
                className="w-8 h-5 text-gray-400 hover:text-gray-200 hover:bg-gray-600 rounded flex items-center justify-center"
              >
                ▲
              </button>
              <button
                onClick={handleDecrement}
                className="w-8 h-5 text-gray-400 hover:text-gray-200 hover:bg-gray-600 rounded flex items-center justify-center"
              >
                ▼
              </button>
            </div>
          </div>
          <button className="text-xs text-gray-400 hover:text-gray-200 transition-colors">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
