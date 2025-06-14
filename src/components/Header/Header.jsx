import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ children, getMe }) => {
  return (
    <header className="flex justify-between items-center px-3 py-2 shadow-sm">
      <div>
        <a href="" className="text-2xl">
          Logo
        </a>
      </div>
      <ul className="flex gap-3">
        <NavLink className="p-[5px] rounded" to="dashboard/users">
          Users
        </NavLink>
        <NavLink className="p-[5px] rounded" to="dashboard/posts">
          Posts
        </NavLink>
        <NavLink className="p-[5px] rounded" to="dashboard/todos">
          Todos
        </NavLink>
        <NavLink className="p-[5px] rounded" to="dashboard/products">
          Products
        </NavLink>
      </ul>
      {children}
      {getMe && (
        <div className="bg-green-500 w-[30px] h-[30px] flex items-center justify-center rounded-[50%] text-white cursor-pointer">
          {getMe?.firstName?.slice(0, 1)}
        </div>
      )}
    </header>
  );
};

export default Header;
