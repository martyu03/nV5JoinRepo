import React from "react";

const ButtonWatch = ({ onAction }: any) => {
  return (
    <button
      onClick={onAction}
      className="bg-none text-red-700 font-bold uppercase"
    >
      watch now
    </button>
  );
};

export default ButtonWatch;
