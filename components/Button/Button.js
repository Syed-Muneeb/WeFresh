import React, { Fragment } from "react";

const Button = ({ text }) => {
  return (
    <Fragment>
      <button className="w-24 text-white rounded bg-stone-500">{text}</button>
    </Fragment>
  );
};

export default Button;
