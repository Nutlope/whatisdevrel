/* eslint-disable react/no-unescaped-entities */

export default function Summary({ setReftoElement }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h1 ref={setReftoElement} className="text-5xl md:text-7xl">
        {" "}
        DevRel at a glance
      </h1>
      <div className="flex">
        <div className="p-6 pl-0 text-left">
          <p className="mt-5 mb-5">
            If you've been hearing about DevRel and are confused what it means
            and how to get a job doing it, this website is for you. We're going
            to define what is it, explore the 3 types of devrel, discuss how to
            get a job doing it{" "}
            <span className="italic">
              (and share companies that are hiring)
            </span>
            , and end with some resources and advice for aspiring and beginner
            DevRels.
          </p>
          <p>
            DevRel, also known as Developer Relations or Developer Advocacy, is
            a role that exists at developer tool companies (companies whose
            target market is developers). Developer Advocates{" "}
            <span className="decoration underline underline-offset-4">
              help educate developers on a specific product or technology
            </span>{" "}
            through building community, creating content, and improving the
            developer experience of a product.
          </p>
        </div>
      </div>
    </div>
  );
}
