import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import { Paintbrush } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='px-4 lg:px-6 h-14 flex items-center border-b'>
      <Link className='flex items-center justify-center' href='/'>
        <Paintbrush className='h-6 w-6 text-primary' />
        <span className='ml-2 text-2xl font-bold'>Artify</span>
      </Link>
      <nav className='ml-auto flex gap-4 sm:gap-6 items-center justify-between'>
        <Link
          className='text-sm font-medium hover:underline underline-offset-4'
          href='#features'
        >
          Features
        </Link>
        <Link
          className='text-sm font-medium hover:underline underline-offset-4'
          href='#demo'
        >
          Demo
        </Link>
        <Link
          className='text-sm font-medium hover:underline underline-offset-4'
          href='#pricing'
        >
          Pricing
        </Link>
        <div className='flex items-center gap-4'>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}
