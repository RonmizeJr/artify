import { Paintbrush } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='px-4 lg:px-6 h-14 flex items-center'>
      <Link className='flex items-center justify-center' href='#'>
        <Paintbrush className='h-6 w-6 text-primary' />
        <span className='ml-2 text-2xl font-bold'>Artify</span>
      </Link>
      <nav className='ml-auto flex gap-4 sm:gap-6'>
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
      </nav>
    </header>
  );
}
