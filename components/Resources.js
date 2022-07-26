/* eslint-disable react/no-unescaped-entities */
// TODO: Convert this into a compoment then map through
// TODO: Apply the styles in the first div to the rest

export default function Resources() {
  return (
    <div className='mx-auto mt-10 max-w-3xl'>
      <div className='mx-auto mt-14 max-w-2xl border-t border-gray-500 pt-6'></div>
      <h1 className='mt-4 mb-8 w-full text-center text-5xl sm:text-6xl'>
        DevRel Resources
      </h1>
      <div className='mt-6 grid gap-16 pt-6 text-center md:grid-cols-2 md:gap-x-5 md:gap-y-12'>
        <div className='flex flex-col'>
          <h2 className='mb-3 text-3xl text-white'>Books </h2>
          <ul className='flex list-inside list-disc flex-col text-left md:self-center'>
            <li>
              <a
                href='https://www.amazon.com/Business-Value-Developer-Relations-Communities/dp/1484237471/ref=pd_sbs_1/137-5281060-5988909?pd_rd_w=j1ksT&pf_rd_p=f8e24c42-8be0-4374-84aa-bb08fd897453&pf_rd_r=5J80EP23D4HT23HFJA2K&pd_rd_r=fe52f5c1-5dcc-4f78-914f-126eac837a09&pd_rd_wg=jAKKa&pd_rd_i=1484237471&psc=1'
                className='hover:font-bold'
              >
                Business Value of Developer Relations
              </a>
            </li>
            <li>
              <a href='https://devrel.weavr.ai/' className='hover:font-bold'>
                The DevRel Handbook
              </a>
            </li>
            <li>
              <a
                href='https://learn.samjulien.com/getting-started-in-developer-relations'
                className='hover:font-bold'
              >
                Getting Started in Developer Relations
              </a>
            </li>
            <li>
              <a
                href='https://www.stephaniemorillo.co/product-page/the-developer-s-guide-to-content-creation'
                className='hover:font-bold'
              >
                Developer's Guide to Content Creation
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h2 className='mb-3 text-3xl text-white'>Blogs </h2>
          <ul className='flex list-inside list-disc flex-col text-left md:self-center'>
            <li>
              <a
                href='https://www.swyx.io/ideas?filter=devrel'
                className='hover:font-bold'
              >
                Swyx's blog
              </a>
            </li>
            <li>
              <a
                href='https://theworst.dev/content'
                className='hover:font-bold'
              >
                Kurt Kemple's blog
              </a>
            </li>
            <li>
              <a
                href='https://www.stephaniemorillo.co/blog'
                className='hover:font-bold'
              >
                StephanieMorillo's Blog
              </a>
            </li>
            <li>
              <a
                href='https://www.marythengvall.com/blog/category/DevRel'
                className='hover:font-bold'
              >
                Mary Thengvall's Blog
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h2 className='mb-3 text-3xl text-white'>Articles </h2>
          <ul className='flex list-inside list-disc flex-col text-left md:self-center'>
            <li>
              <a
                href='https://dev.to/dabit3/7-tips-for-breaking-into-devrel-7jk'
                className='hover:font-bold'
              >
                7 tips for breaking into DevRel
              </a>
            </li>
            <li>
              <a
                href='https://helenmin.com/blog/marketing-to-developers'
                className='hover:font-bold'
              >
                Developer Marketing
              </a>
            </li>
            <li>
              <a
                href='https://theworst.dev/developer-experience'
                className='hover:font-bold'
              >
                Redefining Developer Experience
              </a>
            </li>
            <li>
              <a
                href='https://www.swyx.io/community-builder'
                className='hover:font-bold'
              >
                Technical community builders
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h2 className='mb-3 text-3xl text-white'>Podcasts </h2>
          <ul className='flex list-inside list-disc flex-col text-left md:self-center'>
            <li>
              <a href='https://devrelrad.io/' className='hover:font-bold'>
                DevRel Radio
              </a>
            </li>
            <li>
              <a
                href='https://podcasts.apple.com/gb/podcast/developer-advocate-stories/id1527645854'
                className='hover:font-bold'
              >
                Developer Advocate Stories
              </a>
            </li>
            <li>
              <a
                href='https://www.communitypulse.io/'
                className='hover:font-bold'
              >
                Community Pulse
              </a>
            </li>
            <li>
              <a
                href='https://www.devrelx.com/podcast'
                className='hover:font-bold'
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
