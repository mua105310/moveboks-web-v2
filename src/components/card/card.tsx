import { CardModel } from '@/models/internal/card';
import Image from 'next/image';

export default function Card({item, onClick}: CardModel) {
  return (
    <div
      className="shadow-lg hover:shadow-xl 
        transition-all duration-1000 ease-out 
        border border-white/20
        text-white
        transform min-h-[100px]
        overflow-hidden rounded-lg"
      onClick={onClick}
    >
      <div className="flex flex-col h-full bg-[#151515]">
        <div className="px-4 py-3 flex-shrink-0">
          <h2 className="text-[24px] font-bold" style={{textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'}}>
            {item.title}
          </h2>
          <p className="text-[12px]">{item.longDescription}</p>
        </div>
        
        {/* Optional Image Section */}
        {item.images && item.images[0] && (
          <div className="relative w-40 h-40 mx-auto">
            <Image
              src={item.images[0]}
              alt={`Image for ${item.title}`}
              fill
              className="object-contain rounded-md p-2 hover:scale-105 transition-transform"
              priority
              draggable={false}
            />
          </div>
        )}

        <div className="w-full p-4 flex justify-between items-center bg-[#1E1E1E] mt-auto">
          <span className="font-medium text-white text-[10px] sm:text-[12px] lg:text-[10px]">fra 3099 kr.</span>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-[12px]">
            Tilføj til
          </button>
        </div>
      </div>
    </div>
  );
}
