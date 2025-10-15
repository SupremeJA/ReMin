import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-repurp p-3 rounded-xl w-[50%]">{children}</button>
  );
};

export default Button;
