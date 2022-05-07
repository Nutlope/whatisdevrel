/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Header from "../components/Header";
import Summary from "../components/Summary";
import { useRef } from "react";

export default function Home() {
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
      <div className="w-full bg-neutral-900 px-4 text-white">
        <Header scrollHandler={scrollHandler} />
        <Summary setReftoElement={setReftoElement} />

        <div className="whatisDevRel">
          <p>
            You might have seen Developer Relations (also referred to as DevRel
            or Developer Advocacy) around Twitter lately and been confused on
            what it was. Or maybe you have a fuzzy understanding of DevRel and
            want to learn more about it to try to get a job in it. Either way,
            this blog post is for you. We're going to be talking about what
            developer relations is, exploring its 3 main areas, then talking
            about how to land a job in this field.
          </p>
          <p>
            DevRel is a role that exists at developer tool companies (companies
            whose target market is developers). Developer Advocates help raise
            awareness for a product and collect feedback from the dev community
            to improve it.
          </p>
        </div>
        <div className="3typesofDevRel">
          <div className="border-blue-500 sm:border-t-2">
            <div className="mt-8 w-full text-5xl font-bold tracking-tight sm:text-6xl">
              The 3 types of DevRels
            </div>
          </div>
          <div className="mt-16 flex space-x-8">
            <svg
              viewBox="0 0 36 36"
              fill="none"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="170"
              height="170"
            >
              <title>Carrie Chapman</title>
              <mask
                id="mask__beam"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="36"
                height="36"
              >
                <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
              </mask>
              <g mask="url(#mask__beam)">
                <rect width="36" height="36" fill="#2a2344"></rect>
                <rect
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                  transform="translate(-4 8) rotate(168 18 18) scale(1)"
                  fill="#ccbd9e"
                  rx="36"
                ></rect>
                <g transform="translate(0 4) rotate(-8 18 18)">
                  <path d="M13,19 a1,0.75 0 0,0 10,0" fill="#000000"></path>
                  <rect
                    x="11"
                    y="14"
                    width="1.5"
                    height="2"
                    rx="1"
                    stroke="none"
                    fill="#000000"
                  ></rect>
                  <rect
                    x="23"
                    y="14"
                    width="1.5"
                    height="2"
                    rx="1"
                    stroke="none"
                    fill="#000000"
                  ></rect>
                </g>
              </g>
            </svg>
            <svg
              viewBox="0 0 36 36"
              fill="none"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="170"
              height="170"
            >
              <title>Julia Ward</title>
              <mask
                id="mask__beam"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="36"
                height="36"
              >
                <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
              </mask>
              <g mask="url(#mask__beam)">
                <rect width="36" height="36" fill="#2a2344"></rect>
                <rect
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                  transform="translate(7 1) rotate(133 18 18) scale(1.1)"
                  fill="#ccbd9e"
                  rx="6"
                ></rect>
                <g transform="translate(3.5 -4) rotate(-3 18 18)">
                  <path
                    d="M15 20c2 1 4 1 6 0"
                    stroke="#000000"
                    fill="none"
                    strokeLinecap="round"
                  ></path>
                  <rect
                    x="11"
                    y="14"
                    width="1.5"
                    height="2"
                    rx="1"
                    stroke="none"
                    fill="#000000"
                  ></rect>
                  <rect
                    x="23"
                    y="14"
                    width="1.5"
                    height="2"
                    rx="1"
                    stroke="none"
                    fill="#000000"
                  ></rect>
                </g>
              </g>
            </svg>
            <svg
              viewBox="0 0 36 36"
              fill="none"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="170"
              height="170"
            >
              <title>Pearl Kendrick</title>
              <mask
                id="mask__beam"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="36"
                height="36"
              >
                <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
              </mask>
              <g mask="url(#mask__beam)">
                <rect width="36" height="36" fill="#2a2344"></rect>
                <rect
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                  transform="translate(1 7) rotate(23 18 18) scale(1.2)"
                  fill="#ccbd9e"
                  rx="36"
                ></rect>
                <g transform="translate(-7 3.5) rotate(3 18 18)">
                  <path d="M13,21 a1,0.75 0 0,0 10,0" fill="#000000"></path>
                  <rect
                    x="11"
                    y="14"
                    width="1.5"
                    height="2"
                    rx="1"
                    stroke="none"
                    fill="#000000"
                  ></rect>
                  <rect
                    x="23"
                    y="14"
                    width="1.5"
                    height="2"
                    rx="1"
                    stroke="none"
                    fill="#000000"
                  ></rect>
                </g>
              </g>
            </svg>
          </div>
          <div className="mt-4 flex w-full space-x-12 font-bold">
            <p>
              The <span className="text-blue-500">community</span> builder
            </p>
            <p>
              The <span className="text-blue-500">content </span>creator
            </p>
            <p>
              The <span className="text-blue-500">DX</span> engineer
            </p>
          </div>
          <h2>Community</h2>
          <p>
            Community-focused DevRel usually centers around growing and managing
            a community of developers. This is typically a Slack or Discord
            community that's focused on a product or technology. Managing a
            community consists of greeting new members, answering questions,
            designing the community in an inclusive way, and making sure your
            members are getting value from the community. This can also include
            livestreams, events, and other activities that help the community
            grow. Being a technical community builder is a very hot skill to
            have nowadays due to the shift developer tool companies are making
            in the way they obtain their customers.
          </p>

          <h2>Content</h2>
          <p>
            Content-focused DevRel is about spreading awareness about a product
            through written and spoken content. This can involve writing blog
            posts, making videos, teaching workshops, recording podcasts, and
            more.
          </p>

          <h2>Product</h2>
          <p>
            Product-focused DevRel is about owning the developer exeprience of
            the product. In other words, it's about improving how it feels for a
            developer to use a specific product. This can be done by talking to
            users to understand how they're using it, then making improvements
            to the documentation and creating guides based on their answers.
            This can also extend to the product ecosystem so working on code
            examples, templates, and integrations is also common.
          </p>
        </div>
        <div className="getAJobInDevRel">
          <p>
            This is a relatively new role so to stand out though, you should try
            to have 2 out of 3 of these. You can code. For this, you can show
            off some of your side projects. You can build communities. You can
            show off helping build a community or organization. You're a good
            content creator. You can show off your talks, YouTube videos,
            tweets, and blog posts for this one. While there aren't
            pre-requisites for the job, it's very helpful to have prior work in
            these areas to show off and get your career in developer advocacy
            started. If you don't have prior work, you should start creating
            content (blogs, videos, side projects) that helps demonstrate you
            can already do the work. Ultimately, this is a role for engineers
            who enjoy working with developers, creating content, and managing
            communities.
          </p>

          <p>
            List of startups that are hiring are HERE. Also feel free to DM me
            on Twitter
          </p>
        </div>
        <div className="DevRelResources">
          Books Blogs Reports Guides Podcasts Newsletters
        </div>
        <div className="contributors">Include me, Lee, and Shawn for rn</div>
      </div>
    </>
  );
}
