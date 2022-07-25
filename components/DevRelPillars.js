import ThreePillars from "./ThreePillars";

/* eslint-disable react/no-unescaped-entities */
export default function DevRelPillars() {
  return (
    <>
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto mt-14 max-w-2xl border-t border-gray-500 pt-6"></div>
        <h1 className="mt-4 mb-6 w-full text-center text-5xl sm:text-6xl">
          The 3 types of DevRel
        </h1>
        <p className="mt-4 mb-4">
          Let's talk about the 3 types of DevRel: Community, Content, and
          Product. Many developer advocates do{" "}
          <span className="italic">a mix of these</span> but tend to specialize
          in one or two.{" "}
        </p>
      </div>
      <ThreePillars />
      <div className="mx-auto mt-10 max-w-3xl text-left">
        <h2 className="mb-4 text-3xl tracking-tight sm:text-4xl">
          The Community Builder
        </h2>
        <p>
          <span className="font-bold">Community-focused DevRel</span> centers
          around growing and managing a community of developers. This is usually
          a Slack or Discord community that's focused on a company's product or
          an open source technology. Managing a community consists of answering
          questions, designing the community in an inclusive way, and making
          sure members are getting value through activities like livestreams and
          other events.
        </p>

        <h2 className="mb-4 mt-8 text-3xl  tracking-tight sm:text-4xl">
          The Developer Educator
        </h2>
        <p>
          <span className="font-bold">Content-focused DevRel</span> is about
          spreading awareness about a product through written and spoken
          content. This can involve writing blog posts, making videos, teaching
          workshops, recording podcasts, tweeting and more. Content can be an
          SEO play focused on the long term or be a short term promotion like
          new feature launches.
        </p>

        <h2 className="mb-4 mt-8 text-3xl  tracking-tight sm:text-4xl">
          The DX Engineer
        </h2>
        <p className="">
          <span className="font-bold">Product-focused DevRel</span> is about
          owning the developer exeprience of the product. It's about improving
          how it feels for a developer to use a specific product. This can be
          done by talking to users to understand how they're using it, then
          making improvements to the documentation and creating guides based on
          their answers. This can also mean working on code examples, templates,
          and integrations.
        </p>
      </div>
    </>
  );
}
