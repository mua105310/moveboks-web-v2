export default function LoadingPackageCard() {
    return (
        <div className="flex-1 rounded-lg p-4 relative overflow-hidden h-56 border border-white/20 animate-pulse">
            {/* Background shimmer */}
            <div className="absolute inset-0 bg-gray-700/50" />
            
            {/* Title shimmer */}
            <div className="h-7 w-48 bg-gray-600 rounded-lg mb-2" />
            
            {/* Description shimmer */}
            <div className="h-4 w-full bg-gray-600 rounded-lg mb-4" />
            
            {/* Features shimmer */}
            <div className="flex flex-wrap gap-2">
                <div className="h-8 w-20 bg-gray-600 rounded-lg" />
                <div className="h-8 w-24 bg-gray-600 rounded-lg" />
                <div className="h-8 w-16 bg-gray-600 rounded-lg" />
            </div>
            
            {/* Price shimmer */}
            <div className="pt-4 w-full absolute bottom-4 left-4">
                <div className="h-4 w-24 bg-gray-600 rounded-lg" />
            </div>
        </div>
    );
}
