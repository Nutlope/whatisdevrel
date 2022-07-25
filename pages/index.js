import { useRef } from "react";
import Advice from "../components/Advice";
import Contributors from "../components/Contributors";
import DevRelPillars from "../components/DevRelPillars";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Jobs from "../components/Jobs";
import MetaHead from "../components/MetaHead";
import Resources from "../components/Resources";
import Summary from "../components/Summary";

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
      <div className="mx-auto max-w-6xl px-4">
        <Header scrollHandler={scrollHandler} />
        <Summary setReftoElement={setReftoElement} />
        <DevRelPillars />
        <Jobs />
        <Advice />
        <Resources />
        <Contributors />
        <Footer />
      </div>
    </>
  );
}
