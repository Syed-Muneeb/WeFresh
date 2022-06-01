import React, { Fragment } from "react";

const Input = ({ type, placeholder }) => {
  return (
    <Fragment>
      <input
        className={`${
          type !== "white" ? " bg-cyan-50 " : "bg-white"
        } p-2 focus:outline-none rounded`}
        type="text"
        placeholder={placeholder}
      />
    </Fragment>
  );
  1;
};

export default Input;
