import { CardModel } from '@/models/internal/card';
import Image from 'next/image';

export default function Card({item, onClick}: CardModel) {
  return (
    <div
      className="shadow-lg hover:shadow-xl 
        transition-all duration-1000 ease-out 
        border border-white/20
        text-white
        transform h-[200px]
        overflow-hidden rounded-lg"
      onClick={onClick}
    >
      <div className="flex h-full card">
        <div className="flex flex-col flex-grow p-0">
          <div className="flex-shrink-0 p-4">
            <h2 className="text-[20px] font-bold" style={{textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'}}>
              {item.title}
            </h2>
            <p className="text-[12px] line-clamp-2 mt-1">{item.longDescription}</p>
          </div>
          
          <div className="mt-auto flex justify-between items-center bg-[#151515] p-4">
            <span className="font-medium text-white text-[10px] sm:text-[12px] lg:text-[10px]">fra 3099 kr.</span>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-[12px]">
              Tilføj til
            </button>
          </div>
        </div>

        {item.images && item.images[0] && (
          <div className="relative w-32 h-full flex-shrink-0">
            <Image
              src={item.images[0]}
              alt={`Image for ${item.title}`}
              fill
              className="object-contain p-2 hover:scale-105 transition-transform"
              priority
              draggable={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}
