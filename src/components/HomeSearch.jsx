"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
const HomeSearch = () => {
  const [input, setInput] = useState();
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    return router.push(`/search/web?searchTerm=${input}`);
  };

  const handleRandomSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl "
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="flex-grow focus:outline-none "
        />
        <BsFillMicFill className="text-lg text-gray-500 " />
      </form>
      <div className="mt-8 flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-3">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={handleRandomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {randomSearchLoading ? (
            <img
              className="text-center h-8"
              src="/spinner.svg"
              alt="Random Search Loading"
            />
          ) : (
            "      I Am Feeling Luck"
          )}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
