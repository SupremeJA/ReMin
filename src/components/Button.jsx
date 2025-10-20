const Button = ({ children }) => {
  return (
    <button className="bg-repurp hover:bg-purple-700 text-rewhite p-3 rounded-xl">
      {children}
    </button>
  );
};

export default Button;
