export default function Header() {
  return (
    <header className="relative px-4 pb-10 text-center sm:px-6 md:grid md:min-h-screen md:place-items-center">
      <div className="mx-auto max-w-max">
        <div className="w-full">
          <span className="text-5xl font-extrabold tracking-tighter text-gray-900 dark:text-white sm:text-8xl">
            whatisdevrel
          </span>
          <span className="text-3xl font-semibold tracking-tight text-blue-500 sm:text-5xl">
            .com
          </span>
        </div>
        <div className="mt-4 mb-8">
          <h1 className="py-3 px-8 text-2xl font-normal italic text-gray-800 dark:text-gray-300">
            All you need to know about{" "}
            <span className="text-blue-500">DevRel</span> and how to get into
            it.
          </h1>
        </div>
        <a
          title="Go to DevRel at a glance"
          href="#devrel-at-a-glance"
          aria-hidden="true"
          className="animate-pulse cursor-pointer scroll-smooth rounded-md border border-transparent bg-blue-500 px-5 py-3 font-medium text-white hover:bg-blue-900 "
        >
          {" "}
          Learn more
        </a>
      </div>
    </header>
  );
}
