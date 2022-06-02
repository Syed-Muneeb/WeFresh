import React, { Fragment } from "react";

const Input = ({ type, placeholder }) => {
  return (
    <Fragment>
      <input
        className={`${
          type !== "white" ? " bg-cyan-50 " : "bg-white"
        } py-1 px-2 focus:outline-none rounded border-2`}
        type="text"
        placeholder={placeholder}
      />
    </Fragment>
  );
  1;
};

export default Input;
