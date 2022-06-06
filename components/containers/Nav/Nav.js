import Image from "next/image";
import { useRef, useState } from "react";
import Button from "../../Button/Button";

const Nav = () => {
  const navigation = useRef();
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
    navigation.current.classList.toggle("nav-open");

    console.log(window.innerWidth);
  };
  return (
    <section className="navbar__section ">
      <div className="container flex justify-between items-center max-w-5xl px-6 py-6 mx-auto ">
        <div className="logo__contianer z-20">
          <img src="/assets/img/logo.svg" alt="" />
        </div>
        <nav ref={navigation} className="navigation ">
          <ul className="flex flex-col md:flex-row gap-5 cursor-pointer">
            <li>Our App</li>
            <li>For Business</li>
            <li>About us</li>
            <li>English</li>
            {open && (
              <li>
                <Button text="Sign up" onClick={clickHandler} />{" "}
              </li>
            )}
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
            className=" md:hidden z-20 dark"
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
