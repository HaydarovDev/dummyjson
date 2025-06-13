import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-3 py-2 shadow-sm">
      <div>
        <a href="" className="text-2xl">
          Logo
        </a>
      </div>
      <ul className="flex gap-3">
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/carts">Carts</NavLink>
      </ul>

      <div></div>
    </header>
  );
};

export default Header;
