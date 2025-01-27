"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '@/app/assets/logo.png';
import Link from 'next/link';
import { HiMenuAlt4 } from 'react-icons/hi';
import { EventModel } from "@/internal/models/event";
import SocialMediaTag from '@/components/socialmedia/socialmedia';
import { baseConfig } from '@/config/base-config';

interface NavProps {
    events: EventModel[];
}

export default function Nav({ events }: NavProps) {
  const [open, setOpen] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  const toggleOpen = () => {
    const html = document.documentElement;
    setOpen(!open);

    if (!open) {
      html.classList.add("no-doc-scroll");
    } else {
      html.classList.remove("no-doc-scroll");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      // Background color change after 300px
      setBgColor(currentScrollY > 300);
  
      // Visibility logic: Do not hide the navbar for the first 100px
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // Scrolling down
        } else {
          setIsVisible(true); // Scrolling up
        }
      } else {
        setIsVisible(true); // Always visible within the first 100px
      }
  
      setLastScrollY(currentScrollY);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [open, lastScrollY]);
  


  return (
    <div 
      className={`fixed top-0 w-full ${open ? 'h-svh' : 'h-auto'} transition-transform duration-300 ${
        isVisible || open ? 'translate-y-0' : '-translate-y-full'
      }`} 
      style={{ zIndex: 100 }}
    >
    <div className={`absolute top-0 bg-[var(--background)] transition-all duration-300 ease-in-out `} />
      <div 
        className={`p-5 lg:p-10 relative z-50 transition-all duration-300 ease-in-out border-b ${
          bgColor && !open
            ? 'bg-[var(--background)] border-white/20' 
            : 'bg-[var(--background)]/0 border-transparent'
        }`}
      >
        <div 
        className={`flex flex-row justify-between items-center `}>
          {/* Logo start */}
          <div>
            <Link 
            href="/"
            aria-label={'Home'}
            >
              <div className="flex items-center cursor-pointer">
                {/* <Image src={Logo} alt="logo" width={130} priority={true} /> */}
                <h1 className='text-3xl font-bold'>RentHub</h1>
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
              } hover:text-[#1c4eff]`}
            />
          </div>
        </div>
      </div>

      {/* Nav menu */}
      <div
        className={`absolute top-0 left-0 w-full h-svh bg-[var(--background)] transition-all duration-700 ease-in-out ${
          open ? 'translate-y-0 visible' : '-translate-y-full invisible'
        } z-20`}
      >
        <div className={`h-svh flex flex-col justify-between ${
                open ? 'opacity-100 translate-y-0 transition-all ease-in-out duration-700 ' : 'opacity-0 -translate-y-10 transition-all ease-in-out duration-500'
              }`}>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-auto text-center text-[34px] sm:text-[40px] min-[2000px]:text-[55px] tracking-widest">
              <div className={`space-y-4 transition-all duration-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                {menu.map((item, index) => (
                  <div key={index} className="uppercase">
                    {item.subItems ? (
                      <div className="group">
                        {/* Title */}
                        <div className="relative inline-block cursor-pointer">
                          <div>{item.title}</div>
                          {/* Line in the middle */}
                          <div
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-[4px] bg-[#1c4eff] transition-all duration-700 ease-in-out group-hover:w-full"
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
                              <Link 
                                onClick={toggleOpen}
                                className='hover:text-[#1c4eff] transition-all duration-500 ease-in-out' 
                                href={subItem.path}
                                aria-label={subItem.title} // Adds an accessible name attribute
                              >
                                {subItem.title}
                              </Link>
                                {/* Line in the middle for subitems */}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative inline-block group">
                        <Link 
                        onClick={toggleOpen}
                        href={item.path}
                        aria-label={item.title}
                        >{item.title}</Link>
                        {/* Line in the middle */}
                        <div
                          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-[4px] bg-[#1c4eff] transition-all duration-700 ease-in-out group-hover:w-full"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Footer - removed absolute positioning */}
          <div className='w-full flex flex-col justify-center p-10 text-sm lg:text-md lg:flex lg:flex-row lg:justify-between'>
            <SocialMediaTag />
            <div className='flex items-center justify-center lg:justify-end mt-5 lg:mt-0'>
              <div className='opacity-40 text-sm mr-1'>Powered by </div>
              <Link 
                href="https://datacvr.virk.dk/enhed/virksomhed/41417749?fritekst=moveboks&sideIndex=0&size=10"
                aria-label={'Moveboks ApS'}
              >
                {baseConfig.company}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}