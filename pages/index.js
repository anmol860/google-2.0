import { Avatar } from "@/components/Avatar";
import Head from "next/head";
import Image from "next/image";
import {
  MicrophoneIcon,
  SwitchVerticalIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import { Footer } from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Toggle from "@atlaskit/toggle";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const [theme, setTheme] = useState("light");

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handletheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className="flex flex-col justify-center items-center h-screen
    dark:bg-[#121212]"
    >
      <Head>
        <title>GOOGLE</title>
      </Head>

      <header className="flex w-full justify-between p-5 text-gray-700">
        <div className="flex space-x-4 items-center">
          <p
            className="link text-sm
        dark:text-[#c0c0c0]"
          >
            About
          </p>
          <p
            className="link text-sm
        dark:text-[#c0c0c0]"
          >
            Store
          </p>
          <div className="flex items-center space-x-1 hover:scale-105 duration-100">
            <p
              onClick={handletheme}
              className="text-white sm:hidden md:hidden lg:hidden bg-black rounded-full text-center mr-2 line-clamp-1
             dark:bg-white dark:text-black"
            >
              {theme === "light" ? "Dark mode" : "Light mode"}
            </p>
            <span className="hidden sm:inline-flex dark:text-white">
              Dark mode
              <Toggle onChange={handletheme} />
            </span>
          </div>
        </div>

        <div className="flex space-x-4 items-center text-sm">
          <p
            className="link
        dark:text-[#c0c0c0]"
          >
            Gmail
          </p>
          <p
            className="link
        dark:text-[#c0c0c0]"
          >
            Images
          </p>

          <ViewGridIcon
            className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer
        dark:text-[#c0c0c0] dark:hover:bg-[#303030]"
          />

          <Avatar url="https://cdn.pixabay.com/photo/2021/12/17/20/50/luffy-6877426_960_720.png" />
        </div>
      </header>

      {/*Body*/}
      <form className="flex flex-col items-center mt-20 flex-grow w-4/5">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
          alt="google_logo"
        />
        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg
      max-w-md border border-gray-200 rounded-full px-5 py-3 items-center
      sm:max-w-xl lg:max-w-2xl
      dark:bg-[#282828] dark:border-gray-700 dark:focus-within:shadow-[#303030]"
        >
          <SearchIcon
            className="h-5 mr-3 text-gray-500
        dark:text-gray-400"
          />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none
        dark:bg-[#282828] dark:text-gray-300"
          />
          <MicrophoneIcon
            className="h-5
        dark:text-gray-400"
          />
        </div>

        <div
          className="flex flex-col w-1/2 space-y-2 justify-center mt-8
      sm:space-y-0 sm:flex-row sm:space-x-4"
        >
          <button
            onClick={search}
            className="btn
        dark:bg-[#404040] dark:text-white dark:hover:bg-[#303030] dark:hover:ring-[#474747]"
          >
            Google Search
          </button>
          <button
            className="btn
        dark:bg-[#404040] dark:text-white dark:hover:bg-[#303030] dark:hover:ring-[#474747]"
          >
            I'm Feeling Lucky
          </button>
        </div>
      </form>
      {/*Body*/}

      <Footer />
    </div>
  );
}
