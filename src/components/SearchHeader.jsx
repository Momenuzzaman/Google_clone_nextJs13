import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";
const SearchHeader = () => {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center justify-between w-full p-6  flex-col sm:flex-row">
        <Link href={"/"}>
          <Image
            width="120"
            height="40"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
          />
        </Link>
        <div className="flex-1 mt-2 sm:mt-0">
          <SearchBox />
        </div>
        <div className="inline-flex  space-x-2 mt-2 sm:mt-0">
          <RiSettings3Line className="header-icon " />
          <TbGridDots className="header-icon " />
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md font-medium hover:brightness-105 hover:shadow-md transition-all ml-2">
            Sign in
          </button>
        </div>
        {/* <button className="bg-blue-500 text-white px-6 py-2 rounded-md font-medium hover:brightness-105 hover:shadow-md transition-all ml-2">
          Sign in
        </button> */}
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

export default SearchHeader;
