import { EventModel } from '@/models/event';
import Image from 'next/image';

export default function Card({ data }: { data: string[] }) {
  return (
    <div className="p-6 rounded-lg">
      {/* Category */}
      <div className="mb-6">
        <p className="uppercase text-xl font-semibold">
          Pakker
        </p>
      </div>

      {/* Packages */}
      <div className="flex flex-wrap gap-6">
        {data.map((item) => (
          <div
            key={item}
            className="flex card flex-1 p-5 rounded-md relative hover:shadow-lg transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer"
          >
            {/* Package Content */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                <p className="text-lg font-medium">{item}</p>
                <p className="text-sm mt-2">
                  Short description of the package goes here.
                </p>
              </div>
              {/* Badge or Overlay */}
              <div className="mt-4">
                <span className="inline-block text-xs px-2 py-1 rounded">
                  Price
                </span>
              </div>
            </div>

            {/* Image on the Right */}
            <div className="flex-shrink-0 ml-4">
              <Image
                src="https://imagedelivery.net/cITCNbiqfZeimGDoNY0eMg/1b74b040-2699-41db-8391-77fb18e65700/public"
                alt={`Image for ${item}`}
                width={80}
                height={80}
                className="rounded-md object-cover"
              />
            </div>
            <div className='absolute top-0 right-0 p-5 bg-[var(--secondary)] rounded-bl-lg rounded-tr-lg'/>
          </div>
        ))}
      </div>
    </div>
  );
}
