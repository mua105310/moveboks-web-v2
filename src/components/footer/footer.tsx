import React from 'react';
import SocialMediaTag from "../social/social-media-tag";
import { EventModel } from "@/models/event";

interface FooterProps {
  events: EventModel[];
}

export default function Footer({ events }: FooterProps) {
  // Define the menu structure with dynamic subItems for 'Booking'
  const menu = [
    { title: 'Hjem', path: '/' },
    { title: 'Blog', path: '/blog' },
    {
      title: 'Booking',
      subItems: events.map((event) => ({
        title: event.title,
        path: event.path,
      })),
    },
    { title: 'Om os', path: '/om-os' },
    { title: 'Galleri', path: '/galleri' },
  ];

  return (
    <div className="w-full h-auto p-10 min-[2000px]:pl-[300px] min-[2000px]:pr-[300px]">
      <div className="w-full h-auto flex text-sm max-[1000px]:flex-col">
        {/* Links Section */}
        <div className="w-1/2 max-[1000px]:w-full flex flex-wrap gap-1">
          {menu.map((item) =>
            item.subItems ? (
              <div key={item.title} className="group mr-5">
                {/* Main Booking Link */}
                <div
                  className="relative inline-block transition-colors duration-300 group"
                >
                  {item.title}
                  <div
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-[3px] bg-[var(--secondary)] transition-all duration-700 ease-in-out group-hover:w-full"
                  />
                </div>
                {/* Sub-items Container */}
                  <div className="opacity-0 overflow-hidden transition-all duration-500 group-hover:opacity-100">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.path}
                          href={subItem.path}
                          className="block mt-1 hover:text-[var(--secondary)] transition-colors duration-300"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
            ) : (
              <div>
                <a
                href="#" 
                className="relative mr-5 inline-block transition-colors duration-300 group"
                >
                {item.title}
                <div
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-[3px] bg-[var(--secondary)] transition-all duration-700 ease-in-out group-hover:w-full"
                />
                </a>
              </div>
            )
          )}
        </div>

        {/* Divider */}
        <hr className="max-[1000px]:block opacity-20 mt-5 mb-5" />

        {/* Contact and Social Media Section */}
        <div className="w-1/2 max-[1000px]:w-full flex justify-between items-center">
          <div className="flex flex-col space-y-1 text-[10px]">
            <a href="tel:+4520557865">+45 20 55 78 65</a>
            <a href="mailto:Kontakt@moveboks.dk">Kontakt@moveboks.dk</a>
            <a href="#">CVR: 41417749</a>
          </div>
          <div>
            <SocialMediaTag />
          </div>
        </div>
      </div>

      {/* Additional Divider */}
      <hr className="opacity-20 mt-5 mb-5" />

      {/* Bottom Section */}
      <div className="max-[600px]:flex-col flex justify-between text-xs">
        <div className="flex">
          <p className="opacity-50">Executed by</p>
          <a
            className="ml-1 hover:text-[var(--secondary)] transition-colors duration-300"
            href="https://datacvr.virk.dk/enhed/virksomhed/41417749?fritekst=moveboks&sideIndex=0&size=10"
          >
            Moveboks
          </a>
        </div>
        <div className="flex flex-wrap max-[600px]:mt-5 gap-2">
          <a href="/handelsbetingelser" className="hover:text-[var(--secondary)] transition-colors duration-300">
            Handelsbetingelser
          </a>
          <div className="h-full w-[1px] bg-white ml-2 mr-2 opacity-15" />
          <a href="/persondatapolitik" className="hover:text-[var(--secondary)] transition-colors duration-300">
            Persondatapolitik
          </a>
          <div className="h-full w-[1px] bg-white ml-2 mr-2 opacity-15" />
          <a href="/kontakt" className="hover:text-[var(--secondary)] transition-colors duration-300">
            Kontakt
          </a>
        </div>
      </div>
    </div>
  );
}
