import Link from "next/link";
import React from "react";
import Parser from "html-react-parser";
import PaginationButton from "./PaginationButton";
const WebSearchResults = ({ results }) => {
  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-48">
      <p className="text-sm text-gray-600 mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results?.items.map((item) => (
        <div className="mb-6 max-w-xl" key={item.link}>
          <div className="group flex flex-col">
            <Link className="text-sm truncate" href={item.link}>
              {item.formattedUrl}
            </Link>
            <Link
              className="group-hover:underline decoration-blue-800 text-xl font-medium truncate text-blue-800"
              href={item.link}
            >
              {item.title}
            </Link>
          </div>
          <p className="text-gray-800">{Parser(item.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButton />
    </div>
  );
};

export default WebSearchResults;
