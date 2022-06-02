import React from "react";
import Accordion from "../../Accordion/Accordion";
import ContactBox from "../../Contact-Box/ContactBox";

const Questions = () => {
  return (
    <section className="section__questions">
      <div className="container flex flex-col  gap-y-20 justify-between items-center max-w-5xl py-24 px-6 mx-auto">

        <div className="got__question w-full">
          <div className="heading mb-7">
            <h2 className="text-3xl text-blue-400 mb-4 text-center ">
              Got questions?
            </h2>
            <p className="text-sm text-center text-slate-400">
              perfect, we've got answers!
            </p>
          </div>

          <Accordion
            title="How to get started?"
            contentTitle="Lorem ipsum dolor sit amet, consectetur adipis"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          />
          <Accordion
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            contentTitle="Lorem ipsum dolor sit amet, consectetur adipis"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          />
          <Accordion
            title="Eiusmod tempor incididunt ut labore et dolore"
            contentTitle="Lorem ipsum dolor sit amet, consectetur adipis"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          />
          <Accordion
            title="Quis nostrud exercitation ullamco"
            contentTitle="Lorem ipsum dolor sit amet, consectetur adipis"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          />
        </div>

        <div className="still__questions w-3/5	">
        <div className="heading mb-7">
            <h2 className="text-3xl text-blue-400 mb-4 text-center ">
            Still have a question?
            </h2>
            <p className="text-sm text-center text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            </p>
          </div>

          <div className="contact__box flex justify-between">
              <ContactBox primary="+66 8959888" secondary="Lorem ipsum dolor sit amet, consectetur" />
              <ContactBox primary="Support@service.com" secondary="Lorem ipsum dolor sit amet, consectetur" />
               
          </div>

        </div>


      </div>
    </section>
  );
};

export default Questions;
