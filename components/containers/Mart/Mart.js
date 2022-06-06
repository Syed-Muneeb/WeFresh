import React from "react";
import MartInfo from "../../Mart-Info/MartInfo";
const Mart = ({ features }) => {
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

        <div className="mart__text w-10/12 md:w-3/6 flex flex-col gap-3">
          {features.map((item, index) => {
            return (
              <MartInfo
                key={index}
                heading={item.featureTitle}
                text={item.featureDescription}
                bg={++index === 2 ? true : false}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mart;
