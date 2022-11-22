import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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

function Nav() {
  const ref = useRef("");
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  const clickRef = () => {
    console.log(ref.current);
  };

  return (
    <div
      className="flex"
      onClick={() => {
        if (nav) {
          setNav(false);
        }
      }}
    >
      {/* NavBar */}
      <div
        className="w-screen h-[60px] z-50 bg-white fixed border-b-0 border-zinc-400 md:ml-auto md:mr-auto"
        onClick={clickRef}
      >
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <a href={"/"}>
              <h1 className="text-3xl font-bold mr-4 pl-[8%] md:text-4xl transition duration:500 hover:scale-110">
                SAMAN
              </h1>
            </a>
          </div>
          {!user.id ? (
            <div className="hidden md:flex pr-4">
              <button
                className="active:bg-transparent px-4 border-none bg-transparent text-black mr-2"
                onClick={() => {
                  history.push("/login");
                }}
              >
                Sign In
              </button>
              <button
                className="px-8 py-3 transition duration:400 hover:bg-[#dd7266]"
                onClick={() => {
                  history.push("/registration");
                }}
              >
                Sign Up
              </button>
            </div>
          ) : (
            <></>
          )}
          <div className="md:hidden " onClick={handleClick}>
            {!nav ? <MenuIcon className="w-7" /> : <XIcon className="w-7" />}
          </div>
        </div>
        {/* Mobile NavMenu */}
      </div>
      <div className="md:hidden fixed z-40 w-full h-0 pt-[15%]">
        <ul
          className={`bg-zinc-300 w-full border-b-2 border-zinc-200 shadow-md ease-in-out duration-300 ${
            nav ? "translate-y-0" : "-translate-y-96"
          }`}
        >
          {user.id ? (
            <li className="border-b-2 border-zinc-200 w-full flex justify-center transition ease-in-out duration-200 active:bg-zinc-500">
              <HomeIcon className="w-6 mr-2" />
              <p className="mt-1 text-lg">Home</p>
            </li>
          ) : (
            <></>
          )}
          {user.id ? (
            <li className="border-b-2 border-zinc-200 w-full flex justify-center transition ease-in-out duration-200 active:bg-zinc-500">
              <LocationMarkerIcon className="w-6 mr-2" />
              <p className="mt-1 text-lg">Locations</p>
            </li>
          ) : (
            <></>
          )}
          {user.id ? (
            <li className="border-b-2 border-zinc-200 w-full flex justify-center transition ease-in-out duration-200 active:bg-zinc-500">
              <ArchiveIcon className="w-6 mr-2" />
              <p className="mt-1 text-lg">Containers</p>
            </li>
          ) : (
            <></>
          )}
          {user.id ? (
            <li className="border-b-2 border-zinc-200 w-full flex justify-center transition ease-in-out duration-200 active:bg-zinc-500">
              <PencilIcon className="w-6 mr-2" />
              <p className="mt-1 text-lg">Items</p>
            </li>
          ) : (
            <></>
          )}
          <li className="border-b-2 border-zinc-200 w-full flex justify-center transition ease-in-out duration-200 active:bg-zinc-500">
            <QuestionMarkCircleIcon className="w-6 mr-2" />
            <p className="mt-1 text-lg">About</p>
          </li>
          <li className="border-b-2 border-zinc-200 w-full flex justify-center transition ease-in-out duration-200 active:bg-zinc-500">
            <PhoneIcon className="w-6 mr-2" />
            <p className="mt-1 text-lg">Contact</p>
          </li>
          {user.id ? (
            <li className="w-full flex justify-center transition ease-in-out duration-200 active:bg-zinc-500">
              <LogoutIcon className="w-6 mr-2" />
              <p className="mt-1 text-lg">Logout</p>
            </li>
          ) : (
            <></>
          )}
          {!user.id && (
            <div className="text-center my-4 justify-items-center mb-6">
              <button
                className="bg-white text-black px-8 py-3 mb-4 w-[90%] transition duration:400 hover:bg-[#dd7266]"
                onClick={() => {
                  history.push("/login");
                }}
              >
                Log In
              </button>
              <button
                className="px-8 py-3 w-[90%] transition duration:400 hover:bg-[#dd7266]"
                onClick={() => {
                  history.push("/registration");
                }}
              >
                Sign Up
              </button>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
