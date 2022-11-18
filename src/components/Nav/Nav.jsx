import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import {
  MenuIcon,
  XIcon,
  ArrowCircleLeftIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import {
  HomeIcon,
  LocationMarkerIcon,
  ArchiveIcon,
  QuestionMarkCircleIcon,
  PencilIcon,
  PhoneIcon,
} from "@heroicons/react/solid";

import SideMenu from "../SideMenu/SideMenu";

function Nav() {
  const history = useHistory()
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="flex">
      {/* NavBar */}
      <div className="w-screen h-[60px] z-10 bg-slate-400 fixed border-b-[1px] border-zinc-400 md:ml-auto md:mr-auto">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold mr-4 pl-[8%] md:text-4xl ">SAMAN</h1>
          </div>
          {!user.id ? (
            <div className="hidden md:flex pr-4">
              <button className="px-8 py-3 border-none bg-transparent text-black mr-2">
                Sign In
              </button>
              <button className="px-8 py-3" onClick={() => history.push('/registration')}>Sign Up</button>
            </div>
          ) : (
            <></>
          )}
          <div className="md:hidden " onClick={handleClick}>
            {!nav ? <MenuIcon className="w-7" /> : <XIcon className="w-7" />}
          </div>
        </div>
        {/* Mobile NavMenu */}
        <ul className={!nav ? "hidden" : "absolute bg-zinc-300  w-full"}>
          {user.id ?
          <li className="border-b-2 border-zinc-200 w-full flex justify-center transition ease-in-out duration-200 active:bg-zinc-500">
            <HomeIcon className="w-6 mr-2" />
            <p className='mt-1 text-lg'>Home</p>
          </li> : <></> }
          {user.id ?
          <li className="border-b-2 border-zinc-200 w-full flex justify-center transition ease-in-out duration-200 active:bg-zinc-500">
            <LocationMarkerIcon className="w-6 mr-2" />
            <p className='mt-1 text-lg'>Locations</p>
          </li> : <></> }
          {user.id ?
          <li className="border-b-2 border-zinc-200 w-full flex justify-center transition ease-in-out duration-200 active:bg-zinc-500">
            <ArchiveIcon className="w-6 mr-2" />
            <p className='mt-1 text-lg'>Containers</p>
          </li> : <></>}
          {user.id ?
          <li className="border-b-2 border-zinc-200 w-full flex justify-center transition ease-in-out duration-200 active:bg-zinc-500">
            <PencilIcon className="w-6 mr-2" />
            <p className='mt-1 text-lg'>Items</p>
          </li> : <></> }
          <li className="border-b-2 border-zinc-200 w-full flex justify-center transition ease-in-out duration-200 active:bg-zinc-500">
            <QuestionMarkCircleIcon className="w-6 mr-2" />
            <p className='mt-1 text-lg'>About</p>
          </li>
          <li className="border-b-2 border-zinc-200 w-full flex justify-center transition ease-in-out duration-200 active:bg-zinc-500">
            <PhoneIcon className="w-6 mr-2" />
            <p className='mt-1 text-lg'>Contact</p>
          </li>
          {user.id ?
          <li className="w-full flex justify-center transition ease-in-out duration-200 active:bg-zinc-500">
            <LogoutIcon className="w-6 mr-2" />
            <p className='mt-1 text-lg'>Logout</p>
          </li> : <></> }
          {!user.id && (
            <div className="text-center my-4 justify-items-center">
              <button className="bg-white text-black px-8 py-3 mb-4 w-[90%]">
                Log In
              </button>
              <button className="bg-white px-8 py-3 w-[90%]">Sign Up</button>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
