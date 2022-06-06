import React, { Fragment } from "react";

const Input = ({ type, placeholder }) => {
  return (
    <Fragment>
      <input
        className={`${
          type !== "white" ? " bg-cyan-50 " : "bg-white"
        } py-1 px-2 focus:outline-none text-slate-400 text-[14px] rounded border-2 shadow-none`}
        type="text"
        placeholder={placeholder}
      />
    </Fragment>
  );
  1;
};

export default Input;
