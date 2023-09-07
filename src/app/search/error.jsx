"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  console.log("error", error);
  useEffect(() => {
    console.log("Error: ", error);
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <p className="text-3xl mb-4">Something went wrong</p>
      <button className="text-blue-500" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
};

export default Error;
