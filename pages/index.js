import { Fragment } from "react";
import Services from "../components/containers/Services/Services";
import Hero from "../components/containers/Hero/Hero";
// import Mart from "../components/containers/Mart/Mart";
import Mart from "../components/containers/Mart/Mart";
import Find from "../components/containers/Find/Find";
import Partners from "../components/containers/Partners/Partners";
import Questions from "../components/containers/Questions/Questions";
import GetApp from "../components/containers/Get-App/GetApp";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <Mart/>
      <Find/>
      <Partners/>
      <Questions/>
      <GetApp/>
    </Fragment>
  );
}
