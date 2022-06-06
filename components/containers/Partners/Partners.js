import React from "react";

const Partners = () => {
  return (
    <div className="section__partners">
      <div className="container flex flex-col md:flex-row gap-y-60 justify-between items-center max-w-5xl  py-44 px-6 mx-auto">
        <div className="partners__text w-full md:w-1/2 ">
          <div className="w-1/2 mx-auto my-20  sm:my-32 md:my-0">
            <h3 className="text-blue-300 mb-1 text-3xl">
              Our <strong>Partners</strong>
            </h3>
            <p className="text-slate-400 leading-7 text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod.
            </p>
          </div>
          <img
            src="/assets/img/partners_circle.svg"
            className="partners__text-bg"
            alt=""
          />
        </div>

        <div className="partners__logos w-10/12 md:w-1/2">
          <img
            className="mx-auto logo"
            src="/assets/img/TrueCoffee.svg"
            alt=""
          />
          <img
            className="eleven logo logo__ab"
            src="/assets/img/7-Eleven.svg"
            alt=""
          />
          <img
            className="makro logo logo__ab"
            src="/assets/img/Makro.svg"
            alt=""
          />
          <img
            className="true logo logo__ab"
            src="/assets/img/TrueYou.svg"
            alt=""
          />
          <img
            className="freshmart logo logo__ab"
            src="/assets/img/freshmart.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
