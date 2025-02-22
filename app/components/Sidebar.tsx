'use client'

import React from 'react'
import { sidebarLinks } from '../constants'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from "next/image";
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <section className='sticky top-0 left-0 flex flex-col justify-between h-screen w-fit bg-dark1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
      <div className='flex flex-1 flex-col gap-6'>
        {
          sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);
          return (
            <Link href={link.route} key={link.label} className={cn('flex items-center gap-4 p-4 rounded-lg justify-start', {
              'bg-primary': isActive
            })}>
              <Image src={link.icon} alt={link.label} width={24} height={24} className="invert" />
              <p className='text-lg font-semibold max-lg:hidden'>{link.label}</p>
            </Link>
          )
          })
        }
      </div>
    </section>
  )
}
