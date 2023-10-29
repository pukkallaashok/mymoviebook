import React from "react";

const Header = () => {
  return (
    <div className="w-screen p-4 absolute z-10 bg-gradient-to-b from-black flex  justify-between">
      <div className="">
        <img
          className="w-52"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      <div className="m-4">
        <button className="bg-indigo-600 text-white p-4 rounded-lg font-bold">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
