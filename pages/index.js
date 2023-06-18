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

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);



  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  

  

  return (
    <div
      className="flex flex-col justify-center items-center h-screen
    "
    >
      <Head>
        <title>GOOGLE</title>
      </Head>

      <header className="flex w-full justify-between p-5 text-gray-700">
        <div className="flex space-x-4 items-center">
          <p
            className="link text-sm
        "
          >
            About
          </p>
          <p
            className="link text-sm
        "
          >
            Store
          </p>
        </div>

        <div className="flex space-x-4 items-center text-sm">
          <p
            className="link
        "
          >
            Gmail
          </p>
          <p
            className="link
        "
          >
            Images
          </p>

          <ViewGridIcon
            className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer
        "
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
      "
        >
          <SearchIcon
            className="h-5 mr-3 text-gray-500
        "
          />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none
        "
          />
          <MicrophoneIcon
            className="h-5
        "
          />
        </div>

        <div
          className="flex flex-col w-1/2 space-y-2 justify-center mt-8
      sm:space-y-0 sm:flex-row sm:space-x-4 sm:mb-4cm"
        >
          <button
            onClick={search}
            className="btn
        "
          >
            Google Search
          </button>
          <button
            className="btn
        "
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
