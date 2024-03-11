"use client"
// Import necessary components and dependencies
import FAQ from "@/components/waitlist/FAQ/FAQ";
import Hero from "@/components/waitlist/Hero";
import WaitlistForm from "@/components/waitlist/WaitlistForm";
import WhyGridApe from "@/components/waitlist/WhyGridApe";
import React, { useEffect, useState } from "react"
import Loader from "@/components/Loader";
import Header from "@/components/waitlist/Header";
import Footer from "@/components/waitlist/Footer";

// Functional component for the Page
const Page = () => {
  // State to manage loading state
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Effect to simulate a delay and set loading to false
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(delay);
    }, 2000);
  }, []);

  // TSX structure for the Page component
  return (
    <>
      {isLoading ?
        <Loader color='border-[#2E3192]' /> :
        <>
          <Header />
          <Hero />
          <WhyGridApe />
          <WaitlistForm />
          <FAQ />
          <Footer />
        </>
      }
    </>
  )
}

// Export the Page component as the default export
export default Page;
