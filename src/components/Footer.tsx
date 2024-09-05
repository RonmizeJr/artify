import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
      <div className='container mx-auto max-w-4xl flex flex-col sm:flex-row justify-between items-center'>
        <p className='text-xs text-gray-500'>
          © 2023 DragDropPaint. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link
            className='text-xs hover:underline underline-offset-4'
            href='/terms-of-service'
          >
            Terms of Service
          </Link>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
