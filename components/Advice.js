/* eslint-disable react/no-unescaped-entities */

export default function Advice() {
  return (
    <section className="section container border-t border-gray-700 pt-6">
      <h2 className="title mt-4 mb-8 text-3xl md:text-5xl">
        Advice for DevRels
      </h2>
      <p>
        One of the hardest parts of DevRel is getting developer's attention.
        It's what every devtool company is competing for. So how do you get it?
        Let's look at some rules.
      </p>
      <div className="mx-auto max-w-4xl text-left">
        <h3 className="title mb-6 mt-6 text-3xl sm:text-4xl">
          How to engage developers
        </h3>
        <ul className="ml-4 list-disc space-y-3 dark:text-[#bfbfbf] ">
          <li>
            <strong className="font-bold">Show, don’t tell.</strong> Break down
            barriers to getting their hands on the product as quickly as
            possible so they can determine whether or not your product is right
            for them.
          </li>
          <li>
            <strong className="font-bold">Features not benefits.</strong> Be
            straightforward about specs and feature comparisons against other
            product lines or competitors. Don’t bury the lede.{" "}
          </li>
          <li>
            <strong className="font-bold">Be genuinely helpful.</strong> Invest
            in comprehensive, high-quality resources (e.g. great API
            documentation, a well-maintained help center, how-to videos, sample
            use cases) and make it easy to contact you directly if they need
            some extra help. (Chances are, they won’t)
          </li>
          <li>
            <strong className="font-bold">Be direct.</strong> Get to know a
            developer and then imagine you are writing to that individual person
            each time. This quickly eliminates anything sales-y and helps
            produce genuinely useful content.
          </li>
          <li>
            <strong className="font-bold">Think beyond the 9-to-5.</strong> Many
            developers are developers in and out of work, with side projects on
            a wide range of topics (from hacking their dishwasher to building a
            marketplace or a game).
          </li>
          <li>
            <strong className="font-bold">Repurpose content.</strong> This is
            the key to getting the maximum amount of reuse from content you
            spend time creating. Try following the tweet {"->"} blog {"->"}{" "}
            video {"->"} conference talk pipeline.{" "}
          </li>
          <li>
            <strong className="font-bold">Have a "breakable toy". </strong>
            In other words, have a real app to try around new tech and be able
            to show metrics on new tools/changes. It should be small but real,
            like a workout tracker, meal planner, or note taking app. Ideally it
            should also have a couple users like you & your friends.
          </li>
        </ul>
      </div>
    </section>
  );
}
