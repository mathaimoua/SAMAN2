import React from "react";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
    <div className='w-full items-center'>
    <div className="text-zinc-400 text-center absolute bottom-5 w-full border-zinc-200">
      &copy; SAMAN
    </div>
    </div>
  );
}

export default Footer;
