export default function Summary({ setReftoElement }) {
  return (
    <div className="mx-auto max-w-max text-center">
      <div>
        <h1 ref={setReftoElement}> DevRel at a glance</h1>
        <p>DevRel is super hot rn and great, let us explore</p>
      </div>

      <div className="right">
        <img src="/pillars.jpeg" />
      </div>

      {/* TODO: Need to grab icons for those 4 boxes */}
      <div className="mb-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
        <a
          className="hover:bg-secondary h-full rounded border p-3"
          href="#somewhere"
        >
          <div className="inline-block h-[24px] w-[24px]">SVG </div>
          <h3 className="text-primary mb-sm text-lg font-semibold">
            What is DevRel?
          </h3>
        </a>
        <a
          className="hover:bg-secondary h-full rounded border p-3"
          href="#somewhere"
        >
          <div className="inline-block h-[24px] w-[24px]">SVG </div>
          <h3 className="text-primary mb-sm text-lg font-semibold">
            The 3 types of DevRel
          </h3>
        </a>
        <a
          className="hover:bg-secondary h-full rounded border p-3"
          href="#somewhere"
        >
          <div className="inline-block h-[24px] w-[24px]">SVG </div>
          <h3 className="text-primary mb-sm text-lg font-semibold">
            How to get hired in DevRel
          </h3>
        </a>
        <a
          className="hover:bg-secondary h-full rounded border p-3"
          href="#somewhere"
        >
          <div className="inline-block h-[24px] w-[24px]">SVG </div>
          <h3 className="text-primary mb-sm text-lg font-semibold">
            DevRel resources
          </h3>
        </a>
      </div>
    </div>
  );
}
