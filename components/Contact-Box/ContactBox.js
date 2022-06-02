import React from "react";

const ContactBox = ({ primary, secondary }) => {
  return (
    <div className="contact__box flex flex-col rounded-lg justify-end p-6 border-2 h-36 ">
      <div>
        <p className="text-center">{primary}</p>
        <p className="text-xs text-slate-400 text-center">{secondary}</p>
      </div>
    </div>
  );
};

export default ContactBox;
