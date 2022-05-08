import { useRef } from "react";
import Header from "../components/Header";
import Summary from "../components/Summary";
import DevRelTypes from "../components/DevRelTypes";
import Jobs from "../components/Jobs";
import Contributors from "../components/Contributors";
import ComingSoon from "../components/ComingSoon";
import MetaHead from "../components/MetaHead";
import Resources from "../components/Resources";
import Newsletter from "../components/Newsletter";

export default function Home() {
  let ref = useRef();
  const scrollHandler = (e) => {
    e.preventDefault();
    ref.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  function setReftoElement(e) {
    ref = e;
  }

  return (
    <>
      <MetaHead />
      <div className="mx-auto max-w-7xl px-4 text-white">
        <Header scrollHandler={scrollHandler} />
        <Summary setReftoElement={setReftoElement} />
        <DevRelTypes />
        <Jobs />
        {/* <Resources /> */}
        <Contributors />
        {/* <Newsletter /> */}
        <ComingSoon />
      </div>
    </>
  );
}
