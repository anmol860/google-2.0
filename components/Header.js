import { SearchCircleIcon, SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Avatar } from "./Avatar";
import { Header2 } from "./Header2";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header
      className="sticky top-0 bg-white
    "
    >
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          alt="google logo"
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center flex-grow">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none
            "
            defaultValue={router.query.term}
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 text-gray-500 cursor-pointer hover:scale-125 duration-150
            sm:mr-3"
          />
          <MicrophoneIcon
            className="h-6 mr-3 text-blue-500 border-l-2 border-gray-300 pl-4 hidden
            sm:inline-flex
            "
          />
          <SearchIcon
            className="h-6 text-blue-500 hidden
            sm:inline-flex"
          />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://cdn.pixabay.com/photo/2021/12/17/20/50/luffy-6877426_960_720.png"
        />
      </div>

      <Header2 />
    </header>
  );
};

export default Header;
