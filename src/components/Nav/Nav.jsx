import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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
} from "@heroicons/react/solid";

function Nav() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="flex">
      {/* SideMenu */}
      {user.id && (
        <div
          className={
            "h-full w-[18%] pl-0 pr-0 pt-8 text-black pt-[80px] absolute  bg-zinc-300 hidden md:block max-w-relative min-w-[150px]"
          }
        >
          <ul>
            <li className="ml-[0] pl-[8%] mb-4 flex hover:bg-zinc-500">
              <LocationMarkerIcon className="w-4 mr-2" />
              Locations
            </li>
            <li className="ml-[0] pl-[8%] mb-4 flex hover:bg-zinc-500">
              <ArchiveIcon className="w-4 mr-2" />
              Containers
            </li>
            <li className="ml-[0] pl-[8%] mb-4 flex hover:bg-zinc-500">
              <PencilIcon className="w-4 mr-2" />
              Items
            </li>
            <li className="ml-[0] pl-[8%] mb-4 flex hover:bg-zinc-500">
              <QuestionMarkCircleIcon className="w-4 mr-4" />
              About
            </li>
            <a href="#" class="no-underline hover:no-underline">
              <li
                className="ml-[0] pl-[8%] mb-4 flex hover:bg-zinc-500"
                onClick={() => dispatch({ type: "LOGOUT" })}
              >
                <LogoutIcon className="w-4 mr-4" />
                Logout
              </li>
            </a>
            <li className="ml-[0] pl-[8%] mb-4 flex hover:bg-zinc-500">
              <HomeIcon className="w-4 mr-2" />
              Home
            </li>
          </ul>
        </div>
      )}
      <div className="w-screen h-[80px] z-10 bg-slate-400 fixed drop-shadow-lg">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold mr-4 md:text-4xl">SAMAN</h1>
          </div>
          {!user.id ? (
            <div className="hidden md:flex pr-4">
              <button className="border-none bg-transparent text-black mr-4">
                Sign In
              </button>
              <button className="px-8 py-3">Sign Up</button>
            </div>
          ) : (
            <></>
          )}
          <div className="md:hidden " onClick={handleClick}>
            {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
          </div>
        </div>
        {/* Mobile NavMenu */}
        <ul className={!nav ? "hidden" : "absolute bg-zinc-300  w-full px-8"}>
          <li className="border-b-2 border-zinc-300 w-full flex">
            <HomeIcon className="w-4 mr-2" />
            Home
          </li>
          <li className="border-b-2 border-zinc-300 w-full flex">
            <LocationMarkerIcon className="w-4 mr-2" />
            Locations
          </li>
          <li className="border-b-2 border-zinc-300 w-full flex">
            <ArchiveIcon className="w-4 mr-2" />
            Containers
          </li>
          <li className="border-b-2 border-zinc-300 w-full flex">
            <PencilIcon className="w-4 mr-2" />
            Items
          </li>
          <li className="border-b-2 border-zinc-300 w-full flex">
            <QuestionMarkCircleIcon className="w-4 mr-4" />
            About
          </li>
          <li className="w-full flex">
            <LogoutIcon className="w-4 mr-4" />
            Logout
          </li>
          {!user.id && (
            <div className="flex flex-col my-4">
              <button className="bg-transparent text-orange-300 px-8 py-3 mb-4">
                Sign In
              </button>
              <button className="px-8 py-3">Sign Up</button>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
