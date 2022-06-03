import React, { useRef } from "react";

const Accordion = ({ title, contentTitle, content }) => {
  const accordion = useRef();

  const handleClick = () => {
    console.log(accordion?.current?.style?.maxHeight);
    if (
      // !accordion?.current?.style?.maxHeight ||
      accordion?.current?.style?.maxHeight !== "0px"
    ) {
      accordion.current.style.maxHeight = "0px";
    } else {
      accordion.current.style.maxHeight = accordion.current.scrollHeight + "px";
    }
  };

  return (
    <div className="accordion w-3/5	 mx-auto">
      <h4
        className="title  py-2 px-4 mb-3 border-slate-200 border-2 rounded-lg"
        onClick={handleClick}
      >
        {title}
      </h4>
      <div
        ref={accordion}
        className="title  px-4 mb-2 border-blue-200 rounded-lg close"
      >
        <h4 className="mb-1 text-blue-400">{contentTitle}</h4>
        <div className="text-sm leading-6 text-slate-400">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
