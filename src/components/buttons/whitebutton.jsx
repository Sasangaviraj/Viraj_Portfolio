import React from "react";

const WhiteButton = ({ logo, title, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="flex items-center justify-center gap-2  bg-white text-black text-button-p px-4 py-1 rounded-lg border border-gray-400 cursor-pointer"
    >
      {logo}
      {title}
    </button>
  );
};

export default WhiteButton;
