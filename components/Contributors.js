import Image from "next/image";

export default function Contributors() {
  const contributors = [
    {
      name: "Hassan El Mghari",
      role: "Vercel",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1256749436941881344/5WV3lmDm_400x400.jpg",
      twitterUrl: "https://twitter.com/nutlope",
      websiteUrl: "https://www.elmghari.com/",
    },
    {
      name: "Lee Robinson",
      role: "Vercel",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1194080814688079872/6qhYKGKC_400x400.jpg",
      twitterUrl: "https://twitter.com/leeerob",
      websiteUrl: "https://leerob.io/",
    },
    {
      name: "Camila Ramos",
      role: "Edge & Node",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1546136399593742337/rly9Gj4G_400x400.jpg",
      twitterUrl: "https://twitter.com/camiinthisthang",
      websiteUrl:
        "https://www.youtube.com/channel/UCyEnr-lcCUavJzh0uodvG3w/videos",
    },
    {
      name: "Shawn Wang",
      role: "DX Tips",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1510319731466993664/tGoqnzGK_400x400.jpg",
      twitterUrl: "https://twitter.com/swyx",
      websiteUrl: "https://swyx.io/",
    },
  ];
  return (
    <div className="mx-auto mb-10 max-w-7xl px-4 text-center sm:px-6">
      <div className="mx-auto mt-14 max-w-2xl border-t border-blue-500 py-6 pt-6"></div>
      <div className="space-y-12">
        <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 className="text-5xl sm:text-6xl">Contributors</h2>
          <p className="text-xl text-gray-500">
            This content has been created and reviewed by the following people.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-4"
        >
          {contributors.map((person) => (
            <li key={person.name}>
              <div className="space-y-6">
                <Image
                  className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                  src={person.imageUrl}
                  alt=""
                  width="200"
                  height="200"
                />
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <p>{person.name}</p>
                    <p className="font-bold">{person.role}</p>
                  </div>
                  <ul role="list" className="flex justify-center space-x-5">
                    <li>
                      <a
                        href={person.twitterUrl}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href={person.websiteUrl}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Website</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
