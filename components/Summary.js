/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Summary({ setReftoElement }) {
  return (
    <div className="text-center">
      <h1
        ref={setReftoElement}
        className="text-center text-5xl font-bold md:text-left md:text-7xl"
      >
        {" "}
        DevRel at a glance
      </h1>
      <div className="flex flex-col lg:flex-row">
        <div className="p-6 pl-0 text-left">
          <p className="mt-5 mb-5">
            If you've been hearing about DevRel and are confused what it means
            and how to get a job doing it, this website is for you. We're going
            to define DevRel, explore the 3 pillars of DevRel, discuss how to
            get a job doing it{" "}
            <span className="italic">
              (and share companies hiring each month)
            </span>
            , and end with some resources and advice for aspiring and beginner
            DevRels.
          </p>
          <p>
            DevRel, also known as Developer Relations or Developer Advocacy, is
            a role that exists at developer tool companies (companies whose
            target market is developers). Developer Advocates{" "}
            <span className="underline decoration-blue-500 underline-offset-4">
              help educate developers on a specific product or technology
            </span>{" "}
            through building community, creating content, and improving the
            developer experience of a product.
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
    </div>
  );
}
