import React from "react";
import Button from "../../Button/Button";
import Input from "../../Input/Input";

const Find = () => {
  return (
    <section className="section__find">
      <div className="container flex justify-between items-center max-w-5xl py-24 px-6 mx-auto">
        <div className="text__actions">
          <div>
            <h3 className="text-blue-300 text-4xl mb-8">
              Find us in these <strong className="text-blue-400">Area</strong>{" "}
            </h3>
          </div>
          <div className="flex gap-3 actions">
            <Input type="white" placeholder="Enter your Area" />
            <Button text="Search" />
          </div>
        </div>
        <div className="find__img">
          <img
            className="w-10/12 h-auto ml-auto"
            src="/assets/img/find_image.svg"
            alt=""
          />
          <img
            className="find__circle"
            src="/assets/img/find_circle.svg"
            alt=""
          />
        </div>
      </div>

      <img src="/assets/img/find_side.svg" className="find__side-img" alt="" />
    </section>
  );
};

export default Find;
