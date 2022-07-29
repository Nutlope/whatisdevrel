import Advice from "../components/Advice";
import Contributors from "../components/Contributors";
import DevRelPillars from "../components/DevRelPillars";
import Footer from "../components/Layout/Footer";
import Jobs from "../components/Jobs";
import MetaHead from "../components/MetaHead";
import Resources from "../components/Resources";
import Summary from "../components/Summary";

export default function Home() {
  return (
    <>
      <MetaHead />
      <div className="animate-fade-in-up  px-4">
        <Summary />
        <DevRelPillars />
        <Jobs />
        <Advice />
        <Resources />
        <Contributors />
      </div>
    </>
  );
}
