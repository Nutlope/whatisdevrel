export default function Header({ scrollHandler }) {
  return (
    //   TODO: Think about if I need the following to move to sm:
    <header className="relative pb-10 pt-20 text-center md:grid md:min-h-screen md:place-items-center md:px-6 md:pt-0">
      <div className="mx-auto max-w-max">
        <h3 className="inline text-5xl font-extrabold tracking-tighter sm:text-8xl">
          whatisdevrel.com
        </h3>
        <div className="mt-1 mb-6">
          <h3 className="py-3 px-8 text-xl font-normal text-gray-300 md:text-2xl">
            All you need to know about devrel and how to get into it.
          </h3>
        </div>
        <button
          title="Go to DevRel at a glance"
          onClick={scrollHandler}
          aria-hidden="true"
          className="mx-auto flex w-9/12 cursor-pointer items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 font-medium text-black hover:bg-gray-200 md:px-10 md:text-lg"
        >
          Get started →
        </button>
      </div>
    </header>
  );
}
