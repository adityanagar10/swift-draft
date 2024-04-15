"use client";

import React from "react";
import Header from "@/components/header";
import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <main className='min-h-screen'>
      <Header />
      <section className='h-screen my-auto'>
        <div className='flex flex-col justify-center items-center py-16'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-6'>
            <span
              className='relative w-[max-content]
            before:absolute before:inset-0 before:animate-typewriter
          before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black'
            >
              Take Notes Without Overthinking.
            </span>
          </h1>
          <p className='text-lg text-center max-w-lg'>
            Your Digital Napkin Companion
          </p>
          <Link
            href='/editor'
            className='bg-primary text-primary- foreground hover:bg-primary/90 w-56 h-10 px-4 py-6 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white text-lg mt-8'
          >
            Take Notes
          </Link>
          <Image
            src='/assets/flowchart.svg'
            alt='Description of your image'
            width={600}
            height={400}
            className='mt-20'
          />
        </div>
      </section>
      <footer className='bg-black text-white py-20 text-center'>
        <div className='container flex flex-col justify-between items-center'>
          <div>
            <h2 className='text-xl'>New Features, Coming soon</h2>
            <p className='text-sm'>Made with 🤍 by Aditya</p>
          </div>
          <div>
            <ul className='flex space-x-4 flex-row justify-evenly my-5'>
              <li>
                <Link
                  href='https://twitter.com/adityanagar_'
                  className='hover:text-gray-400'
                >
                  Contact
                </Link>
              </li>
              <li className='mx-5'>
                <Link
                  href='https://github.com/adityanagar10/swift-draft'
                  className='hover:text-gray-400'
                >
                  Source Code
                </Link>
              </li>
              <li>
                <Link
                  href='https://adityanagar.com'
                  className='hover:text-gray-400'
                >
                  My works
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
