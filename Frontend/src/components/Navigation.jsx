import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const data = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    { name: "Cart", link: "/cart" },
    { name: "Login", link: "/login" },
  ];

  return (
    <div className="flex justify-center gap-10">
      {data.map((item, index) => (
        <NavLink key={index} to={item.link}>
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}

export default Navigation;
