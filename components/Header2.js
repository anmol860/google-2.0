import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { HeaderOption } from "./HeaderOption";

export const Header2 = () => {
  return (
    <div
      className="flex w-screen justify-evenly text-gray-700 text-sm border-b
    lg:text-base lg:justify-start lg:space-x-36 lg:pl-52
    "
    >
      {/*Left*/}
      <div
        className="flex space-x-6
        "
      >
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={MapIcon} title="Maps" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>

      {/*Right*/}
      <div
        className="flex space-x-4
        "
      >
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};
