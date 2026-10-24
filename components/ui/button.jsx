import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Button = ({ text, onClick, className, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group bg-white/90 cursor-pointer text-black px-5 py-2 rounded-full font-semibold
      border-2 border-transparent
      hover:bg-black hover:text-white hover:border-white
      disabled:cursor-not-allowed disabled:opacity-60
      transition-all duration-300 inline-flex items-center
      ${className}`}
    >
      {text}

      <FaArrowRight
        className="ml-2 transition-all duration-300 transform group-hover:translate-x-1"
      />
    </button>
  );
};

export default Button;
