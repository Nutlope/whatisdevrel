export default function Newsletter() {
  return (
    <div className="mt-10 bg-gray-800">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:py-16 lg:px-8">
        <div className="lg:w-0 lg:flex-1">
          <h2
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            id="newsletter-headline"
          >
            Sign up for the devrel newsletter
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
            Get a monthly email from us on the latest devrel jobs and articles.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border border-transparent px-5 py-3 text-black placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Notify me
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm text-gray-300">
            We care about email spam. Get only 1 email a month.
          </p>
        </div>
      </div>
    </div>
  );
}
