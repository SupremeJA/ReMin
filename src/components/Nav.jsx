import { List } from "@phosphor-icons/react";

const Nav = () => {
  return (
    <header className="bg-rewhite w-full sticky top-0 px-5 py-4 font-sans z-10 md:px-10">
      <nav className="flex justify-between text-retext">
        <h1 className="font-semibold text-3xl text-repurp">ReMin</h1>

        <List size={32} className="md:hidden " />
        <ul className="md:flex hidden gap-10">
          <li>About</li>
          <li>SignUp</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
