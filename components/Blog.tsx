import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <div className="container relative md:mt-24 mt-16">
  <div className="grid grid-cols-1 pb-6 text-center">
    <h3 className="mb-6 md:text-2xl text-xl font-medium">Blogs &amp; News</h3>
    <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">
      This is just a simple text made for this unique and awesome template, you
      can replace it with any text.
    </p>
  </div>
  {/*end grid*/}
  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
    <div className="group">
      <div className="relative overflow-hidden rounded-xl shadow-md dark:shadow-gray-700">
        <Image src="/assets/images/blog/1.jpg" className="" alt="" />
        <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500" />
        <div className="absolute start-4 bottom-4 opacity-0 group-hover:opacity-100 flex items-center duration-500">
          <Image
            src="/assets/images/team/01.jpg"
            className="h-9 w-9 rounded-xl"
            alt=""
          />
          <div className="ms-2">
            <a href="" className="text-white hover:text-orange-500 text-[15px]">
              Calvin Carlo
            </a>
            <p className="text-white/70 text-sm">5 Min Read</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <a
          href="blog-detail.html"
          className="title text-lg font-medium hover:text-orange-500 duration-500"
        >
          Design your apps in your own way
        </a>
        <p className="text-slate-400 dark:text-white/60 mt-3">
          The phrasal sequence of the is now so that many campaign and benefit
        </p>
        <div className="mt-3">
          <a href="blog-detail.html" className="hover:text-orange-500">
            Read More <i className="mdi mdi-arrow-right align-middle" />
          </a>
        </div>
      </div>
    </div>
    {/*end content*/}
    <div className="group">
      <div className="relative overflow-hidden rounded-xl shadow-md dark:shadow-gray-700">
        <Image src="/assets/images/blog/2.jpg" className="" alt="" />
        <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500" />
        <div className="absolute start-4 bottom-4 opacity-0 group-hover:opacity-100 flex items-center duration-500">
          <Image
            src="/assets/images/team/01.jpg"
            className="h-9 w-9 rounded-xl"
            alt=""
          />
          <div className="ms-2">
            <a href="" className="text-white hover:text-orange-500 text-[15px]">
              Calvin Carlo
            </a>
            <p className="text-white/70 text-sm">5 Min Read</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <a
          href="blog-detail.html"
          className="title text-lg font-medium hover:text-orange-500 duration-500"
        >
          How apps is changing the IT world
        </a>
        <p className="text-slate-400 dark:text-white/60 mt-3">
          The phrasal sequence of the is now so that many campaign and benefit
        </p>
        <div className="mt-3">
          <a href="blog-detail.html" className="hover:text-orange-500">
            Read More <i className="mdi mdi-arrow-right align-middle" />
          </a>
        </div>
      </div>
    </div>
    {/*end content*/}
    <div className="group">
      <div className="relative overflow-hidden rounded-xl shadow-md dark:shadow-gray-700">
        <Image src="/assets/images/blog/3.jpg" className="" alt="" />
        <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500" />
        <div className="absolute start-4 bottom-4 opacity-0 group-hover:opacity-100 flex items-center duration-500">
          <Image
            src="/assets/images/team/01.jpg"
            className="h-9 w-9 rounded-xl"
            alt=""
          />
          <div className="ms-2">
            <a href="" className="text-white hover:text-orange-500 text-[15px]">
              Calvin Carlo
            </a>
            <p className="text-white/70 text-sm">5 Min Read</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <a
          href="blog-detail.html"
          className="title text-lg font-medium hover:text-orange-500 duration-500"
        >
          Smartest Applications for Business
        </a>
        <p className="text-slate-400 dark:text-white/60 mt-3">
          The phrasal sequence of the is now so that many campaign and benefit
        </p>
        <div className="mt-3">
          <a href="blog-detail.html" className="hover:text-orange-500">
            Read More <i className="mdi mdi-arrow-right align-middle" />
          </a>
        </div>
      </div>
    </div>
    {/*end content*/}
  </div>
  {/*end grid*/}
</div>

  )
}

export default Blog
