import React from "react";

const WebSearchPage = async ({ searchParams }) => {
  const response = await fetch(
    ` https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );
  const data = await response.json();
  const results = data.items;
  console.log(results);
  return (
    <div>
      {results &&
        results.map((result) => <p key={result.cacheId}>{result.title}</p>)}
    </div>
  );
};

export default WebSearchPage;
