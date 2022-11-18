import React from "react";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
    <div className='text-center'>
    <div className="text-right ml-[1%] pr-[1%] md:ml-[19%] mr-[1%] bottom-1 mt-5 border-t-2 border-zinc-200">
      &copy; SAMAN
    </div>
    </div>
  );
}

export default Footer;
