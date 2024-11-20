export default function LoadingProductCard() {
    return (
        <div className="border border-white/20 flex-1 h-[400px] rounded-lg flex flex-col overflow-hidden">
            <div className="p-4 flex-1 flex flex-col">
                {/* Title skeleton - matched text-xl size */}
                <div className="h-8 w-3/4 bg-white/10 rounded-md animate-pulse mb-2" />
                
                {/* Description skeleton - matched text-xs/sm size */}
                <div className="space-y-2 mb-4">
                    <div className="h-4 w-full bg-white/10 rounded-md animate-pulse" />
                    <div className="h-4 w-4/5 bg-white/10 rounded-md animate-pulse" />
                </div>

                {/* Image skeleton - exact same size as Image component */}
                <div className="flex-1 flex justify-center items-center p-5">
                    <div className="w-[110px] h-[110px] bg-white/10 animate-pulse" />
                </div>
            </div>

            {/* Footer skeleton - matched exact button and text sizes */}
            <div className="w-full bg-[#1e1e1e] p-4 flex justify-between items-center h-20">
                <div className="h-4 w-16 bg-white/10 rounded-md animate-pulse" />
                <div className="h-9 w-[72px] bg-white/10 rounded-md animate-pulse" />
            </div>
        </div>
    );
}
