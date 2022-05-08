/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Summary({ setReftoElement }) {
  return (
    <div className="text-center">
      <h1
        ref={setReftoElement}
        className="text-left text-4xl font-bold md:text-7xl"
      >
        {" "}
        DevRel at a glance
      </h1>
      <div className="flex flex-col lg:flex-row">
        <div className="p-6 pl-0 text-left">
          <p className="mt-5 mb-5">
            DevRel, also known as Developer Relations or Developer Advocacy, is
            a job that is becoming increasingly in-demand. It's a role that
            exists at developer tool companies (companies whose target market is
            developers). Developer Advocates{" "}
            <span className="underline decoration-blue-500 underline-offset-4">
              help educate developers on a specific product or technology
            </span>{" "}
            through building community, creating content, and improving the
            developer experience of a product .
          </p>
          <p>
            {" "}
            Now that we've learned what developer advocates do, let's explore
            the{" "}
            <span className="rounded-md bg-blue-500 px-1">
              3 types of DevRels
            </span>
            , how to{" "}
            <span className="rounded-md bg-blue-500 px-1">get a job</span> doing
            it, and some{" "}
            <span className="rounded-md bg-blue-500 px-1">resources</span>.
          </p>
        </div>
        <div className="">
          <Image
            src="/typesdevrel.jpeg"
            className="mt-4"
            alt="the 3 pillars of DevRel"
            width="2200"
            height="1200"
          />
        </div>
      </div>

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
