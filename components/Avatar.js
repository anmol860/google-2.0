import React from "react";

export const Avatar = ({ url, className }) => {
  return (
    <img
      className={`rounded-full w-10 h-10 cursor-pointer hover:scale-110 duration-150 ${className}`}
      src={url}
      loading="lazy"
      alt="Profile"
    />
  );
};
