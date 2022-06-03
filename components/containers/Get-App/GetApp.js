import React from "react";

const GetApp = () => {
  return (
    <section className="section__get-app bg-blue-50">
      <div className="container  max-w-5xl px-6 py-16 mx-auto h-max-full ">
        <h3 className="text-3xl text-center text-blue-400 ">
          Ready to <strong>Get the app</strong>
        </h3>
        <p className="text-center text-xs text-slate-400 m-3 max-w-sm mx-auto leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore{" "}
        </p>

        <div className="download__button flex  flex-col sm:flex-row  justify-center items-center sm:items-start gap-4 mt-6">
          <img
            src="/assets/img/apple_button.svg"
            className="inline-block"
            alt=""
          />
          <img
            src="/assets/img/google_button.svg"
            className="inline-block"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
