import Header from "@/components/header";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Header />
      <div className='flex flex-col justify-center items-center py-16'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-6'>
          Take Notes Without Overthinking
        </h1>
        <p className='text-lg text-center text-gray-700 max-w-lg'>
          Streamline your note-taking process and focus on what matters most.
        </p>
        <Link
          href='/editor'
          className='bg-primary text-primary- foreground hover:bg-primary/90 w-56 h-10 px-4 py-6 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white text-lg mt-8'
        >
          Take Notes
        </Link>
        <Carousel className='w-full max-w-screen-lg mt-20'>
          <CarouselContent className='-ml-1'>
            <CarouselItem className='pl-1 md:w-1/3 lg:w-1/3'>
              <div className='p-1'>
                <Image
                  src='/assets/image-1.png'
                  alt='Description of your image'
                  width={500}
                  height={300}
                  className='w-full h-full object-cover rounded-lg shadow-md'
                />
              </div>
            </CarouselItem>
            <CarouselItem className='pl-1 md:w-1/3 lg:w-1/3'>
              <div className='p-1'>
                <Image
                  src='/assets/image-2.png'
                  alt='Description of your image'
                  width={500}
                  height={300}
                  className='w-full h-full object-cover rounded-lg shadow-md'
                />
              </div>
            </CarouselItem>
            <CarouselItem className='pl-1 md:w-1/3 lg:w-1/3'>
              <div className='p-1'>
                <Image
                  src='/assets/image-3.png'
                  alt='Description of your image'
                  width={500}
                  height={300}
                  className='w-full h-full object-cover rounded-lg shadow-md'
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <section id='features' className='max-w-4xl mt-12 px-4'>
          <h2 className='text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8'>
            Key Features
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-52'>
            <div className='flex items-center'>
              <div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  No Hassel
                </h3>
                <p className='text-gray-700'>
                  No setup required, just take notes
                </p>
              </div>
            </div>
            <div className='flex items-center'>
              <div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  Works Offline
                </h3>
                <p className='text-gray-700'>No Internet, No Problem</p>
              </div>
            </div>
            <div className='flex items-center'>
              <div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  Free To Use
                </h3>
                <p className='text-gray-700'>
                  Important features without payment
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className='bg-black text-white p-20'>
        <div className='container mx-auto flex flex-col justify-between items-center'>
          <div>
            <h2 className='text-xl'>New Features, Coming soon</h2>
            <p className='text-sm'>Made with 🤍 by Aditya</p>
          </div>
          <div>
            {/* <ul className='flex space-x-4 flex-col justify-center'>
              <li>
                <Link href='#' className='hover:text-gray-400'>
                  Link 1
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-gray-400'>
                  Link 2
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-gray-400'>
                  Link 3
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </footer>
    </main>
  );
}
