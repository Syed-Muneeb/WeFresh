import Image from "next/image";
import { useRef, useState } from "react";
import Button from "../../Button/Button";
import { Link as Scroll } from "react-scroll";

const Nav = () => {
  const navigation = useRef();
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
    navigation.current.classList.toggle("nav-open");

    console.log(window.innerWidth);
  };
  const closeHandler = () => {
    setOpen(false);

    navigation.current.classList.remove("nav-open");
  };

  return (
    <section className="navbar__section ">
      <div className="container flex justify-between items-center max-w-5xl px-6 py-6 mx-auto ">
        <div className="logo__contianer z-20">
          <img src="/assets/img/logo.svg" alt="" />
        </div>
        <nav ref={navigation} className="navigation ">
          <ul className="flex flex-col md:flex-row gap-5 cursor-pointer">
            <Scroll to="section__get-app" smooth={true}>
              <li onClick={closeHandler}>Our App</li>
            </Scroll>
            <Scroll to="section__wefresh" smooth={true}>
              <li onClick={closeHandler}>For Business</li>
            </Scroll>

            <Scroll to="mart__section" smooth={true}>
              <li onClick={closeHandler}>About us</li>
            </Scroll>
            <Scroll to="section__questions" smooth={true}>
              <li onClick={closeHandler}>English</li>
            </Scroll>
            <li>
              <Button text="Sign up" onClick={closeHandler} />{" "}
            </li>
          </ul>
        </nav>

        {open ? (
          <img
            className="md:hidden z-20 "
            src="/assets/img/close.svg"
            alt="navbar icon"
            onClick={clickHandler}
          />
        ) : (
          <img
            className=" md:hidden z-20 "
            src="/assets/img/hamburger.svg"
            alt="navbar icon"
            onClick={clickHandler}
          />
        )}
      </div>
    </section>
  );
};

export default Nav;
