import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-repurp text-rewhite p-3 rounded-xl">
      {children}
    </button>
  );
};

export default Button;
