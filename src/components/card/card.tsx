import { CardModel } from '@/models/internal/card';
import Image from 'next/image';

export default function Cardd({item, onClick}: CardModel) {

  return (
          <div
            className="flex card flex-1 p-5 rounded-md relative hover:shadow-lg transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer"
            onClick={onClick}
          >
            {/* Package Content */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                <p className="text-lg font-medium">
                 {item.title}
                </p>
                <p className="text-sm mt-2">
                  {item.longDescription}
                </p>
              </div>
              {/* Badge or Overlay */}
              <div className="mt-4">
                <span className="inline-block text-xs px-2 py-1 rounded">
                  
                </span>
              </div>
            </div>

            {/* Conditionally Render the Image on the Right */}
            {item.images && item.images[0] && (
              <div className="flex-shrink-0 ml-4">
                <Image
                  src={item.images[0]}
                  alt={`Image for ${item.title}`}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
              </div>
            )}
            <div className='absolute top-0 right-0 p-5 bg-[var(--secondary)] rounded-bl-lg rounded-tr-lg'/>
          </div>
  );
}
