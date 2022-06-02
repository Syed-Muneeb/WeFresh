import React,{Fragment} from "react";
import Footer from "../containers/Footer/Footer";
import Nav from "../containers/Nav/Nav";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Nav />
      {children}
      <Footer/>
    </Fragment>
  );
};

export default Layout;
