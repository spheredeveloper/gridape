"use client"
// Import necessary dependencies and components
import { footerSocialLinks } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

// Functional component for the Footer
const Footer = () => {
  // TSX structure for the Footer component
  return (
    <footer className='bg-[#fafafa]'>
      <div className="w-full py-10 px-2 mb-10 dark:bg-black flex justify-center">
        <div className="flex  justify-between w-[95%] md:w-[85%] items-center dark:text-white">
          <Link href="mailto:hello@gridape.com" className='hover:text-[#2E3192] whitespace-nowrap max-[640px]:text-sm'>Mail us at: hello@gridape.com</Link>
          <div className='flex gap-2 md:gap-5'>
            {footerSocialLinks.map((social, index) => (
              <Link key={index} href={social.link} target='_blank' rel="noopener noreferrer">
                <Image src={social.name} width={35} height={35} alt='social icon' className='w-[25px] md:w-[35px] h-[25px] md:h-[35px] transition-transform hover:translate-y-2' />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// Export the Footer component as the default export
export default Footer;
