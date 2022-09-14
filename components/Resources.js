const resourceCategories = [
  {
    title: "Books",
    resources: [
      {
        name: "Business Value of Developer Relations",
        url: "https://www.amazon.com/Business-Value-Developer-Relations-Communities/dp/1484237471/ref=pd_sbs_1/137-5281060-5988909?pd_rd_w=j1ksT&pf_rd_p=f8e24c42-8be0-4374-84aa-bb08fd897453&pf_rd_r=5J80EP23D4HT23HFJA2K&pd_rd_r=fe52f5c1-5dcc-4f78-914f-126eac837a09&pd_rd_wg=jAKKa&pd_rd_i=1484237471&psc=1",
      },
      {
        name: "The DevRel Handbook",
        url: "https://devrel.weavr.ai/",
      },
      {
        name: "Getting Started in Developer Relations",
        url: "https://learn.samjulien.com/getting-started-in-developer-relations",
      },
      {
        name: "Developer's Guide to Content Creation",
        url: "https://www.stephaniemorillo.co/product-page/the-developer-s-guide-to-content-creation",
      },
    ],
  },
  {
    title: "Blogs",
    resources: [
      {
        name: "Swyx's blog",
        url: "https://www.swyx.io/ideas?filter=devrel",
      },
      {
        name: "Kurt Kemple's blog",
        url: "https://theworst.dev/content",
      },
      {
        name: "StephanieMorillo's Blog",
        url: "https://www.stephaniemorillo.co/blog",
      },
      {
        name: "Mary Thengvall's Blog",
        url: "https://www.marythengvall.com/blog/category/DevRel",
      },
    ],
  },
  {
    title: "Articles",
    resources: [
      {
        name: "7 tips for breaking into DevRel",
        url: "https://dev.to/dabit3/7-tips-for-breaking-into-devrel-7jk",
      },
      {
        name: "Developer Marketing",
        url: "https://helenmin.com/blog/marketing-to-developers",
      },
      {
        name: "Technical community builders",
        url: "https://www.swyx.io/community-builder",
      },
      {
        name: "Doing DevRel Today",
        url: "https://dev.to/jacobandrewsky/what-is-devrel-and-how-can-you-start-doing-it-today-lpc",
      },
    ],
  },
  {
    title: "Podcasts",
    resources: [
      {
        name: "DevRel Radio",
        url: "https://devrelrad.io/",
      },
      {
        name: "Developer Advocate Stories",
        url: "https://podcasts.apple.com/gb/podcast/developer-advocate-stories/id1527645854",
      },
      {
        name: "Community Pulse",
        url: "https://www.communitypulse.io/",
      },
      {
        name: "The DevRelX podcast",
        url: "https://www.devrelx.com/podcast",
      },
    ],
  },
];

export default function Resources() {
  return (
    <div className="section container border-t border-gray-700 pt-6">
      <h2 className="title text-3xl md:text-5xl">DevRel Resources</h2>
      <div className="mt-6 grid gap-16 pt-6 md:grid-cols-2">
        {/* Resource Category */}
        {resourceCategories.map((resourceCategory, i) => {
          return (
            <div
              className="border-t border-gray-300 pt-4 dark:border-gray-700"
              key={i}
            >
              <h2 className="title mb-3 text-3xl">{resourceCategory.title}</h2>
              <ul className="list-inside list-disc">
                {/* Resources List */}
                {resourceCategory.resources.map((resource, i) => {
                  return (
                    <li key={i}>
                      <a
                        href={resource.url}
                        className="link no-underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resource.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
