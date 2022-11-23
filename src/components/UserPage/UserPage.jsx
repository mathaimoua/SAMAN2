import React, { useMemo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MaterialReactTable from "material-react-table";
import { useHistory } from "react-router-dom";

function UserPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const mainLocation = useSelector((store) => store.locations.main);
  const recentItems = useSelector((store) => store.items.recentItems);
  const numAssets = useSelector((store) => store.items.numAssets);
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
        accessorKey: "id", //normal accessorKey
        header: "ID",
      },
    ],
    []
  );


  useEffect(() => {
    // dispatch({ type: "FETCH_MAIN_LOCATION" });
    dispatch({type: 'FETCH_USER_INFO'})
    // dispatch({ type: "FETCH_RECENT_ITEMS" });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="pl-5 mt-[60px] flex md:pt-2 md:pb-2 md:text-left text-center bg-[#74BDCB]">
        {/* bg-zinc-100 */}
        <h2>
          Welcome,{" "}
          {String(user.username).charAt(0).toUpperCase() +
            String(user.username).slice(1)}
          !
          <p>
            You are currently managing{" "}
            <span className="font-bold italic text-zinc-100">
              {mainLocation.location_name}
            </span>
          </p>
        </h2>
        <button
          type="submit"
          className="md:block hidden md:p-2 bg-[#FA8072] md:w-[130px] w-[100px] ml-auto mr-5 md:float-right"
          onClick={() => history.push(`/additem/${mainLocation.location_id}`)}
        >
          Add New Item
        </button>
      </div>
      <div className="w-full flex md:flex-row md:p-5 flex-column md:justify-between border-b md:h-[200px] border-zinc-100">
        <div className="border-2 p-3 w-[25%] text-center rounded-md text-emerald-500 font-bold text-2xl">
          Total Assets
          <p>{numAssets}</p>
        </div>
        <div className="border-2 p-3 w-[25%] text-center rounded-md text-2xl">
          Losses
        </div>
        <div className="border-2 p-3 w-[25%] text-center rounded-md text-2xl">
          Total Assets
        </div>
      </div>
      {recentItems.map((item) => {
        tableData.push({
          item_name: item.item_name,
          container_name: item.container_name,
          location_name: item.location_name,
          id: item.item_id,
        });
      })}
      <div className="pt-5 md:pt-10 md:w-[97%] md:ml-auto md:mr-auto">
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
            <div className="w-full grid grid-cols-2 md:grid-cols-3 content-center">
              <div className="hidden md:block"></div>
              <h3 className="pt-2 text-center">Recently added items</h3>
              <button
                type="submit"
                className="md:hidden p-2 bg-[#FA8072] w-[130px] ml-auto mr-5 md:float-right"
                onClick={() =>
                  history.push(`/additem/${mainLocation.location_id}`)
                }
              >
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
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
