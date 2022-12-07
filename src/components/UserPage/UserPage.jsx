import React, { useMemo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MaterialReactTable from "material-react-table";
import { useHistory } from "react-router-dom";

function UserPage() {
  // const dispatch = useDispatch();
  const history = useHistory();
  // const mainLocation = useSelector((store) => store.locations.main);
  // const recentItems = useSelector((store) => store.items.recentItems);
  // const numAssets = useSelector((store) => store.items.numAssets);
  // const numLosses = useSelector((store) => store.items.numLosses);
  const user = useSelector((store) => store.user);
  const [mainLocation, setMainLocation] = useState({})
  // const [recentItems, setRecentItems] = useState({})
  const [numAssets, setNumAssets] = useState({})
  const [numLosses, setNumLosses] = useState({})
  const [tableData, setTableData] = useState([]);
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
    const fetchData = async () => {
      const mlResponse = await fetch('/api/locations/main');
      let newData = await mlResponse.json()
      setMainLocation(newData[0])
      const riResponse = await fetch('/api/items/recentItems');
      newData = await riResponse.json()
      setTableData(newData)
      const naResponse = await fetch('/api/items/numAssets');
      newData = await naResponse.json()
      setNumAssets(newData)
      const nlResponse = await fetch('/api/items/numLosses');
      newData = await nlResponse.json()
      setNumLosses(newData)
    }
    fetchData();
    // dispatch({type: 'FETCH_USER_INFO'})
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return ( 
    <div>
      <div className="pl-5 mt-[60px] flex md:pt-2 md:pb-2 md:text-left text-center bg-[#74BDCB]">
        <h2 className='ml-auto mr-auto md:ml-0 md:mr-0'>
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
      <div className="w-full md:px-[5%] flex md:flex-row p-5 flex-column justify-between border-b md:h-[200px] border-zinc-100">
        <div className="border-2 p-3 w-[33%] md:w-[28%] rounded-md">
          <p className='text-center font-bold text-lg md:text-2xl'>Total Assets</p>
          <p className='md:text-7xl text-3xl text-center pt-3'>{numAssets >= 0 ? numAssets : <span  className='text-2xl pt-0'>Loading...</span>}</p>
        </div>
        <div className="border-2 p-3 w-[33%] md:w-[28%] rounded-md">
        <p className='text-center font-bold text-lg md:text-2xl'>Losses</p>
        <p className='md:text-7xl text-3xl text-center pt-3 text-[#FA8072]'>{numLosses >= 0 ? numLosses : <span className='text-2xl pt-0'>Loading...</span>}</p>
        </div>
        <div className="border-2 p-3 w-[33%] md:w-[28%] text-center rounded-md text-lg md:text-2xl">
          Total Assets
          <p className='md:text-7xl text-3xl text-center pt-3'>{mainLocation.location_name}</p>
        </div>
      </div>
      {/* {recentItems.map((item) => {
        tableData.push({
          item_name: item.item_name,
          container_name: item.container_name,
          location_name: item.location_name,
          id: item.item_id,
        });
      })} */}
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
          enableColumnActions={false}
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
