import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button 
      className={`px-8 py-3 
        rounded-xl font-bold 
        transition-all duration-300 
        active:scale-95 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
