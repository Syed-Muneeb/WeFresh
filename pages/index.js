import { Fragment } from "react";
import Services from "../components/containers/Services/Services";
import Hero from "../components/containers/Hero/Hero";
// import Mart from "../components/containers/Mart/Mart";
import Mart from "../components/containers/Mart/Mart";
import Find from "../components/containers/Find/Find";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <Mart/>
      <Find/>
    </Fragment>
  );
}
