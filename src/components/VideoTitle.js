import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-20 w-screen aspect-video absolute text-white bg-gradient-to-tr from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 w-1/4">{overview}</p>
      <button className="bg-white text-black p-4 px-12  text-xl hover:bg-opacity-70 rounded-lg font-bold">
        Play
      </button>
      <button className="bg-gray-500 text-white p-4 px-12  text-xl bg-opacity-50 rounded-lg mx-2 font-bold">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
