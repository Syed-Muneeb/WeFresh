import React, { Fragment } from "react";

const Button = ({ text, onClick }) => {
  return (
    <Fragment>
      <button onClick={onClick} className="w-24 text-white rounded bg-stone-500">
        {text}
      </button>
    </Fragment>
  );
};

export default Button;
