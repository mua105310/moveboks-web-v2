"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '@/app/assets/logo.png';
import Link from 'next/link';
import { HiMenuAlt4 } from 'react-icons/hi';
import { EventModel } from "@/models/event";

interface navProps {
  events: EventModel[];
}

export default function Nav({events}: navProps) {
    const [open, setOpen] = useState(false);

    function toggleOpen() {
        setOpen(!open);
    }

    return (
        <div className="absolute top-0 w-full h-full z-50">
            <div className='p-10 relative z-20'>
                <div className='flex flex-row justify-between items-center'>
                    {/* Logo start */}
                    <div>
                        <Link href='/'>
                            <div className='flex items-center cursor-pointer'>
                                <Image 
                                    src={Logo}
                                    alt='logo'
                                    width={130}
                                    priority={true}
                                />
                                <div className='hidden md:block ml-4 h-7 border-r border-white opacity-30' />
                                <div className='ml-4 hidden md:block leading-4 tracking-[1.5px]' style={{ fontSize: "9px" }}>SKAB DIT<br /><strong>MOMENT</strong></div>
                            </div>
                        </Link>
                    </div>
                    {/* Logo end */}
                        
                    {/* Menu Icon */}
                    <div onClick={toggleOpen} className="cursor-pointer">
                        <HiMenuAlt4 className={`text-white transition-all duration-500 text-3xl ${open ? 'rotate-90' : ''} hover:text-[var(--secondary)]`} />
                    </div>
                </div>
            </div>
            
            {/* Nav menu */}
            <div className={`absolute top-0 left-0 w-full h-full bg-[var(--background)] transition-transform duration-700 ease-in-out ${open ? 'translate-y-0' : '-translate-y-full'} z-10`}>

            </div>
        </div>
    );
}
