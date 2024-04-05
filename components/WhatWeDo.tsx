import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhatWeDo = () => {
  return (
    <div>
      <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl font-medium">What we do?</h3>

                    <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">This is just Link simple text made for this unique and awesome template, you can replace it with any text.</p>
                </div>
                {/* <!--end grid--> */}

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {/* <!-- Content --> */}
                    <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-hexagon h-28 w-28 fill-orange-500/5 mx-auto rotate-[30deg]"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-orange-500 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                <Image src="assets/icons/color-swatches.svg" className="h-8" width={119} height={122} alt="color-swatches"/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link href="services.html" className="text-lg font-medium duration-500 hover:text-orange-500">Grow Your Business</Link>
                            <p className="text-slate-400 dark:text-white/60 p-regular-17 duration-500 mt-3">If the distribution of letters and words is random the reader will not be distracted from making.</p>
                        </div>
                    </div>
                    {/* <!-- Content -->

                    <!-- Content --> */}
                    <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-hexagon h-28 w-28 fill-orange-500/5 mx-auto rotate-[30deg]"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-orange-500 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                            <Image src="assets/icons/color-swatches.svg" className="h-8" width={119} height={122} alt="color-swatches"/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link href="services.html" className="text-lg font-medium duration-500 hover:text-orange-500">Drive More Sales</Link>
                            <p className="text-slate-400 dark:text-white/60 p-regular-17 duration-500 mt-3">If the distribution of letters and words is random the reader will not be distracted from making.</p>
                        </div>
                    </div>
                  
                    <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-hexagon h-28 w-28 fill-orange-500/5 mx-auto rotate-[30deg]"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-orange-500 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                            <Image src="assets/icons/color-swatches.svg" className="h-8" width={119} height={122} alt="color-swatches"/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link href="services.html" className="text-lg font-medium duration-500 hover:text-orange-500">Handled By Expert</Link>
                            <p className="text-slate-400 dark:text-white/60 p-regular-17 duration-500 mt-3">If the distribution of letters and words is random the reader will not be distracted from making.</p>
                        </div>
                    </div>
                  
                    <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-hexagon h-28 w-28 fill-orange-500/5 mx-auto rotate-[30deg]"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-orange-500 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                            <Image src="assets/icons/color-swatches.svg" className="h-8" width={119} height={122} alt="color-swatches"/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link href="services.html" className="text-lg font-medium duration-500 hover:text-orange-500">Discussion For Idea</Link>
                            <p className="text-slate-400 dark:text-white/60 p-regular-17 duration-500 mt-3">If the distribution of letters and words is random the reader will not be distracted from making.</p>
                        </div>
                    </div>
                
                    <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-hexagon h-28 w-28 fill-orange-500/5 mx-auto rotate-[30deg]"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-orange-500 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                            <Image src="assets/icons/color-swatches.svg" className="h-8" width={119} height={122} alt="color-swatches"/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link href="services.html" className="text-lg font-medium duration-500 hover:text-orange-500">Increase Conversion</Link>
                            <p className="text-slate-400 dark:text-white/60 p-regular-17 duration-500 mt-3">If the distribution of letters and words is random the reader will not be distracted from making.</p>
                        </div>
                    </div>
                   
                    <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-hexagon h-28 w-28 fill-orange-500/5 mx-auto rotate-[30deg]"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-orange-500 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                            <Image src="assets/icons/color-swatches.svg" className="h-8" width={119} height={122} alt="color-swatches"/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link href="services.html" className="text-lg font-medium duration-500 hover:text-orange-500">Sales Growth Idea</Link>
                            <p className="text-slate-400 dark:text-white/60 p-regular-17 duration-500 mt-3">If the distribution of letters and words is random the reader will not be distracted from making.</p>
                        </div>
                    </div>
                
                </div>
            </div>
    </div>
  )
}

export default WhatWeDo
