import { CardModel } from '@/models/internal/card';
import Image from 'next/image';

// Add helper function to calculate lowest price
const getLowestPrice = (item: PackageModel): number | null => {
  if (!item.options) return null;
  
  let lowestPrice = Infinity;
  
  item.options.forEach((option: { buyPrice?: number; rentPrice?: { price: number }[] }) => {
    // Check buy price
    if (option.buyPrice) {
      lowestPrice = Math.min(lowestPrice, option.buyPrice);
    }
    
    // Check rent prices
    if (option.rentPrice) {
      const lowestRentPrice = Math.min(...option.rentPrice.map(rp => rp.price));
      lowestPrice = Math.min(lowestPrice, lowestRentPrice);
    }
  });
  
  return lowestPrice === Infinity ? null : lowestPrice;
};

export default function Card({item, onClick, isSelected}: CardModel) {
  return (
    <div
      className={`shadow-lg hover:shadow-xl 
        transition-all duration-1000 ease-out 
        border ${isSelected ? 'border-blue-500 border-2' : 'border-white/20'}
        text-white
        transform h-[200px]
        overflow-hidden rounded-lg
        relative
        lg:hover:scale-105
        ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
      onClick={onClick}
    >
      {item.images && item.images[0] && (
        <div className="absolute inset-0 w-full h-full opacity-60">
          <Image
            src={item.images[0]}
            alt={`Image for ${item.title}`}
            fill
            className="object-cover"
            priority
            draggable={false}
          />
          <div className="absolute inset-0" />
        </div>
      )}

      <div className="relative h-full flex flex-col p-4 bg-[#151515]/80">
        <div className="flex-shrink-0">
          <h2 className="text-[20px] font-bold uppercase" style={{textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'}}>
            {item.title}
          </h2>
          <p className="text-[12px] line-clamp-2 mt-1">{item.longDescription}</p>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {item.features?.map((feature, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2.5 py-1.5 rounded-full text-[11px] 
                bg-blue-500/30 text-blue-100 
                font-medium shadow-sm backdrop-blur-sm"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-auto flex justify-between items-center ">
          {getLowestPrice(item) ? (
            <span className="font-medium text-white text-[10px] sm:text-[12px] lg:text-[10px]">
              fra {getLowestPrice(item)?.toLocaleString('da-DK')} kr.
            </span>
          ) : (
            <span className="font-medium text-white text-[10px] sm:text-[12px] lg:text-[10px]">
              Pris på forespørgsel
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
