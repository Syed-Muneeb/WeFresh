import Button from "../../Button/Button";
import Input from "../../Input/Input";
const Hero = () => {
  return (
    <section className="hero__section">
      <div className="container flex flex-col md:flex-row gap-8 items-center justify-between max-w-5xl px-6 py-6 pb-24 mx-auto h-max-full ">
        <div className="hero__text">
          <div className="mb-8">
            <h1 className="mb-2 text-center md:text-left  text-5xl">
              {" "}
              The smater way
            </h1>
            <h1 className="font-semibold text-center md:text-left  text-7xl">
              {" "}
              to order food
            </h1>
          </div>
          <div className="flex justify-center md:justify-start gap-3 mb-7 hero__actions">
            <Input type="blue" placeholder="Enter phone number" />
            <Button text="send" />
          </div>
          <div className="available__on mx-auto">
            <p className="mb-4 text-md text-center md:text-left">
              Available on
            </p>

            <div className="flex justify-center md:justify-start gap-5 logo__container ">
              <i className="apple w14">
                <img src="/assets/img/apple.svg" alt="google play store icon" />
              </i>
              <i className="android w-14">
                <img src="/assets/img/android.svg" alt="apple icon" />
              </i>
            </div>
          </div>
        </div>

        <div className="hero__img">
          <img
            className="w-10/12  h-auto mr-auto "
            src="/assets/img/iphone_black.svg"
            alt="iphon black"
          />
          <img src="/assets/img/hero-bg.svg" className="hero__bg " />
        </div>
      </div>

      <img src="/assets/img/hero-text-bg.svg" className="hero__text-bg hidden xl:block" alt="" />
      <img
        src="/assets/img/shape-top.svg"
        className="shape__top hidden xl:block"
        alt=""
      />
      <img
        src="/assets/img/shape-right.svg"
        className="shape__right hidden xl:block"
        alt=""
      />
    </section>
  );
};

export default Hero;
