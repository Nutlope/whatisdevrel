import Head from "next/head";
import { useRef } from "react";
import Header from "../components/Header";
import Summary from "../components/Summary";
import DevRelTypes from "../components/DevRelTypes";
import Jobs from "../components/Jobs";
import Resources from "../components/Resources";
import Contributors from "../components/Contributors";

export default function Home() {
  // The two functions below are used to smoothly scroll to the first header
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
      <Head>
        <title>What is DevRel</title>
        <meta
          name="description"
          content="All you need to know about DevRel and how to get into it."
        />
      </Head>
      <div className="mx-auto max-w-7xl px-4 text-white">
        <Header scrollHandler={scrollHandler} />
        <Summary setReftoElement={setReftoElement} />
        <DevRelTypes />
        <Jobs />
        <Resources />
        <Contributors />
      </div>
    </>
  );
}
