import React from "react";
import Button from "../../Button/Button";
import Input from "../../Input/Input";

const WeFresh = () => {
  return (
    <section className="section__wefresh ">
      <div className="container  max-w-5xl px-6 py-16 mx-auto h-max-full ">
        <h3 className="text-3xl text-center text-blue-400 ">
          <strong>WeFresh</strong> fo business
        </h3>
        <p className="text-center text-xs text-slate-400 m-3 max-w-sm mx-auto leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore{" "}
        </p>

        <div className="send_phone-number flex gap-3 mt-6 justify-center">
          <Input placeholder="Enter phone number" type="white" />
          <Button text="send" />
        </div>
      </div>
    </section>
  );
};

export default WeFresh;
