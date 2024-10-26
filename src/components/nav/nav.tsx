"use client";
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Logo from '@/app/assets/logo.png'
import Link from 'next/link';
import { HiMenuAlt4 } from 'react-icons/hi';
export default function Nav() {
    
    const [open, setOpen] = useState(false);

    function toggleOpen() {
        setOpen(!open);
    }

    return (
        <div className="absolute top-0 w-full p-10 z-50">
            <div className='flex flex-row justify-between items-center'>
                {/* Logo start */}
                <div>
                    <Link
                        href='/'
                    >
                    <div className='flex items-center cursor-pointer' >
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
                    
                {/* Nav start */}
                <div onClick={toggleOpen}>
                    <HiMenuAlt4 className={`text-white transition-all duration-500 text-3xl ${open && 'rotate-90'} cursor-pointer hover:text-[var(--secondary)]`} />
                </div>
                {/* Nav end */}
            </div>
        </div>
    )
}