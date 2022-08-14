/* eslint-disable react/no-unescaped-entities */
// TODO: Convert this into a compoment then map through

export default function Resources() {
  return (
    <div className="mx-auto mt-10 max-w-3xl dark:text-white">
      <div className="mx-auto mt-14 max-w-2xl border-t border-gray-700 pt-6"></div>
      <h2 className="mt-4 mb-8 w-full text-center text-3xl dark:text-white md:text-5xl">
        DevRel Resources
      </h2>
      <div className="mt-6 grid gap-16 pt-6 text-center md:grid-cols-2 md:gap-x-5 md:gap-y-12">
        <div className="flex flex-col">
          <h3 className="mb-3 text-3xl dark:text-white">Books </h3>
          <ul className="flex list-inside list-disc flex-col text-left md:self-center">
            <li className="dark:text-[#bfbfbf]">
              <a
                href="https://www.amazon.com/Business-Value-Developer-Relations-Communities/dp/1484237471/ref=pd_sbs_1/137-5281060-5988909?pd_rd_w=j1ksT&pf_rd_p=f8e24c42-8be0-4374-84aa-bb08fd897453&pf_rd_r=5J80EP23D4HT23HFJA2K&pd_rd_r=fe52f5c1-5dcc-4f78-914f-126eac837a09&pd_rd_wg=jAKKa&pd_rd_i=1484237471&psc=1"
                className="hover:underline"
              >
                Business Value of Developer Relations
              </a>
            </li>
            <li className="dark:text-[#bfbfbf]">
              <a href="https://devrel.weavr.ai/" className="hover:underline">
                The DevRel Handbook
              </a>
            </li>
            <li className="dark:text-[#bfbfbf]">
              <a
                href="https://learn.samjulien.com/getting-started-in-developer-relations"
                className="hover:underline"
              >
                Getting Started in Developer Relations
              </a>
            </li>
            <li className="dark:text-[#bfbfbf]">
              <a
                href="https://www.stephaniemorillo.co/product-page/the-developer-s-guide-to-content-creation"
                className="hover:underline"
              >
                Developer's Guide to Content Creation
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-3 text-3xl dark:text-white">Blogs </h3>
          <ul className="flex list-inside list-disc flex-col text-left md:self-center">
            <li className="dark:text-[#bfbfbf]">
              <a
                href="https://www.swyx.io/ideas?filter=devrel"
                className="hover:underline"
              >
                Swyx's blog
              </a>
            </li>
            <li className="dark:text-[#bfbfbf]">
              <a
                href="https://theworst.dev/content"
                className="hover:underline"
              >
                Kurt Kemple's blog
              </a>
            </li>
            <li className="dark:text-[#bfbfbf]">
              <a
                href="https://www.stephaniemorillo.co/blog"
                className="hover:underline"
              >
                StephanieMorillo's Blog
              </a>
            </li>
            <li className="dark:text-[#bfbfbf]">
              <a
                href="https://www.marythengvall.com/blog/category/DevRel"
                className="hover:underline"
              >
                Mary Thengvall's Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-3 text-3xl dark:text-white">Articles </h3>
          <ul className="flex list-inside list-disc flex-col text-left md:self-center">
            <li className="dark:text-[#bfbfbf]">
              <a
                href="https://dev.to/dabit3/7-tips-for-breaking-into-devrel-7jk"
                className="hover:underline"
              >
                7 tips for breaking into DevRel
              </a>
            </li>
            <li className="dark:text-[#bfbfbf]">
              <a
                href="https://helenmin.com/blog/marketing-to-developers"
                className="hover:underline"
              >
                Developer Marketing
              </a>
            </li>
            <li className="dark:text-[#bfbfbf]">
              <a
                href="https://www.swyx.io/community-builder"
                className="hover:underline"
              >
                Technical community builders
              </a>
            </li>
            <li className="dark:text-[#bfbfbf]">
              <a
                href="https://dev.to/jacobandrewsky/what-is-devrel-and-how-can-you-start-doing-it-today-lpc"
                className="hover:underline"
              >
                Doing DevRel Today
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-3 text-3xl dark:text-white">Podcasts </h3>
          <ul className="flex list-inside list-disc flex-col text-left md:self-center">
            <li className="dark:text-[#bfbfbf]">
              <a href="https://devrelrad.io/" className="hover:underline">
                DevRel Radio
              </a>
            </li>
            <li className="dark:text-[#bfbfbf]">
              <a
                href="https://podcasts.apple.com/gb/podcast/developer-advocate-stories/id1527645854"
                className="hover:underline"
              >
                Developer Advocate Stories
              </a>
            </li>
            <li className="dark:text-[#bfbfbf]">
              <a
                href="https://www.communitypulse.io/"
                className="hover:underline"
              >
                Community Pulse
              </a>
            </li>
            <li className="dark:text-[#bfbfbf]">
              <a
                href="https://www.devrelx.com/podcast"
                className="hover:underline"
              >
                The DevRelX podcast
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
