"use client";

import { Menu, NotebookIcon } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div>
      <header className='sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6'>
        <nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
          <Link
            href='#'
            className='flex items-center gap-2 text-lg font-semibold md:text-base'
          >
            <NotebookIcon className='h-6 w-6' />
          </Link>
          <Link
            href='/'
            className='text-muted-foreground transition-colors hover:text-foreground'
          >
            Home
          </Link>
          <Link
            href='/#features'
            className='text-muted-foreground transition-colors hover:text-foreground'
          >
            Features
          </Link>
          <Link
            href='#'
            className='text-muted-foreground transition-colors hover:text-foreground'
          >
            Pricing
          </Link>
          <Link
            href='#'
            className='text-muted-foreground transition-colors hover:text-foreground'
          >
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              className='shrink-0 md:hidden'
            >
              <Menu className='h-5 w-5' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='right'>
            <nav className='grid gap-6 text-lg font-medium'>
              <Link
                href='#'
                className='flex items-center gap-2 text-lg font-semibold'
              >
                <NotebookIcon className='h-6 w-6' />
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground'
              >
                Editor
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground'
              >
                Orders
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground'
              >
                Products
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground'
              >
                Customers
              </Link>
              <Link href='#' className='hover:text-foreground'>
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}
