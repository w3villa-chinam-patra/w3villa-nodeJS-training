import React from "react";

function Home() {
  return (
    <div className="container flex justify-center p-8">
      <div className="flex flex-col md:flex-row items-center gap-10 m-8">
        <img className="w-80" src="/notes.png" alt="" />
        <h1 className="text-5xl xl:text-7xl text-center mt-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Effortless note-taking, anytime, anywhere.
        </h1>
      </div>
    </div>
  );
}

export default Home;
