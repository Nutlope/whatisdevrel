/* eslint-disable react/no-unescaped-entities */

export default function Summary() {
  return (
    <div className="container animate-fade-in-up">
      <h1 className="title mb-8 text-4xl md:text-6xl">
        What is Developer Relations?
      </h1>
      <p>
        If you've been hearing about DevRel and are confused what it means and
        how to get a job doing it, this website is for you. We're going to
        define what is it, explore the 3 types of devrel, discuss how to get a
        job doing it{" "}
        <span className="italic">(and share companies that are hiring)</span>,
        and end with some resources and advice for aspiring and beginner
        DevRels.
      </p>
      <p>
        DevRel, also known as Developer Relations or Developer Advocacy, is a
        role that exists at developer tool companies (companies whose target
        market is developers). Developer Advocates{" "}
        <span className="underline decoration-gray-600 decoration-dotted underline-offset-4">
          help educate developers on a specific product or technology
        </span>{" "}
        through building community, creating content, and improving the
        developer experience of a product.
      </p>
    </div>
  );
}
