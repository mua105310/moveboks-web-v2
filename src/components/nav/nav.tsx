"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '@/app/assets/logo.png';
import Link from 'next/link';
import { HiMenuAlt4 } from 'react-icons/hi';
import { EventModel } from "@/models/event";
import SocialMediaTag from '@/components/social/social-media-tag';

interface NavProps {
    events: EventModel[];
}

export default function Nav({ events }: NavProps) {
  const [open, setOpen] = useState(false);

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

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <div className={`absolute top-0 w-full h-svh overflow-hidden`}>
      <div className="p-10 relative z-50">
        <div className="flex flex-row justify-between items-center">
          {/* Logo start */}
          <div>
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <Image src={Logo} alt="logo" width={130} priority={true} />
                <div className="hidden md:block ml-4 h-7 border-r border-white opacity-30" />
                <div
                  className="ml-4 hidden md:block leading-4 tracking-[1.5px]"
                  style={{ fontSize: '9px' }}
                >
                  SKAB DIT
                  <br />
                  <strong>MOMENT</strong>
                </div>
              </div>
            </Link>
          </div>
          {/* Logo end */}

          {/* Menu Icon */}
          <div onClick={toggleOpen} className="cursor-pointer">
            <HiMenuAlt4
              className={`text-white transition-all duration-500 text-3xl ${
                open ? 'rotate-90' : ''
              } hover:text-[var(--secondary)]`}
            />
          </div>
        </div>
      </div>

      {/* Nav menu */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-[var(--background)] transition-transform duration-700 ease-in-out p-10 ${
          open ? 'translate-y-0' : '-translate-y-full'
        } z-20`}
      >
        <div className="h-svh flex justify-center items-center">
          <div className="w-auto text-center text-[34px] sm:text-[40px] min-[2000px]:text-[55px] tracking-widest">
            <div className={`space-y-4  ${open ? 'transition-all duration-1000 ease-in-out opacity-100' : 'transition-all duration-300 ease-in-out opacity-0'}`}>
              {menu.map((item, index) => (
                <div key={index} className="uppercase">
                  {item.subItems ? (
                    <div className="group">
                      {/* Title */}
                      <div className="relative inline-block cursor-pointer">
                        <div>{item.title}</div>
                        {/* Line in the middle */}
                        <div
                          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-[4px] bg-[var(--secondary)] transition-all duration-700 ease-in-out group-hover:w-full"
                        />
                      </div>
                      {/* Subitems below the title */}
                      <div
                        className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-32 overflow-y-scroll"
                      >
                        <div className="flex flex-col items-center space-y-2 mt-2">
                          {item.subItems.map((subItem, subIndex) => (
                            <div
                              key={subIndex}
                              className="relative inline-block group text-xs tracking-wide"
                            >
                              <Link className='hover:text-[var(--secondary)] transition-all duration-500 ease-in-out' href={subItem.path}>{subItem.title}</Link>
                              {/* Line in the middle for subitems */}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative inline-block group">
                      <Link href={item.path}>{item.title}</Link>
                      {/* Line in the middle */}
                      <div
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-[4px] bg-[var(--secondary)] transition-all duration-700 ease-in-out group-hover:w-full"
                      />
                    </div>
                  )}
                </div>
              ))}
                <div>
                    <div className='absolute bottom-0 left-0 w-full flex flex-col justify-center p-10 text-sm lg:text-md lg:flex lg:flex-row lg:justify-between'>
                        <SocialMediaTag />
                        <div className='flex items-center justify-center lg:justify-end'>
                            <div className='opacity-40 text-sm mr-1'>Powered by </div>
                            <Link href="https://datacvr.virk.dk/enhed/virksomhed/41417749?fritekst=moveboks&sideIndex=0&size=10">Moveboks ApS</Link>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
