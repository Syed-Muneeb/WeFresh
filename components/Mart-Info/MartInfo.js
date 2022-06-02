import React from "react";

const MartInfo = ({ heading, text, bg }) => {
  return (
    <div className={`${bg && "bg-blue-100"}  p-5 rounded`}>
      <h3 className="text-blue-300 mb-1 font-semibold">{heading}</h3>
      <p className="leading-7 text-slate-400 text-xs">{text}</p>
    </div>
  );
};

export default MartInfo;
