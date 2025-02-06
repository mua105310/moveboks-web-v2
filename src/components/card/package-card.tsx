import { PackageModel } from "@/internal/models/package";
import Image from "next/image";
import { getMinimumPrice } from "@/utils/pricing/price.calculating";

export interface PackageCardProps {
  pack?: PackageModel;
}

export default function PackageCard({ pack }: PackageCardProps) {
  if (!pack) return null;

  // Get minimum price across all product constraints
  const minPrice = pack.options
    ? Math.min(...pack.options.map((option) => getMinimumPrice(option)))
    : null;

  return (
    <article className="relative flex-1 rounded-lg border border-white/20 p-20 sm:p-32 overflow-hidden cursor-pointer">
      {/* Optimized Image */}
      {pack.image_url && (
        <Image
          src={pack.image_url}
          alt={`Image of ${pack.title}`}
          fill
          className="object-cover"
          loading="lazy"
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 p-2 sm:p-3" />

      {/* Content */}
      <div className="absolute inset-0 p-2 sm:p-3 flex flex-row justify-between">
        {/* Left: Title & Description */}
        <div>
          <h3 className="text-lg sm:text-2xl font-semibold">{pack.title}</h3>
          <p className="text-xs sm:text-sm opacity-80">{pack.short_description}</p>
        </div>

        {/* Right: Button */}
        <button
          className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-lg sm:text-xl rounded-lg hover:bg-blue-600 transition self-start"
          aria-label={`Add ${pack.title} to cart`}
        >
          +
        </button>
      </div>

      {/* Bottom Right: Price */}
      {minPrice !== null && (
        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 text-sm sm:text-base font-semibold text-white bg-gray-800 px-3 py-1 rounded-md">
          fra {minPrice},-
        </div>
      )}
    </article>
  );
}
