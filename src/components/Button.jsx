import React from "react";

const Button = ({ id, title, leftIcon, containerClass }) => {
  return (
    <div
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      <span className="text-2xl">{leftIcon}</span>
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase font-medium">
        {title}
      </span>
    </div>
  );
};

export default Button;
