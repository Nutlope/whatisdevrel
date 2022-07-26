/* eslint-disable react/no-unescaped-entities */

export default function Summary() {
  return (
    <div className='mx-auto mt-10 max-w-3xl text-center md:mt-20 '>
      <h1 className='text-3xl dark:text-white md:text-5xl'>
        What is Developer Relations?
      </h1>
      <div className='flex'>
        <div className='text-left '>
          <p className=' mt-5 mb-5 dark:text-[#bfbfbf] '>
            If you've been hearing about DevRel and are confused what it means
            and how to get a job doing it, this website is for you. We're going
            to define what is it, explore the 3 types of devrel, discuss how to
            get a job doing it{" "}
            <span className='italic'>
              (and share companies that are hiring)
            </span>
            , and end with some resources and advice for aspiring and beginner
            DevRels.
          </p>
          <p className='dark:text-[#bfbfbf]'>
            DevRel, also known as Developer Relations or Developer Advocacy, is
            a role that exists at developer tool companies (companies whose
            target market is developers). Developer Advocates{" "}
            <span className='underline decoration-gray-600 decoration-dotted underline-offset-4'>
              help educate developers on a specific product or technology
            </span>{" "}
            through building community, creating content, and improving the
            developer experience of a product.
          </p>
        </div>
      </div>
    </div>
  );
}
