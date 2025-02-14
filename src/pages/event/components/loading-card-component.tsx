export default function LoadingCard() {
  return (
    <article className="relative flex-1 rounded-lg border border-white/20 p-20 sm:p-28 overflow-hidden">
      {/* Image Skeleton */}
      <div className="absolute inset-0 bg-gray-700 animate-pulse" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 p-2 sm:p-3" />

      {/* Content Skeleton */}
      <div className="absolute inset-0 p-2 sm:p-3 flex flex-row justify-between">
        <div>
          <div className="w-32 sm:w-48 h-6 sm:h-8 bg-gray-600 rounded animate-pulse" />
          <div className="w-48 sm:w-64 h-4 sm:h-6 bg-gray-700 rounded mt-2 animate-pulse" />
        </div>

        {/* Button Skeleton */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 rounded-lg animate-pulse" />
      </div>

      {/* Price Skeleton */}
      <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-20 h-6 bg-gray-800 rounded-md animate-pulse" />
    </article>
  );
}
