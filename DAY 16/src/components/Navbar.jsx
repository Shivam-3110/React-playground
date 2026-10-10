import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { setloggedinUsers } = useContext(Auth);

  const handleLogout = () => {
    localStorage.removeItem("LoggedInUsers");
    setloggedinUsers(null);
    navigate("/", { replace: true });
  };

  return (
    <div className="flex flex-col gap-10 border-r border-gray-500 p-2">
      <h1 className="text-4xl font-semibold">E-Comm</h1>

      <div className="ml-5 flex flex-col gap-6">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b border-gray-500 font-semibold text-blue-500"
              : "border-b border-gray-300"
          }
          to="/main"
          end
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b border-gray-500 font-semibold text-blue-500"
              : "border-b border-gray-300"
          }
          to="/main/users"
        >
          Users
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b border-gray-500 font-semibold text-blue-500"
              : "border-b border-gray-300"
          }
          to="/main/products"
        >
          Products
        </NavLink>
      </div>

      <button
        onClick={handleLogout}
        className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700 active:scale-95"
      >
        LogOut
      </button>
    </div>
  );
}

export default Navbar;