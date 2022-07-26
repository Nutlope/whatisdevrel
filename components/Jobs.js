/* eslint-disable react/no-unescaped-entities */
import {
  CloudIcon,
  CodeIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";

export default function Jobs() {
  const skills = [
    {
      name: "You can code",
      description:
        "For this, you can show off some of your side projects or highlight your previous engineering experience. It's important for DevRels to be able to code to emphathize with developers.",
      icon: CodeIcon,
    },
    {
      name: "You can build communities",
      description:
        "For this skill, you can show off any experience of you helping build a community or organization. It could be for college, open source, online communities or anything.",
      icon: CloudIcon,
    },
    {
      name: "You can create content",
      description:
        "For this skill, you can show off your talks, YouTube videos, tweets, and blog posts. If you don't have any of these, I'd stongly recommend you create some content.",
      icon: LightningBoltIcon,
    },
  ];

  return (
    <div className="mx-auto mt-10 max-w-3xl">
      <div className="mx-auto mt-14 max-w-2xl border-t border-gray-500 pt-6"></div>
      <h1 className="mt-4 mb-8 w-full text-center text-5xl sm:text-6xl">
        Getting a job in DevRel
      </h1>
      <p>
        As mentioned, the job market for devrels is very hot right now. I have
        startups that message me every week asking if I know any good developer
        advocates, so there is a big need in the market right now. I'm going to
        be posting a list of companies that are hiring in this section each
        month, starting on August 1st.
      </p>
      {/* <div className="mx-auto mb-6 mt-6 text-center">
        <a href="https://twitter.com/nutlope/status/1440814837542514703">
          <Image
            src="/hotmarket.png"
            alt="a tweet showing how hot the devrel market is"
            width="600"
            height="500"
          />
        </a>
      </div> */}
      <div className="mt-5 mb-8">
        <p className="mb-6">
          When applying for developer advocate roles, it's important to show
          that you have some of these three skills below:
        </p>
        <dl className="">
          {skills.map((skill) => (
            <div key={skill.name} className="relative mb-5">
              <dt>
                <div className="absolute mt-2 flex h-12 w-12 items-center justify-center rounded-md border border-gray-700 text-white">
                  <skill.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 font-medium">{skill.name}</p>
              </dt>
              <dd className="ml-16 pl-2 text-gray-500">{skill.description}</dd>
            </div>
          ))}
        </dl>
      </div>
      <p>
        While there aren't pre-requisites for the job, it's{" "}
        <span className="italic">very helpful</span> to have prior work in these
        areas to show off and get your career in developer advocacy started. If
        you don't have prior work, you should start creating content (blogs,
        videos, side projects) that helps demonstrate you can already do the
        work. Ultimately, this is a role for engineers who enjoy working with
        developers, creating content, and managing communities.
      </p>
      <p className="mt-4 mb-8">
        If you already have two of these skills with prior work, feel free to{" "}
        <a href="https://twitter.com/nutlope" className="font-medium underline">
          DM me on Twitter
        </a>{" "}
        and I can try to connect you to startups that are hiring!
      </p>
    </div>
  );
}
