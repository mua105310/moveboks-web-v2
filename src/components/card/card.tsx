import { CardModel } from '@/models/card';
import { EventModel } from '@/models/event';
import { PackageModel } from '@/models/package';
import Image from 'next/image';

interface CardProps {
  data: CardModel[];
  category: string;
  onClick: () => void;
}

export default function Card({ data, category, onClick }: CardProps) {

  return (
    <div className="p-6 rounded-lg">
      {/* Category */}
      <div className="mb-6">
        <p className="uppercase text-xl font-semibold">
          {category}
        </p>
      </div>

      {/* Packages */}
      <div 
      className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      onClick={onClick}
      >

        {data.map((item: CardModel) => (
          <div
            key={item.id}
            className="flex card flex-1 p-5 rounded-md relative hover:shadow-lg transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer"
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
            {item.images[0] && (
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
        ))}
      </div>
    </div>
  );
}
