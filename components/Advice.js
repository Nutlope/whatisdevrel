/* eslint-disable react/no-unescaped-entities */

export default function Advice() {
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="mx-auto mt-14 max-w-2xl border-t border-blue-500 pt-6"></div>
      <h1 className="mt-4 mb-8 w-full text-center text-5xl font-bold tracking-tight sm:text-6xl">
        Advice for DevRels
      </h1>
      <div>
        One of the hardest parts of DevRel is getting developer's attention.
        It's what every devtool company is competing for. So how do you get it?
        Let's look at some rules (most from{" "}
        <a href="https://twitter.com/swyx" className="text-blue-500">
          swyx
        </a>
        ).
        <div className="mx-auto max-w-4xl text-left">
          <h2 className="mb-4 mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            How to engage developers
          </h2>
          <ul className="list-disc space-y-3">
            <li>
              <b>Rule 1:</b> Show, don’t tell - Break down barriers to getting
              their hands on the product as quickly as possible so they can
              determine whether or not your product is right for them.
            </li>
            <li>
              <b>Rule 2:</b> Features not benefits - Be straightforward about
              specs and feature comparisons against other product lines or
              competitors. Don’t bury the lede.{" "}
            </li>
            <li>
              <b>Rule 3:</b> Be genuinely helpful - Invest in comprehensive,
              high-quality resources (e.g. great API documentation, a
              well-maintained help center, how-to videos, sample use cases) and
              make it easy to contact you directly if they need some extra help.
              (Chances are, they won’t)
            </li>
            <li>
              <b>Rule 4:</b> Be direct - get to know a developer and then
              imagine you are writing to that individual person each time. This
              quickly eliminates anything sales-y and helps produce genuinely
              useful content.
            </li>
            <li>
              <b>Rule 5:</b> Think beyond the 9-to-5 - Many developers are
              developers in and out of work, with side projects on a wide range
              of topics (from hacking their dishwasher to building a marketplace
              or a game).
            </li>
            <li>
              <b>Rule 6:</b> Repurpose content. This is the key to getting the
              maximum amount of reuse from content you spend time creating. Try
              following the tweet {"->"} blog {"->"} video {"->"} conference
              talk pipeline.{" "}
            </li>
            <li>
              <b>Rule 7:</b> Have a "breakable toy", aka a real app to try
              around new tech and be able to show metrics on new tools/changes.
              It should be small but real, like a workout tracker, meal planner,
              or note taking app. Ideally it should also have a couple users
              like you & your friends.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
