import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className="container relative md:mt-24 mt-16">
  <div className="grid grid-cols-1 pb-6 text-center">
    <h3 className="mb-6 md:text-2xl text-xl font-medium">Our Projects</h3>
    <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">
      This is just a simple text made for this unique and awesome template, you
      can replace it with any text.
    </p>
  </div>
  {/*end grid*/}
  <div className="grid grid-cols-1 items-center mt-6 gap-6">
    <div className="filters-group-wrap text-center">
      <div className="filters-group">
        <ul className="mb-0 list-none container-filter filter-options space-x-3">
          <li
            className="inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500"
            data-group="all"
          >
            All
          </li>
          <li
            className="inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500 active"
            data-group="branding"
          >
            Branding
          </li>
          <li
            className="inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500"
            data-group="designing"
          >
            Designing
          </li>
          <li
            className="inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500"
            data-group="photography"
          >
            Photography
          </li>
          <li
            className="inline-block font-medium text-[15px] mb-3 text-slate-400 cursor-pointer relative duration-500"
            data-group="development"
          >
            Development
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/*grid*/}
  <div
    id="grid"
    className="md:flex w-full justify-center mx-auto mt-4 shuffle"
    style={{
      position: "relative",
      overflow: "hidden",
      height: 560,
      transition: "height 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
    }}
  >
    <div
      className="lg:w-1/4 md:w-1/3 p-3 picture-item shuffle-item shuffle-item--visible"
      data-groups='["branding"]'
      style={{
        position: "absolute",
        top: 0,
        visibility: "visible",
        willChange: "transform",
        left: 0,
        opacity: 1,
        transitionDuration: "250ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionProperty: "transform, opacity",
        transform: "translate(0px, 0px) scale(1)"
      }}
    >
      <div className="group relative block rounded-xl duration-700 ease-in-out">
        <div className="relative overflow-hidden rounded-xl">
          <a
            href="assets/images/portfolio/1.jpg"
            className="lightbox tobii-zoom"
            title=""
          >
            <Image
              src="/assets/images/portfolio/1.jpg"
              className="rounded-xl"
              width={256}
              height={256}
              alt="PRO"
            />
            <div className="tobii-zoom__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M21 16v5h-5" />
                <path d="M8 21H3v-5" />
                <path d="M16 3h5v5" />
                <path d="M3 8V3h5" />
              </svg>
            </div>
          </a>
        </div>
        <div className="content duration-700 ease-in-out">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl absolute z-10 bottom-3 start-3 duration-700 ease-in-out scale-0 group-hover:scale-100">
            <a
              href="portfolio-detail-three.html"
              className="h6 text-[15px] font-medium hover:text-orange-500 duration-500 ease-in-out"
            >
              Mockup Collection
            </a>
            <p className="text-slate-400 dark:text-white/60 mb-0">Abstract</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-orange-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1" />
      </div>
    </div>
    <div
      className="lg:w-1/4 md:w-1/3 p-3 picture-item shuffle-item shuffle-item--hidden"
      data-groups='["designing"]'
      style={{
        position: "absolute",
        top: 0,
        visibility: "hidden",
        willChange: "transform",
        left: 0,
        opacity: 0,
        transform: "translate(280px, 0px) scale(0.001)",
        transitionDuration: "250ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionProperty: "transform, opacity"
      }}
      aria-hidden="true"
    >
      <div className="group relative block rounded-xl duration-700 ease-in-out">
        <div className="relative overflow-hidden rounded-xl">
          <a
            href="assets/images/portfolio/2.jpg"
            className="lightbox tobii-zoom"
            title=""
          >
            <Image
              src="/assets/images/portfolio/2.jpg"
              className="rounded-xl"
              width={256}
              height={256}
              alt="PRO"
            />
            <div className="tobii-zoom__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M21 16v5h-5" />
                <path d="M8 21H3v-5" />
                <path d="M16 3h5v5" />
                <path d="M3 8V3h5" />
              </svg>
            </div>
          </a>
        </div>
        <div className="content duration-700 ease-in-out">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl absolute z-10 bottom-3 start-3 duration-700 ease-in-out scale-0 group-hover:scale-100">
            <a
              href="portfolio-detail-three.html"
              className="h6 text-[15px] font-medium hover:text-orange-500 duration-500 ease-in-out"
            >
              Mockup Collection
            </a>
            <p className="text-slate-400 dark:text-white/60 mb-0">Abstract</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-orange-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1" />
      </div>
    </div>
    <div
      className="lg:w-1/4 md:w-1/3 p-3 picture-item shuffle-item shuffle-item--hidden"
      data-groups='["photography"]'
      style={{
        position: "absolute",
        top: 0,
        visibility: "hidden",
        willChange: "transform",
        left: 0,
        opacity: 0,
        transform: "translate(560px, 0px) scale(0.001)",
        transitionDuration: "250ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionProperty: "transform, opacity"
      }}
      aria-hidden="true"
    >
      <div className="group relative block rounded-xl duration-700 ease-in-out">
        <div className="relative overflow-hidden rounded-xl">
          <a
            href="assets/images/portfolio/3.jpg"
            className="lightbox tobii-zoom"
            title=""
          >
            <Image
              src="/assets/images/portfolio/3.jpg"
              className="rounded-xl"
              width={256}
              height={256}
              alt="PRO"
            />
            <div className="tobii-zoom__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M21 16v5h-5" />
                <path d="M8 21H3v-5" />
                <path d="M16 3h5v5" />
                <path d="M3 8V3h5" />
              </svg>
            </div>
          </a>
        </div>
        <div className="content duration-700 ease-in-out">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl absolute z-10 bottom-3 start-3 duration-700 ease-in-out scale-0 group-hover:scale-100">
            <a
              href="portfolio-detail-three.html"
              className="h6 text-[15px] font-medium hover:text-orange-500 duration-500 ease-in-out"
            >
              Mockup Collection
            </a>
            <p className="text-slate-400 dark:text-white/60 mb-0">Abstract</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-orange-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1" />
      </div>
    </div>
    <div
      className="lg:w-1/4 md:w-1/3 p-3 picture-item shuffle-item shuffle-item--hidden"
      data-groups='["development"]'
      style={{
        position: "absolute",
        top: 0,
        visibility: "hidden",
        willChange: "transform",
        left: 0,
        opacity: 0,
        transform: "translate(840px, 0px) scale(0.001)",
        transitionDuration: "250ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionProperty: "transform, opacity"
      }}
      aria-hidden="true"
    >
      <div className="group relative block rounded-xl duration-700 ease-in-out">
        <div className="relative overflow-hidden rounded-xl">
          <a
            href="assets/images/portfolio/4.jpg"
            className="lightbox tobii-zoom"
            title=""
          >
           <Image
              src="/assets/images/portfolio/4.jpg"
              className="rounded-xl"
              width={256}
              height={256}
              alt="PRO"
            />
            <div className="tobii-zoom__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M21 16v5h-5" />
                <path d="M8 21H3v-5" />
                <path d="M16 3h5v5" />
                <path d="M3 8V3h5" />
              </svg>
            </div>
          </a>
        </div>
        <div className="content duration-700 ease-in-out">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl absolute z-10 bottom-3 start-3 duration-700 ease-in-out scale-0 group-hover:scale-100">
            <a
              href="portfolio-detail-three.html"
              className="h6 text-[15px] font-medium hover:text-orange-500 duration-500 ease-in-out"
            >
              Mockup Collection
            </a>
            <p className="text-slate-400 dark:text-white/60 mb-0">Abstract</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-orange-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1" />
      </div>
    </div>
    <div
      className="lg:w-1/4 md:w-1/3 p-3 picture-item shuffle-item shuffle-item--visible"
      data-groups='["branding"]'
      style={{
        position: "absolute",
        top: 0,
        visibility: "visible",
        willChange: "transform",
        left: 0,
        opacity: 1,
        transform: "translate(280px, 0px) scale(1)",
        transitionDuration: "250ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionProperty: "transform, opacity"
      }}
    >
      <div className="group relative block rounded-xl duration-700 ease-in-out">
        <div className="relative overflow-hidden rounded-xl">
          <a
            href="assets/images/portfolio/5.jpg"
            className="lightbox tobii-zoom"
            title=""
          >
            <Image
              src="/assets/images/portfolio/5.jpg"
              className="rounded-xl"
              width={256}
              height={256}
              alt="PRO"
            />
            <div className="tobii-zoom__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M21 16v5h-5" />
                <path d="M8 21H3v-5" />
                <path d="M16 3h5v5" />
                <path d="M3 8V3h5" />
              </svg>
            </div>
          </a>
        </div>
        <div className="content duration-700 ease-in-out">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl absolute z-10 bottom-3 start-3 duration-700 ease-in-out scale-0 group-hover:scale-100">
            <a
              href="portfolio-detail-three.html"
              className="h6 text-[15px] font-medium hover:text-orange-500 duration-500 ease-in-out"
            >
              Mockup Collection
            </a>
            <p className="text-slate-400 dark:text-white/60 mb-0">Abstract</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-orange-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1" />
      </div>
    </div>
    <div
      className="lg:w-1/4 md:w-1/3 p-3 picture-item shuffle-item shuffle-item--visible"
      data-groups='["branding"]'
      style={{
        position: "absolute",
        top: 0,
        visibility: "visible",
        willChange: "transform",
        left: 0,
        opacity: 1,
        transform: "translate(560px, 0px) scale(1)",
        transitionDuration: "250ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionProperty: "transform, opacity"
      }}
    >
      <div className="group relative block rounded-xl duration-700 ease-in-out">
        <div className="relative overflow-hidden rounded-xl">
          <a
            href="assets/images/portfolio/6.jpg"
            className="lightbox tobii-zoom"
            title=""
          >
             <Image
              src="/assets/images/portfolio/6.jpg"
              className="rounded-xl"
              width={256}
              height={256}
              alt="PRO"
            />
            <div className="tobii-zoom__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M21 16v5h-5" />
                <path d="M8 21H3v-5" />
                <path d="M16 3h5v5" />
                <path d="M3 8V3h5" />
              </svg>
            </div>
          </a>
        </div>
        <div className="content duration-700 ease-in-out">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl absolute z-10 bottom-3 start-3 duration-700 ease-in-out scale-0 group-hover:scale-100">
            <a
              href="portfolio-detail-three.html"
              className="h6 text-[15px] font-medium hover:text-orange-500 duration-500 ease-in-out"
            >
              Mockup Collection
            </a>
            <p className="text-slate-400 dark:text-white/60 mb-0">Abstract</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-orange-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1" />
      </div>
    </div>
    <div
      className="lg:w-1/4 md:w-1/3 p-3 picture-item shuffle-item shuffle-item--hidden"
      data-groups='["designing"]'
      style={{
        position: "absolute",
        top: 0,
        visibility: "hidden",
        willChange: "transform",
        left: 0,
        opacity: 0,
        transform: "translate(560px, 280px) scale(0.001)",
        transitionDuration: "250ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionProperty: "transform, opacity"
      }}
      aria-hidden="true"
    >
      <div className="group relative block rounded-xl duration-700 ease-in-out">
        <div className="relative overflow-hidden rounded-xl">
          <a
            href="/assets/images/portfolio/7.jpg"
            className="lightbox tobii-zoom"
            title=""
          >
            <Image
              src="/assets/images/portfolio/7.jpg"
              className="rounded-xl"
              width={256}
              height={256}
              alt="PRO"
            />
            <div className="tobii-zoom__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M21 16v5h-5" />
                <path d="M8 21H3v-5" />
                <path d="M16 3h5v5" />
                <path d="M3 8V3h5" />
              </svg>
            </div>
          </a>
        </div>
        <div className="content duration-700 ease-in-out">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl absolute z-10 bottom-3 start-3 duration-700 ease-in-out scale-0 group-hover:scale-100">
            <a
              href="portfolio-detail-three.html"
              className="h6 text-[15px] font-medium hover:text-orange-500 duration-500 ease-in-out"
            >
              Mockup Collection
            </a>
            <p className="text-slate-400 dark:text-white/60 mb-0">Abstract</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-orange-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1" />
      </div>
    </div>
    <div
      className="lg:w-1/4 md:w-1/3 p-3 picture-item shuffle-item shuffle-item--hidden"
      data-groups='["development"]'
      style={{
        position: "absolute",
        top: 0,
        visibility: "hidden",
        willChange: "transform",
        left: 0,
        opacity: 0,
        transform: "translate(840px, 280px) scale(0.001)",
        transitionDuration: "250ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionProperty: "transform, opacity"
      }}
      aria-hidden="true"
    >
      <div className="group relative block rounded-xl duration-700 ease-in-out">
        <div className="relative overflow-hidden rounded-xl">
          <a
            href="assets/images/portfolio/8.jpg"
            className="lightbox tobii-zoom"
            title=""
          >
           <Image
              src="/assets/images/portfolio/8.jpg"
              className="rounded-xl"
              width={256}
              height={256}
              alt="PRO"
            />
            <div className="tobii-zoom__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M21 16v5h-5" />
                <path d="M8 21H3v-5" />
                <path d="M16 3h5v5" />
                <path d="M3 8V3h5" />
              </svg>
            </div>
          </a>
        </div>
        <div className="content duration-700 ease-in-out">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl absolute z-10 bottom-3 start-3 duration-700 ease-in-out scale-0 group-hover:scale-100">
            <a
              href="portfolio-detail-three.html"
              className="h6 text-[15px] font-medium hover:text-orange-500 duration-500 ease-in-out"
            >
              Mockup Collection
            </a>
            <p className="text-slate-400 dark:text-white/60 mb-0">Abstract</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-orange-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1" />
      </div>
    </div>
    <div
      className="lg:w-1/4 md:w-1/3 p-3 picture-item shuffle-item shuffle-item--hidden"
      data-groups='["photography"]'
      style={{
        position: "absolute",
        top: 0,
        visibility: "hidden",
        willChange: "transform",
        left: 0,
        opacity: 0,
        transform: "translate(0px, 560px) scale(0.001)",
        transitionDuration: "250ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionProperty: "transform, opacity"
      }}
      aria-hidden="true"
    >
      <div className="group relative block rounded-xl duration-700 ease-in-out">
        <div className="relative overflow-hidden rounded-xl">
          <a
            href="assets/images/portfolio/23.jpg"
            className="lightbox tobii-zoom"
            title=""
          >
            <Image
              src="/assets/images/portfolio/23.jpg"
              className="rounded-xl"
              width={256}
              height={256}
              alt="PRO"
            />
            <div className="tobii-zoom__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M21 16v5h-5" />
                <path d="M8 21H3v-5" />
                <path d="M16 3h5v5" />
                <path d="M3 8V3h5" />
              </svg>
            </div>
          </a>
        </div>
        <div className="content duration-700 ease-in-out">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl absolute z-10 bottom-3 start-3 duration-700 ease-in-out scale-0 group-hover:scale-100">
            <a
              href="portfolio-detail-three.html"
              className="h6 text-[15px] font-medium hover:text-orange-500 duration-500 ease-in-out"
            >
              Mockup Collection
            </a>
            <p className="text-slate-400 dark:text-white/60 mb-0">Abstract</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-orange-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1" />
      </div>
    </div>
    <div
      className="lg:w-1/4 md:w-1/3 p-3 picture-item shuffle-item shuffle-item--hidden"
      data-groups='["photography"]'
      style={{
        position: "absolute",
        top: 0,
        visibility: "hidden",
        willChange: "transform",
        left: 0,
        opacity: 0,
        transform: "translate(280px, 560px) scale(0.001)",
        transitionDuration: "250ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionProperty: "transform, opacity"
      }}
      aria-hidden="true"
    >
      <div className="group relative block rounded-xl duration-700 ease-in-out">
        <div className="relative overflow-hidden rounded-xl">
          <a
            href="assets/images/portfolio/20.jpg"
            className="lightbox tobii-zoom"
            title=""
          >
           <Image
              src="/assets/images/portfolio/20.jpg"
              className="rounded-xl"
              width={256}
              height={256}
              alt="PRO"
            />
            <div className="tobii-zoom__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M21 16v5h-5" />
                <path d="M8 21H3v-5" />
                <path d="M16 3h5v5" />
                <path d="M3 8V3h5" />
              </svg>
            </div>
          </a>
        </div>
        <div className="content duration-700 ease-in-out">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl absolute z-10 bottom-3 start-3 duration-700 ease-in-out scale-0 group-hover:scale-100">
            <a
              href="portfolio-detail-three.html"
              className="h6 text-[15px] font-medium hover:text-orange-500 duration-500 ease-in-out"
            >
              Mockup Collection
            </a>
            <p className="text-slate-400 dark:text-white/60 mb-0">Abstract</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-orange-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1" />
      </div>
    </div>
    <div
      className="lg:w-1/4 md:w-1/3 p-3 picture-item shuffle-item shuffle-item--visible"
      data-groups='["branding"]'
      style={{
        position: "absolute",
        top: 0,
        visibility: "visible",
        willChange: "transform",
        left: 0,
        opacity: 1,
        transform: "translate(840px, 0px) scale(1)",
        transitionDuration: "250ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionProperty: "transform, opacity"
      }}
    >
      {/* <div className="group relative block rounded-xl duration-700 ease-in-out">
        <div className="relative overflow-hidden rounded-xl">
          <a
            href="assets/images/portfolio/21.jpg"
            className="lightbox tobii-zoom"
            title=""
          >
            <Image
              src="/assets/images/portfolio/21.jpg"
              className="rounded-xl"
              width={256}
              height={256}
              alt="PRO"
            />
            <div className="tobii-zoom__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M21 16v5h-5" />
                <path d="M8 21H3v-5" />
                <path d="M16 3h5v5" />
                <path d="M3 8V3h5" />
              </svg>
            </div>
          </a>
        </div>
        <div className="content duration-700 ease-in-out">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl absolute z-10 bottom-3 start-3 duration-700 ease-in-out scale-0 group-hover:scale-100">
            <a
              href="portfolio-detail-three.html"
              className="h6 text-[15px] font-medium hover:text-orange-500 duration-500 ease-in-out"
            >
              Mockup Collection
            </a>
            <p className="text-slate-400 dark:text-white/60 mb-0">Abstract</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-orange-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1" />
      </div> */}
    </div>
    <div
      className="lg:w-1/4 md:w-1/3 p-3 picture-item shuffle-item shuffle-item--visible"
      data-groups='["branding"]'
      style={{
        position: "absolute",
        top: 0,
        visibility: "visible",
        willChange: "transform",
        left: 0,
        opacity: 1,
        transform: "translate(0px, 280px) scale(1)",
        transitionDuration: "250ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionProperty: "transform, opacity"
      }}
    >
      {/* <div className="group relative block rounded-xl duration-700 ease-in-out">
        <div className="relative overflow-hidden rounded-xl">
          <a
            href="assets/images/portfolio/22.jpg"
            className="lightbox tobii-zoom"
            title=""
          >
            <Image
              src="assets/images/portfolio/22.jpg"
              className="rounded-xl"
              alt=""
            />
            <div className="tobii-zoom__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M21 16v5h-5" />
                <path d="M8 21H3v-5" />
                <path d="M16 3h5v5" />
                <path d="M3 8V3h5" />
              </svg>
            </div>
          </a>
        </div>
        <div className="content duration-700 ease-in-out">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl absolute z-10 bottom-3 start-3 duration-700 ease-in-out scale-0 group-hover:scale-100">
            <a
              href="portfolio-detail-three.html"
              className="h6 text-[15px] font-medium hover:text-orange-500 duration-500 ease-in-out"
            >
              Mockup Collection
            </a>
            <p className="text-slate-400 dark:text-white/60 mb-0">Abstract</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-orange-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1" />
      </div> */}
    </div>
  </div>
</div>

  )
}

export default Projects
