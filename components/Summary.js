/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Summary({ setReftoElement }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h1 ref={setReftoElement} className="text-5xl font-bold md:text-7xl">
        {" "}
        DevRel at a glance
      </h1>
      <div className="flex">
        <div className="p-6 pl-0 text-left">
          <p className="mt-5 mb-5">
            If you've been hearing about DevRel and are confused what it means
            and how to get a job doing it, this website is for you. We're going
            to define DevRel, explore the 3 types of DevRel, discuss how to get
            a job doing it{" "}
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
            developer experience of a product. Community, content, and product
            are the 3 types of DevRel.
          </p>
          <div className="mt-10">
            <Image
              src="/typesdevrel.jpeg"
              className="mt-4"
              alt="the 3 pillars of DevRel"
              width="2200"
              height="1200"
            />
            {/* <Image
              src="/pillarsofdevrel_updated.png"
              className="mt-4"
              alt="the 3 pillars of DevRel"
              width="2070"
              height="1179"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
