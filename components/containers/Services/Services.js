import React from "react";
const Services = ({ data, selected, handleClick }) => {
  return (
    <section className="services__section">
      <div className="container max-w-5xl px-6 py-8 mx-auto bg-items-center h-max-full">
        <div className="services__heading">
          <h2 className="text-4xl text-center text-blue-300 mb-14">
            We&apos;ve more
            <strong className="text-blue-400"> services </strong>
          </h2>

          <div className="services grid sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-7">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="service flex flex-col items-center place-items-start gap-3"
                  onClick={() => handleClick(item.id)}
                >
                  <img
                    src={item.img}
                    className={item.id !== selected ? "w-36" : "w-40"}
                    alt="store"
                  />
                  <p
                    className={`${
                      item.id !== selected
                        ? "text-slate-400"
                        : "text-blue-400 font-semibold"
                    }  h3 text-lg`}
                  >
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
