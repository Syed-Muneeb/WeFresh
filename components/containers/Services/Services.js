import React from "react";
const Services = () => {
  return (
    <section className="services__section">
      <div className="container justify-between max-w-5xl px-6 py-6 mx-auto bg-items-center bg b bgco h-max-full">
        <div className="services__heading">
          <h2 className="text-4xl text-center text-blue-300 mb-14">
            We've more
            <strong className="text-blue-400"> services </strong>
          </h2>

          <div className="services grid sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-7">
            <div className="service flex flex-col items-center place-items-start gap-3">
              <img src="/assets/img/store.svg" alt="store" />
              <p className="h3 text-lg">Store</p>
            </div>

            <div className="service flex flex-col items-center place-items-start gap-3">
              <img src="/assets/img/grocery.svg" alt="store" />
              <p className="h3 text-lg">Grocery</p>
            </div>

            <div className="service flex flex-col items-center place-items-start gap-3">
              <img src="/assets/img/cafe.svg" alt="store" />
              <p className="h3 text-lg">Cafe</p>
            </div>

            <div className="service flex flex-col items-center place-items-start gap-3">
              <img src="/assets/img/food.svg" alt="store" />
              <p className="h3 text-lg">Food</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
