import {useSelector} from 'react-redux';
import {
  LogoutIcon,
} from "@heroicons/react/outline";
import {
  HomeIcon,
  LocationMarkerIcon,
  ArchiveIcon,
  QuestionMarkCircleIcon,
  PencilIcon,
  UserIcon,
  OfficeBuildingIcon,
} from "@heroicons/react/solid";
import { useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux";

function SideMenu() {
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <div>
      {user.id && (
        <div
          className={
            "h-full w-[18%] text-black pt-[60px] md:fixed absolute bg-zinc-300 hidden md:block max-w-relative min-w-[150px] border-r-[1px] border-zinc-100"
          }
        >
          <ul>
          <a href="#" className="no-underline hover:no-underline ">
            <li className="ml-[0] pl-[8%] mb-2 flex transition ease-in-out duration-200 hover:bg-zinc-500" onClick={history.push('/')}>
              <HomeIcon className="w-6 mr-2" />
              <p className="mt-2">Home</p>
            </li></a>
            <li className="ml-[0] pl-[8%] mb-2 flex transition ease-in-out duration-200 hover:bg-zinc-500">
              <LocationMarkerIcon className="w-6 mr-2" />
              <p className="mt-2">Locations</p>
            </li>
            <li className="ml-[0] pl-[8%] mb-2 flex transition ease-in-out duration-200 hover:bg-zinc-500">
              <ArchiveIcon className="w-6 mr-2" />
              <p className="mt-2">Containers</p>
            </li>
            <li className="ml-[0] pl-[8%] mb-2 flex transition ease-in-out duration-200 hover:bg-zinc-500">
              <PencilIcon className="w-6 mr-2" />
              <p className="mt-2">Items</p>
            </li>
            <li className="ml-[0] pl-[8%] mb-2 flex transition ease-in-out duration-200 hover:bg-zinc-500">
              <UserIcon className="w-6 mr-2" />
              <p className="mt-2">Contacts</p>
            </li>
            <li className="ml-[0] pl-[8%] mb-2 flex transition ease-in-out duration-200 hover:bg-zinc-500">
              <OfficeBuildingIcon className="w-6 mr-2" />
              <p className="mt-2">Vendors</p>
            </li>
            <li className="ml-[0] pl-[8%] mb-2 flex transition ease-in-out duration-200 hover:bg-zinc-500">
              <QuestionMarkCircleIcon className="w-6 mr-2" />
              <p className="mt-2">About</p>
            </li>
          </ul>
          {/* Logout at bottom of Side Menu */}
          <ul className="absolute bottom-0 w-full mb-2">
            <a href="#" className="no-underline hover:no-underline ">
              <li
                className="ml-[0] pl-[8%] flex transition ease-in-out duration-200 hover:bg-zinc-500"
                onClick={() => dispatch({ type: "LOGOUT" })}
              >
                <LogoutIcon className="w-6 mr-2" />
                <p className="mt-2">Logout</p>
              </li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SideMenu;
