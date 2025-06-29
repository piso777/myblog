import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <div className='text-xl font-bold hover:text-blue-400 hover:scale-150 duration-300'>
      <Link href={"/"}>Abbass</Link>
    </div>
  );
}

export default Logo;
