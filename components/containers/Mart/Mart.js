import React from "react";
import MartInfo from "../../Mart-Info/MartInfo";
const Mart = () => {
  return (
    <section className="mart__section">
      <div className="conatiner flex flex-col md:flex-row justify-between items-center max-w-5xl py-8 px-6 mx-auto">
        <div className="mart__img">
          <img
            src="/assets/img/mart_screen.svg"
            className="w-10/12 h-auto mx-auto md:mx-0"
            alt="screen"
          />
          <img src="/assets/img/circle.svg" className="mart__bg " />
        </div>

        <div className="mart__text w-3/6 flex flex-col gap-3">
          <MartInfo
            heading="Lorem ipsum dolor sit"
            text="Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
          />
          <MartInfo
            heading="Adipiscing elit sed do eiusmod"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
            bg
          />
          <MartInfo
            heading="Labore et dolore magna aliqua"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
          />
        </div>
      </div>
    </section>
  );
};

export default Mart;
