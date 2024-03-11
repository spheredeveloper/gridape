"use client"
// Import necessary dependencies and components
import Image from 'next/image';
import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css"

// Functional component for the WhyGridape section
const WhyGridape = () => {
    // Initialize AOS library on component mount
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
        });
    }, []);

    // TSX structure for the WhyGridape component
    return (
        <section id='description' className='w-full py-10 mb-10 dark:bg-black flex justify-center'>
            <div className="flex  flex-col-reverse md:flex-row justify-between gap-10 md:gap-20 w-[95%] md:w-[85%] items-center  dark:text-white relative">
                <div data-aos="fade-up">
                    <h2 className='text-[#2E3192] mb-3 text-center md:text-left'>Why Gridape</h2>
                    <div className='description px-2'>
                        <p className="text-center md:text-justify mb-6 md:mb-10">Gridape is at the forefront of revolutionizing email marketing. Our mission is to empower businesses to create impactful email campaigns effortlessly.</p>

                        <p className="text-center md:text-justify">Gridape is not just a tool.
                            it is your partner in crafting compelling narratives that resonate with your audience. Whether you are a seasoned marketer or just starting, Gridape simplifies the complex, making email marketing an enjoyable and effective experience.</p>

                    </div>
                </div>
                <div className='bgImage' data-aos="fade-down">
                    <Image src="/png/whygrideape.png" alt='why grid ape' width={1200} height={100} />
                </div>
                <Image src="/svg/puzzle1.svg" alt='puzzle' width={50} height={50} className='absolute left-0 -bottom-2 hidden md:block -z-10' />
                <Image src="/svg/puzzle1.svg" alt='puzzle' width={50} height={50} className='absolute left-60 -bottom-5 hidden md:block -z-10' />
            </div>
        </section>
    )
}

// Export the WhyGridape component as the default export
export default WhyGridape;
