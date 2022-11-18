import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="pl-5 mt-[20%] md:mt-[70px]">
      <h2>Welcome,{" "}
          {String(user.username).charAt(0).toUpperCase() +
            String(user.username).slice(1)}
          !</h2>
      <p>Your ID is: {user.id}</p>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
