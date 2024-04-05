import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
    <div className="container relative lg:mt-24 mt-16">
  <div className="grid grid-cols-1 pb-6 text-center">
    <h3 className="mb-4 md:text-2xl text-xl font-medium">Meet Our Teammates</h3>
    <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">
      This is just a simple text made for this unique and awesome template, you
      can replace it with any text.
    </p>
  </div>
  {/*end grid*/}
  <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
    <div className="lg:col-span-3 md:col-span-6">
      <div className="group text-center">
        <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
          <Image src="/assets/images/team/04.jpg" width={200} height={200} className="" alt="" />
          <ul className="list-none absolute top-1/2 -translate-y-1/2 -end-20 group-hover:end-5 transition-all duration-500 ease-in-out">
            <li className="">
              <a
                href=""
                className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-facebook h-4 w-4"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </li>
            <li className="mt-1">
              <a
                href=""
                className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram h-4 w-4"
                >
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </li>
            <li className="mt-1">
              <a
                href=""
                className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-linkedin h-4 w-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x={2} y={9} width={4} height={12} />
                  <circle cx={4} cy={4} r={2} />
                </svg>
              </a>
            </li>
          </ul>
          {/*end icon*/}
        </div>
        <div className="content mt-3">
          <a
            href=""
            className="text-lg font-medium hover:text-orange-500 duration-500"
          >
            Jack John
          </a>
          <p className="text-slate-400 dark:text-white/60">Designer</p>
        </div>
      </div>
    </div>
    <div className="lg:col-span-3 md:col-span-6">
      <div className="group text-center">
        <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
          <Image src="/assets/images/team/05.jpg" width={200} height={200} className="" alt="" />
          <ul className="list-none absolute top-1/2 -translate-y-1/2 -end-20 group-hover:end-5 transition-all duration-500 ease-in-out">
            <li className="">
              <a
                href=""
                className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-facebook h-4 w-4"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </li>
            <li className="mt-1">
              <a
                href=""
                className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram h-4 w-4"
                >
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </li>
            <li className="mt-1">
              <a
                href=""
                className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-linkedin h-4 w-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x={2} y={9} width={4} height={12} />
                  <circle cx={4} cy={4} r={2} />
                </svg>
              </a>
            </li>
          </ul>
          {/*end icon*/}
        </div>
        <div className="content mt-3">
          <a
            href=""
            className="text-lg font-medium hover:text-orange-500 duration-500"
          >
            Krista John
          </a>
          <p className="text-slate-400 dark:text-white/60">Designer</p>
        </div>
      </div>
    </div>
    <div className="lg:col-span-3 md:col-span-6">
      <div className="group text-center">
        <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
          <Image src="/assets/images/team/06.jpg" width={200} height={200} className="" alt="" />
          <ul className="list-none absolute top-1/2 -translate-y-1/2 -end-20 group-hover:end-5 transition-all duration-500 ease-in-out">
            <li className="">
              <a
                href=""
                className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-facebook h-4 w-4"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </li>
            <li className="mt-1">
              <a
                href=""
                className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram h-4 w-4"
                >
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </li>
            <li className="mt-1">
              <a
                href=""
                className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-linkedin h-4 w-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x={2} y={9} width={4} height={12} />
                  <circle cx={4} cy={4} r={2} />
                </svg>
              </a>
            </li>
          </ul>
          {/*end icon*/}
        </div>
        <div className="content mt-3">
          <a
            href=""
            className="text-lg font-medium hover:text-orange-500 duration-500"
          >
            Roger Jackson
          </a>
          <p className="text-slate-400 dark:text-white/60">Designer</p>
        </div>
      </div>
    </div>
    <div className="lg:col-span-3 md:col-span-6">
      <div className="group text-center">
        <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
          <Image src="/assets/images/team/07.jpg" width={200} height={200} className="" alt="" />
          <ul className="list-none absolute top-1/2 -translate-y-1/2 -end-20 group-hover:end-5 transition-all duration-500 ease-in-out">
            <li className="">
              <a
                href=""
                className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-facebook h-4 w-4"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </li>
            <li className="mt-1">
              <a
                href=""
                className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram h-4 w-4"
                >
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </li>
            <li className="mt-1">
              <a
                href=""
                className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-linkedin h-4 w-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x={2} y={9} width={4} height={12} />
                  <circle cx={4} cy={4} r={2} />
                </svg>
              </a>
            </li>
          </ul>
          {/*end icon*/}
        </div>
        <div className="content mt-3">
          <a
            href=""
            className="text-lg font-medium hover:text-orange-500 duration-500"
          >
            Johnny English
          </a>
          <p className="text-slate-400 dark:text-white/60">Designer</p>
        </div>
      </div>
    </div>
  </div>
  {/*end grid*/}
</div>

  )
}

export default Team
