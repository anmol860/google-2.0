import React from "react";

export const HeaderOption = ({ Icon, title, selected }) => {
  return (
    <div
      className={`flex items-center space-x-1 pb-3 cursor-pointer border-b-4 border-transparent hover:border-blue-500 hover:text-blue-500
    ${selected && "text-blue-500 border-blue-500"}`}
    >
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
};
