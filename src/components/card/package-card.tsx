import { PackageModel } from "@/internal/models/package";
import Image from "next/image";
import { getMinimumPrice } from "@/utils/pricing/price.calculating";

interface PackageCardProps {
  item: PackageModel;
}

export default function PackageCard({ item }: PackageCardProps) {
  if (!item) return null;

  const minPrice = item.options
    ? Math.min(...item.options.map((option) => getMinimumPrice(option)))
    : null;

  return (
    <article className="relative flex-1 rounded-lg border border-white/20 p-20 sm:p-28 overflow-hidden cursor-pointer">
      {item.image_url && (
        <Image
          src={item.image_url}
          alt={`Image of ${item.title}`}
          fill
          className="object-cover"
          loading="lazy"
        />
      )}

      <div className="absolute inset-0 bg-black/70 p-2 sm:p-3" />

      <div className="absolute inset-0 p-2 sm:p-3 flex flex-row justify-between">
        <div>
          <h3 className="text-lg sm:text-2xl font-semibold">{item.title}</h3>
          <p className="text-xs sm:text-sm opacity-80">{item.short_description}</p>
        </div>

        <button
          className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-lg sm:text-xl rounded-lg hover:bg-blue-600 transition self-start"
          aria-label={`Add ${item.title} to cart`}
        >
          +
        </button>
      </div>

      {minPrice !== null && (
        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 text-sm sm:text-base font-semibold text-white bg-gray-800 px-3 py-1 rounded-md">
          fra {minPrice},-
        </div>
      )}
    </article>
  );
}
