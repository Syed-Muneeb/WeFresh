import Button from "../../Button/Button";
import Input from "../../Input/Input";
const Hero = () => {
  return (
    <section className="hero__section">
      <div className="container flex items-center justify-between max-w-5xl px-6 py-6 mx-auto h-max-full ">
        <div className="hero__text">
          <div className="mb-8">
            <h1 className="mb-2 text-5xl"> The smater way</h1>
            <h1 className="font-bold text-7xl"> to order food</h1>
          </div>
          <div className="flex gap-3 mb-6 hero__actions">
            <Input type="blue" placeholder="Enter phone number" />
            <Button text="send" />
          </div>
          <div className="available__on">
            <p className="mb-5 text-md ">Available on</p>

            <div className="flex gap-5 logo__container ">
              <i className="apple w14">
                <img src="/assets/img/apple.svg" alt="google play store icon" />
              </i>
              <i className="android w-14">
                <img src="/assets/img/android.svg" alt="apple icon" />
              </i>
            </div>
          </div>
        </div>

        <div className="hero__img ">
          <img
            className="w-10/12 ml-auto h-auto align-right"
            src="/assets/img/iphone_black.svg"
            alt="iphon black"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
