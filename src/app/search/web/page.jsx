import Link from "next/link";
import React from "react";

const WebSearchPage = async ({ searchParams }) => {
  const response = await fetch(
    ` https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );

  if (!response.ok) {
    throw new Error("Failed to Fetch.");
  }

  const data = await response.json();
  const results = data.items;
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or back to home page{" "}
          <Link className="text-blue-500" href="/">
            Home
          </Link>
        </p>
      </div>
    );
  }
  console.log(results);
  return (
    <div>
      {results &&
        results.map((result) => <p key={result.cacheId}>{result.title}</p>)}
    </div>
  );
};

export default WebSearchPage;
