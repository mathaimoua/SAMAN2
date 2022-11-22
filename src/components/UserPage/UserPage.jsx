import React, { useMemo, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';

function UserPage() {
  const dispatch = useDispatch();
  const mainLocation = useSelector((store) => store.locations.main)
  const user = useSelector((store) => store.user);
  const tableData = [];
  const tableColumns = useMemo(
    () => [
      {
        accessorKey: "item_name", //access nested data with dot notation
        header: "Item Name",
      },
      {
        accessorKey: "container_name",
        header: "Container",
      },
      {
        accessorKey: "location_name", //normal accessorKey
        header: "Location",
      },
      {
        accessorKey: "id", //normal accessorKey
        header: "ID",
      },
    ],
    []
  );

  useEffect(() => {
    dispatch({ type: "FETCH_MAIN_LOCATION" });
    // dispatch({ type: "FETCH_RECENT_ITEMS" });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="pl-5 mt-[20%] md:mt-[70px]">
      <h2>Welcome,{" "}
          {String(user.username).charAt(0).toUpperCase() +
            String(user.username).slice(1)}
          !</h2>
      <h3>You are currently managing <span className='font-bold italic'>{mainLocation.location_name}</span></h3>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
