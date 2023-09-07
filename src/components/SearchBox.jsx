"use client";

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border border-gray-200 rounded-full shadow-lg px-6 py-2 sm:ml-10 sm:mr-5 max-w-3xl flex-grow"
    >
      <input
        type="text"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        className="w-full focus:outline-none"
      />
      <RxCross2
        onClick={() => setTerm("")}
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
      />
      <BsFillMicFill
        className="hidden sm:inline-flex text-4xl text-blue-500 pl-2 border-l-2 border-gray-300 mr-3
      "
      />
      <AiOutlineSearch
        onClick={handleSubmit}
        className="hidden sm:inline-flex
       text-2xl text-blue-500 cursor-pointer"
      />
    </form>
  );
};

export default SearchBox;
