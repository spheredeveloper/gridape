"use client"
// Import necessary dependencies and components
import Image from "next/image";
import Link from "next/link";
import "../../app/globals.css";
import { waitlistLinks } from "@/data/data";
import MobileNav from "./MobileNav";
import { useCallback, useEffect, useState } from "react";

// Functional component for the Header
const Header = () => {
  // State for managing mobile navigation
  const [isOpen, setIsOpen] = useState(false);
  // State for managing header shadow based on scroll position
  const [hasShadow, setHasShadow] = useState(false);

  // Function to toggle mobile navigation
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  // Function to handle scroll and update header shadow
  const handleScroll = useCallback(() => {
    const scrollThreshold = 100;
    const currentScrollY = window.scrollY;
    const shouldHaveShadow = currentScrollY > scrollThreshold;

    if (shouldHaveShadow !== hasShadow) {
      setHasShadow(shouldHaveShadow);
    }
  }, [hasShadow]);

  // Function to handle body click and close mobile navigation if clicked outside
  const handleBodyClick = useCallback(
    (e: any) => {
      if (isOpen && !e.target.closest(".mobile-nav-container")) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  // Effect to add event listeners for scroll and body click
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.body.addEventListener("click", handleBodyClick);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, [handleScroll, handleBodyClick]);

  // TSX structure for the Header component
  return (
    <header className={`w-full fixed z-50 py-3 dark:bg-black t0p-0 left-0 right-0 flex justify-center bg-[#fafafa] transition-transform duration-300 ease-in-out
     ${hasShadow ? 'shadow-md' : ''}`}>
      <nav className="flex justify-between w-[95%] md:w-[85%] items-center dark:text-white">
        <Link href="/">
        <Image src="/png/logo.png" alt="logo" width={60} height={60} loading="lazy" className="w-[45px] md:w-[80px] h-[45px] md:h-[80px]" />
        </Link>
        <ul className="hidden md:inline-flex items-center md:gap-x-[3rem] lg:gap-x-[8rem]">
          {waitlistLinks.map((link, index) => (
            <li key={index} className="transition duration-300 delay-100 hover:text-[#2E3192] whitespace-nowrap">
              <Link href={link.link} prefetch scroll={false}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.id)?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5 md:gap-10">
          <Link href="#waitlist" className="btn-sm bg-[#2E3192] text-white whitespace-nowrap"
            scroll={false}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('waitlist')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >Join our waitlist</Link>
          <MobileNav isOpen={isOpen} handleClick={handleOpen} />
        </div>
      </nav>
    </header>
  )
}

// Export the Header component as the default export
export default Header;
