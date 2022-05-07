export default function Header() {
  return (
    <header className="relative px-4 pb-10 pt-20 text-center md:grid md:min-h-screen md:place-items-center md:px-6 md:pt-0">
      <div className="mx-auto max-w-max">
        <div className="w-full">
          <span className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-8xl">
            whatisdevrel
          </span>
          <span className="text-3xl font-semibold tracking-tighter text-blue-500 sm:text-5xl">
            .com
          </span>
        </div>
        <div className="mt-2 mb-6">
          <h1 className="py-3 px-8 text-xl font-normal italic text-gray-800 dark:text-gray-300 md:text-2xl">
            All you need to know about{" "}
            <span className="text-blue-500">DevRel</span> and how to get into
            it.
          </h1>
        </div>
        <a
          title="Go to DevRel at a glance"
          href="#devrel-at-a-glance"
          aria-hidden="true"
          className="flex items-center justify-center scroll-smooth rounded-md border border-transparent bg-blue-500 px-8 py-3 font-medium text-white hover:bg-blue-700 md:w-full md:py-4 md:px-10 md:text-lg"
        >
          {" "}
          Learn more
        </a>
      </div>
    </header>
  );
}
