import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import SideMenu from '../SideMenu/SideMenu';

function Nav() {
  const user = useSelector((store) => store.user);
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  }

  return (
    <div className='w-screen h-[80px] z-10 bg-slate-400 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>SAMAN</h1>
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>Locations</li>
            <li>Containers</li>
            <li>About</li>
            <li>Logout</li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
        <div className='md:hidden ' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' /> }
        </div>
      </div>
      <ul className={!nav ? 'hidden' : 'absolute bg-slate-400 w-full px-8'}>
            <li className='border-b-2 border-zinc-300 w-full'>Home</li>
            <li className='border-b-2 border-zinc-300 w-full'>Locations</li>
            <li className='border-b-2 border-zinc-300 w-full'>Containers</li>
            <li className='border-b-2 border-zinc-300 w-full'>About</li>
            <li className='border-b-2 border-zinc-300 w-full'>Logout</li>
            <div className='flex flex-col my-4'>
              <button className='bg-transparent text-orange-300 px-8 py-3 mb-4'>Sign In</button>
              <button className='px-8 py-3'>Sign Up</button>
            </div>
      </ul>
    </div>
  );
}

export default Nav;
