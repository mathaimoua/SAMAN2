import React from "react";
import { useSelector } from 'react-redux'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {

  const user = useSelector((store) => store.user);

  return (
    <div className='w-full'>
    <div className={user.id ? "md:w-[82%] text-zinc-400 text-center flex-grow bottom-0 w-full border-zinc-200" : "text-zinc-400 text-center flex-grow bottom-0 w-full border-zinc-200 bg-white pt-2 h-[40px]"} >
      &copy; SAMAN
    </div>
    </div>
  );
}

export default Footer;
