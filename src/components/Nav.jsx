import React from "react";

const Nav = () => {
  return (
    <header className="w-full absolute p-1.5 font-sans">
      <nav className="flex justify-between text-retext">
        <h1 className="font-semibold text-2xl">ReMin</h1>

        <ul className="md:flex hidden gap-10">
          <li>About</li>
          <li>SignUp</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
