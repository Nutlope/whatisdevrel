export default function ThreePillars() {
  return (
    <div className="container mx-auto max-w-6xl px-4">
      <div>
        <div className="grid grid-cols-1 justify-evenly gap-10 pt-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full  transform overflow-hidden rounded-lg text-center shadow transition duration-200 ease-in hover:scale-105 hover:shadow-2xl">
            <div className="w-full border-b  border-gray-800 py-5">
              <h2 className="text-3xl font-semibold  dark:text-white">
                Community
              </h2>
            </div>
            <div>
              <div className="my-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-stroke mx-auto h-12 w-12 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="pt-2 text-sm text-gray-500">
                  The Community Builder
                </p>
              </div>
              <div className="mb-10 text-lg font-light leading-8 ">
                <ul>
                  <li className="dark:text-[#bfbfbf]">Organizing events</li>
                  <li className="dark:text-[#bfbfbf]">Doing livestreams</li>
                  <li className="dark:text-[#bfbfbf]">
                    Discord/Slack community
                  </li>
                  <li className="dark:text-[#bfbfbf]">
                    Talking to users for feedback
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full transform overflow-hidden rounded-lg text-center shadow transition duration-200 ease-in hover:scale-105 hover:shadow-2xl">
            <div className="w-full  border-b border-gray-800 py-5">
              <h2 className="text-3xl font-semibold  dark:text-white">
                Content
              </h2>
            </div>
            <div className="">
              <div className="my-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-stroke mx-auto h-12 w-12 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                <p className="pt-2 text-sm text-gray-500">
                  The Developer Educator
                </p>
              </div>
              <div className="mb-10 text-lg font-light leading-8">
                <ul>
                  <li className="dark:text-[#bfbfbf]">Writing blogs</li>
                  <li className="dark:text-[#bfbfbf]">Making videos</li>
                  <li className="dark:text-[#bfbfbf]">Doing courses</li>
                  <li className="dark:text-[#bfbfbf]">
                    Speaking at conferences
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full transform overflow-hidden rounded-lg text-center shadow transition duration-200 ease-in hover:scale-105 hover:shadow-2xl">
            <div className="w-full border-b border-gray-800 py-5">
              <h2 className="text-3xl font-semibold dark:text-white">
                Product
              </h2>
            </div>
            <div>
              <div className="my-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-stroke mx-auto h-12 w-12 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <p className="pt-2 text-sm text-gray-500">
                  The Developer Experience Engineer
                </p>
              </div>
              <div className="mb-10 text-lg font-light leading-8">
                <ul>
                  <li className="dark:text-[#bfbfbf]">Iterating on docs</li>
                  <li className="dark:text-[#bfbfbf]">
                    Coding examples & starters
                  </li>
                  <li className="dark:text-[#bfbfbf]">
                    Working on integrations
                  </li>
                  <li className="dark:text-[#bfbfbf]">
                    Improving the overall DX
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
