/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Summary({ setReftoElement }) {
  return (
    <div className="text-center">
      <h1
        ref={setReftoElement}
        className="text-left text-4xl font-bold sm:text-7xl"
      >
        {" "}
        DevRel at a glance
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="left p-6 pl-0 text-left">
          <p className="mt-5 mb-5">
            DevRel, also known as Developer Relations or Developer Advocacy, is
            a job that is becoming increasingly in-demand. DevRel is a role that
            exists at developer tool companies (companies whose target market is
            developers). Developer Advocates help raise awareness for a product
            and collect feedback from the dev community to improve it.
          </p>
          <p>
            {" "}
            Let's explore the{" "}
            <span className="rounded-md bg-blue-500 px-1">
              3 types of DevRels
            </span>
            , how to{" "}
            <span className="rounded-md bg-blue-500 px-1">get a job</span> doing
            it, and some{" "}
            <span className="rounded-md bg-blue-500 px-1">resources</span>.
          </p>
        </div>
        <div className="right">
          <Image
            src="/pillars.jpeg"
            className="mt-4"
            alt="the 3 pillars of DevRel"
            width="2200"
            height="1200"
          />
        </div>
      </div>

      {/* TODO: Grab icons and link these out */}
      {/* <div className="mb-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
        <a
          className="hover:bg-secondary h-full rounded border p-3"
          href="#somewhere"
        >
          <div className="inline-block h-[24px] w-[24px]">SVG </div>
          <h3 className="text-primary mb-sm text-lg font-semibold">
            The 3 types of DevRel
          </h3>
        </a>
        <a
          className="hover:bg-secondary h-full rounded border p-3"
          href="#somewhere"
        >
          <div className="inline-block h-[24px] w-[24px]">SVG </div>
          <h3 className="text-primary mb-sm text-lg font-semibold">
            How to get hired in DevRel
          </h3>
        </a>
        <a
          className="hover:bg-secondary h-full rounded border p-3"
          href="#somewhere"
        >
          <div className="inline-block h-[24px] w-[24px]">SVG </div>
          <h3 className="text-primary mb-sm text-lg font-semibold">
            DevRel resources
          </h3>
        </a>
      </div> */}
    </div>
  );
}
