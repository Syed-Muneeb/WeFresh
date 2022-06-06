import React, { useRef } from "react";

const Accordion = ({ title, contentTitle, content }) => {
  const accordion = useRef();

  console.log("testing..!");
  const handleClick = () => {
    console.log(accordion?.current?.style?.maxHeight);
    if (
      // !accordion?.current?.style?.maxHeight || 
      accordion?.current?.style?.maxHeight !== "0px"
    ) {
      accordion.current.style.maxHeight = "0px";
      accordion.current.classList.remove("py-4");
      accordion.current.classList.remove("border-2");
    } else {
      accordion.current.style.maxHeight = accordion.current.scrollHeight + "px";
      accordion.current.classList.add("py-4");
      accordion.current.classList.add("border-2");
    }
  };

  return (
    <div className="accordion w-10/12 md:w-3/5 mx-auto">
      <h4
        className="title  py-2 px-4 mb-3 border-slate-200 border-2 rounded-lg cursor-pointer"
        onClick={handleClick}
      >
        {title}
      </h4>
      <div
        ref={accordion}
        className="title px-4 mb-2 border-blue-200  rounded-lg close"
      >
        <h4 className="mb-1 bottom-2 text-blue-400">{contentTitle}</h4>
        <div className="text-sm leading-6 text-slate-400">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
