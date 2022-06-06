import { Fragment, useState, useEffect } from "react";
import Services from "../components/containers/Services/Services";
import Hero from "../components/containers/Hero/Hero";
// import Mart from "../components/containers/Mart/Mart";
import Mart from "../components/containers/Mart/Mart";
import Find from "../components/containers/Find/Find";
import Partners from "../components/containers/Partners/Partners";
import Questions from "../components/containers/Questions/Questions";
import GetApp from "../components/containers/Get-App/GetApp";
import WeFresh from "../components/containers/We-Fresh/WeFresh";
import Header_Wrapper from "../components/containers/Header-Wrapper/Header-Wrapper";

// JSON DATA
import { services } from "../dummy_data.js/data";

export default function Home() {
  const [data, setData] = useState(services);
  const [selected, setSelected] = useState(2);

  const [filteredData, setFilteredData] = useState(
    data.find((item) => {
      return item.id === selected;
    })
  );

  const handleClick = (id) => {
    setSelected(id);
    setFilteredData(
      data.find((item) => {
        return item.id === id;
      })
    );
  };

  return (
    <Fragment>
      <Header_Wrapper />
      {/* <Hero /> */}
      <Services data={data} selected={selected} handleClick={handleClick} />
      <Mart features={filteredData.features} />
      <Find />
      <Partners />
      <Questions />
      <GetApp />
      <WeFresh />
    </Fragment>
  );
}
