import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const Topbar = ({ contentType }) => {
  return (
    <div className="navbar bg-base-100 absolute top-0 w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/dosen"}> Dosen </Link>
            </li>
          </ul>
        </div>
        {contentType === "admin" ? (
          <button
            className="btn btn-ghost normal-case text-xl"
            onClick={() => navigate(`/dashboard/admin`)}
          >
            <MdOutlineArrowBackIosNew />
          </button>
        ) : (
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        )}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            {contentType === "dosen" || contentType === "admin" ? (
              <Link className="display-none" />
            ) : (
              <Link to={"/dosen"} className="text-black">
                Dosen
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {contentType === "admin" ? (
          <Link className="btn" to={"/logout"}>
            Logout
          </Link>
        ) : (
          <Link className="btn" to={"/login"}>
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Topbar;
