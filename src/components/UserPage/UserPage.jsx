import React, { useMemo, useEffect } from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector, useDispatch } from "react-redux";
import MaterialReactTable from "material-react-table";
import { useHistory } from 'react-router-dom'

function UserPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const mainLocation = useSelector((store) => store.locations.main);
  const recentItems = useSelector((store) => store.items.recentItems)
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
    dispatch({ type: "FETCH_RECENT_ITEMS" });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="pl-5 mt-[20%] md:mt-[6%] md:pt-4 md:pb-4 md:text-left text-center text-zinc-600 bg-zinc-100">
        <h2>
          Welcome,{" "}
          {String(user.username).charAt(0).toUpperCase() +
            String(user.username).slice(1)}
          !
          <h3>
            You are currently managing{" "}
            <span className="font-bold italic">
              {mainLocation.location_name}
            </span>
          </h3>
        </h2>
      </div>
      {recentItems.map((item) => {
        tableData.push({
          item_name: item.item_name,
          container_name: item.container_name,
          location_name: item.location_name,
          id: item.item_id,
        });
      })}
            <MaterialReactTable
        columns={tableColumns}
        data={tableData}
        enableFullScreenToggle={false}
        enableColumnResizing
        enableDensityToggle={false}
        enableColumnFilters={false}
        enableHiding={false}
        enableGlobalFilter={false}
        enablePagination={false}
        enableBottomToolbar={false}
        renderTopToolbarCustomActions={() => (
          <div className='w-full grid  grid-cols-2 md:grid-cols-3 content-center'>
            <div className='hidden md:block'></div>
            <h3 className="pt-2 text-center" >Recently added items</h3>
            <button type="submit" className='p-2 bg-[#FA8072] w-[130px] ml-auto mr-auto' onClick={() => history.push(`/additem/${mainLocation.location_id}`)} >
              Add New Item
            </button>
          </div>
        )}
        initialState={{ columnVisibility: { id: false } }}
        muiTableBodyRowProps={({ row }) => ({
          onClick: () => {
            console.log(row.original.id);
          },
          sx: {
            cursor: "pointer", //you might want to change the cursor too when adding an onClick
          },
        })}
        muiTopToolbarProps={{
          //no useTheme hook needed, just use the `sx` prop with the theme callback
          sx: {
            backgroundColor: "#D3D3D3",
          },
        }}
        muiTableHeadCellProps={{
          //no useTheme hook needed, just use the `sx` prop with the theme callback
          sx: {
            backgroundColor: "white",
          },
        }}
      />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
