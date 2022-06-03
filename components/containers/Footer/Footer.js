import React from "react";

const Footer = () => {
  return (
    <section className="section__get-app bg-blue-50">
      <div className="container  max-w-5xl px-6 py-16 mx-auto h-max-full ">
        <div className="grid sm:grid-cols-5 gap-10  sm:justify-between">
          <div className="footer__logo">
            <img src="/assets/img/footer_logo.svg" alt="" />
          </div>

          <div className="service__area flex flex-col gap-2">
            <h4 className="uppercase  mb-2 font-semibold text-sm">
              {" "}
              service area
            </h4>
            <p className="text-sm text-slate-400">lorem ipsum</p>
            <p className="text-sm text-slate-400">Psum dolor</p>
            <p className="text-sm text-slate-400">Sum dolor</p>
            <p className="text-sm text-slate-400">Lorem ipsum</p>
          </div>
          <div className="service__area flex flex-col gap-2">
            <h4 className="uppercase  mb-2 font-semibold text-sm"> about</h4>
            <p className="text-sm text-slate-400">lorem ipsum</p>
            <p className="text-sm text-slate-400">Psum dolor</p>
            <p className="text-sm text-slate-400">Sum dolor</p>
            <p className="text-sm text-slate-400">Lorem ipsum</p>
          </div>
          <div className="service__area flex flex-col gap-2">
            <h4 className="uppercase  mb-2 font-semibold text-sm"> help</h4>
            <p className="text-sm text-slate-400">lorem ipsum</p>
            <p className="text-sm text-slate-400">Psum dolor</p>
            <p className="text-sm text-slate-400">Sum dolor</p>
            <p className="text-sm text-slate-400">Lorem ipsum</p>
          </div>

          <div className="service__area flex flex-col items-center gap-2">
            <p className="text-sm mb-2 text-slate-400">Available on</p>

            <div className="flex gap-5 logo__container ">
              <i className="apple w-8">
                <img src="/assets/img/apple.svg" alt="google play store icon" />
              </i>
              <i className="android w-8">
                <img src="/assets/img/android.svg" alt="apple icon" />
              </i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
