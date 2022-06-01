import Image from "next/image";

const Nav = () => {
  return (
    <section className="navbar__section ">
      <div className="container flex justify-between max-w-5xl px-6 py-6 mx-auto ">
        <div className="logo__contianer">
          <img src="/assets/img/logo.svg" alt="" />
        </div>
        <div className="navigation">
          <ul className="flex gap-5">
            <li>Our App</li>
            <li>For Business</li>
            <li>About us</li>
            <li>English</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Nav;
