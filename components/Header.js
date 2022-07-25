export default function Header({ scrollHandler }) {
  return (
    //   TODO: Think about if I need the following to move to sm:
    <header className="relative pb-10 pt-20 text-center md:grid md:min-h-screen md:place-items-center md:px-6 md:pt-0">
      <div className="mx-auto max-w-max">
        <h3 className="w-full">
          <span className="globalHeading text-5xl font-extrabold tracking-tight sm:text-8xl">
            whatisdevrel
          </span>
          <span className="globalHeading text-3xl font-semibold tracking-tighter !text-blue-500 sm:text-5xl">
            .com
          </span>
        </h3>
        <div className="mt-1 mb-6">
          <h3 className="py-3 px-8 text-xl font-normal text-gray-300 md:text-2xl">
            All you need to know about{" "}
            <span className="text-blue-500">DevRel</span> and how to get into
            it.
          </h3>
        </div>
        <a
          title="Go to DevRel at a glance"
          onClick={scrollHandler}
          aria-hidden="true"
          className="mx-12 flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-blue-500 px-8 py-3 font-medium hover:bg-blue-700 md:px-10 md:text-lg"
        >
          {" "}
          Get started
        </a>
      </div>
    </header>
  );
}
