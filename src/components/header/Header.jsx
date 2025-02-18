import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto ">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="text-orange-700 font-bold text-7xl sm:text-2xl md:text-3xl cursor-pointer  tracking-wide">
              REACT REDUX SHOPPING CART.
            </h1>
          </div>
        </Link>
        <ul className="flex list-none items-center space-x-6 text-gray-900 font-semibold ">
         <Link to={"/"}>
         <li className="cursor-pointer text-orange-700">Home</li>
         </Link>
         <Link to={"/cart"}>
         <li className="cursor-pointer text-orange-700">Cart</li>
         </Link>
        </ul>
      </nav>
    </div>
  );
}
