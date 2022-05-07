export default function Header({ scrollHandler }) {
  return (
    //   TODO: Think about if I need the following to move to sm:
    <header className="relative pb-10 pt-20 text-center md:grid md:min-h-screen md:place-items-center md:px-6 md:pt-0">
      <div className="mx-auto max-w-max">
        <div className="w-full">
          <span className="text-5xl font-extrabold tracking-tight sm:text-8xl">
            whatisdevrel
          </span>
          <span className="text-3xl font-semibold tracking-tighter text-blue-500 sm:text-5xl">
            .com
          </span>
        </div>
        <div className="mt-1 mb-6">
          <h1 className="py-3 px-8 text-xl font-normal italic text-gray-300 md:text-2xl">
            All you need to know about{" "}
            <span className="text-blue-500">DevRel</span> and how to get into
            it.
          </h1>
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
      {/* <div className="flex h-28 w-full items-center justify-evenly">
        <div className="bg-red-500">Hey</div>
        <div className="bg-blue-500">to</div>
        <div className="bg-purple-500">the</div>
        <div className="bg-yellow-500">world</div>
      </div> */}
    </header>
  );
}
