import { Fragment } from "react";
import Services from "../components/containers/Services/Services";
import Hero from "../components/containers/Hero/Hero";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
    </Fragment>
  );
}
