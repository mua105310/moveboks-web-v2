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
    <div className="w-full h-auto pl-10 pr-10 pt-5 pb-5">
      <div className="w-full h-auto flex text-xs lg:text-sm items-center flex-col md:flex-row md:gap-10">
        {/* Links Section */}
        <div className="flex flex-wrap md:flex-1 items-center w-full gap-4 md:gap-4">
          {menu.map((item) =>
            item && (
              <React.Fragment key={item.title}>
                {!item.subItems ? (
                  <a
                    href={item.path}
                    className="relative inline-block transition-colors duration-300 group"
                  >
                    {item.title}
                    <div
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-[3px] bg-[var(--secondary)] transition-all duration-700 ease-in-out group-hover:w-full"
                    />
                  </a>
                ) : (
                  item.subItems.map((subItem) => (
                    <a
                      key={subItem.title}
                      href={subItem.path}
                      className="relative inline-block transition-colors duration-300 group"
                    >
                      {subItem.title}
                      <div
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-[3px] bg-[var(--secondary)] transition-all duration-700 ease-in-out group-hover:w-full"
                      />
                    </a>
                  ))
                )}
              </React.Fragment>
            )
          )}
        </div>

        {/* Divider */}
        <div className='block md:hidden w-full bg-white h-[1px] opacity-20 mt-5 mb-5'/>

        {/* Contact and Social Media Section */}
        <div className="flex justify-between items-center w-full md:flex-1">
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

      {/* Divider */}
      <div className='w-full bg-white h-[1px] opacity-20 mt-5 mb-5'/>

      {/* Bottom Section */}
      <div className="max-[600px]:flex-col flex justify-between text-xs ">
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
