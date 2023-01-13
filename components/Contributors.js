import Image from "next/future/image";

export default function Contributors() {
  const contributors = [
    {
      name: "Hassan El Mghari",
      role: "Vercel",
      imageUrl: "/hassan_grayscale.png",
      twitterUrl: "https://twitter.com/nutlope",
      websiteUrl: "https://www.elmghari.com/",
    },
    {
      name: "Lee Robinson",
      role: "Vercel",
      imageUrl: "/lee_grayscale.png",
      twitterUrl: "https://twitter.com/leeerob",
      websiteUrl: "https://leerob.io/",
    },
    {
      name: "Camila Ramos",
      role: "Edge & Node",
      imageUrl: "/cami_grayscale.png",
      twitterUrl: "https://twitter.com/camiinthisthang",
      websiteUrl:
        "https://www.youtube.com/channel/UCyEnr-lcCUavJzh0uodvG3w/videos",
    },
    {
      name: "Shawn Wang",
      role: "DX Tips",
      imageUrl: "/swyx_grayscale.png",
      twitterUrl: "https://twitter.com/swyx",
      websiteUrl: "https://swyx.io/",
    },
  ];
  return (
    <section className="section container border-t border-gray-700 pt-6 text-center">
      <h2 className="title mb-4 text-3xl md:text-5xl">Authors</h2>
      <p>This content has been created and reviewed by the following people.</p>
      <ul
        role="list"
        className="mt-12 space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 md:grid-cols-3 lg:max-w-5xl lg:grid-cols-4"
      >
        {contributors.map((person) => (
          <li key={person.name} className="flex flex-col items-center">
            <Image
              className="mb-6 aspect-square w-48 rounded-full"
              src={person.imageUrl}
              alt={`Picture of ${person.name}`}
              width="180"
              height="180"
            />
            <h3 className="title font-mediumtext-lg mb-1 font-sans font-medium leading-6">
              {person.name}
            </h3>
            <p className="text-base">{person.role}</p>
            <ul className="mt-3 flex justify-center">
              {/* Twitter */}
              <li>
                <a
                  href={person.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link block rounded-md p-3 hover:bg-gray-500/10"
                >
                  <span className="sr-only">{person.name} Twitter</span>
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

              {/* Website */}
              <li>
                <a
                  href={person.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link rounded-md p-3 hover:bg-gray-500/10"
                >
                  <span className="sr-only">{person.name} Website</span>
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
          </li>
        ))}
      </ul>
    </section>
  );
}
