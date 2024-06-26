import Image from 'next/image'
import React from 'react'
import { mdiStar } from '@mdi/js';
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';

const Review = () => {
  return (
    <div className="container relative lg:mt-24 mt-16">
    <div className="grid grid-cols-1 pb-6 text-center">
      <h3 className="mb-4 md:text-2xl text-xl font-medium">{`Customer's Review`}</h3>
      <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">
        This is just a simple text made for this unique and awesome template, you
        can replace it with any text.
      </p>
    </div>
    {/*end grid*/}
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6 gap-6">
      <ul className="space-y-6">
        <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
          <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
            <Image
              src="/assets/images/team/01.jpg"
              className="h-14 w-14 rounded-full shadow dark:shadow-gray-800"
              alt=""
              width={56}
              height={56}
            />
            <div className="ps-3">
              <a
                href=""
                className="text-[16px] font-medium hover:text-orange-500 duration-500"
              >
                Thomas Israel
              </a>
              <p className="text-slate-400 dark:text-white/60">C.E.O</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-slate-400 dark:text-white/60">
              {/* I didn't know a thing about icon design until I read this book. Now
              I can create any icon I need in no time. Great resource! */}
            </p>
            <ul className="list-none flex mb-0 text-amber-400 mt-2">
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
           
              </li>
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
              </li>
              <li className="inline">
              <Icon path={mdiStar} size={1} />
              </li>
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
              </li>
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
              </li>
            </ul>
          </div>
        </li>
        <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
          <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
            <Image
              src="/assets/images/team/05.jpg"
              className="h-14 w-14 rounded-full shadow dark:shadow-gray-800"
              alt=""
              width={56}
              height={56}
            />
            <div className="ps-3">
              <a
                href=""
                className="text-[16px] font-medium hover:text-orange-500 duration-500"
              >
                Barbara McIntosh
              </a>
              <p className="text-slate-400 dark:text-white/60">C.E.O</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-slate-400 dark:text-white/60">{`
              There are so many things I had to do with my old software that I
              just don't do at all with Techwind. Suspicious but I can't say I
              don't love it.`}
            </p>
            <ul className="list-none flex mb-0 text-amber-400 mt-2">
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
           
              </li>
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
              </li>
              <li className="inline">
              <Icon path={mdiStar} size={1} />
              </li>
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
              </li>
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <ul className="space-y-6 hidden sm:block">
        <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
          <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
            <Image
              src="/assets/images/team/02.jpg"
              className="h-14 w-14 rounded-full shadow dark:shadow-gray-800"
              alt=""
              width={56}
              height={56}
            />
            <div className="ps-3">
              <a
                href=""
                className="text-[16px] font-medium hover:text-orange-500 duration-500"
              >
                Carl Oliver
              </a>
              <p className="text-slate-400 dark:text-white/60">C.E.O</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-slate-400 dark:text-white/60">
              {`The best part about Techwind is every time I pay my employees, my
              bank balance doesn't go down like it used to. Looking forward to
              spending this extra cash when I figure out why my card is being
              declined.`}
            </p>
            <ul className="list-none flex mb-0 text-amber-400 mt-2">
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
           
              </li>
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
              </li>
              <li className="inline">
              <Icon path={mdiStar} size={1} />
              </li>
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
              </li>
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
              </li>
            </ul>
          </div>
        </li>
        <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
          <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
            <Image
              src="/assets/images/team/04.jpg"
              className="h-14 w-14 rounded-full shadow dark:shadow-gray-800"
              alt=""
              width={56}
              height={56}
            />
            <div className="ps-3">
              <a
                href=""
                className="text-[16px] font-medium hover:text-orange-500 duration-500"
              >
                Jill Webb
              </a>
              <p className="text-slate-400 dark:text-white/60">C.E.O</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-slate-400 dark:text-white/60">
              {/* {`I'm trying to get a hold of someone in support, I'm in a lot of
              trouble right now and they are saying it has something to do with my
              books. Please get back to me right away.`} */}
            </p>
            <ul className="list-none flex mb-0 text-amber-400 mt-2">
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
           
              </li>
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
              </li>
              <li className="inline">
              <Icon path={mdiStar} size={1} />
              </li>
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
              </li>
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <ul className="space-y-6 hidden lg:block">
        <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
          <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
            <Image
              src="/assets/images/team/03.jpg"
              className="h-14 w-14 rounded-full shadow dark:shadow-gray-800"
              alt=""
              width={56}
              height={56}
            />
            <div className="ps-3">
              <a
                href=""
                className="text-[16px] font-medium hover:text-orange-500 duration-500"
              >
                Barbara McIntosh
              </a>
              <p className="text-slate-400 dark:text-white/60">C.E.O</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-slate-400 dark:text-white/60">
              {/* I used to have to remit tax to the EU and with Techwind I somehow
              don't have to do that anymore. Nervous to travel there now though. */}
            </p>
            <ul className="list-none flex mb-0 text-amber-400 mt-2">
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
           
              </li>
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
              </li>
              <li className="inline">
              <Icon path={mdiStar} size={1} />
              </li>
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
              </li>
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
              </li>
            </ul>
          </div>
        </li>
        <li className="rounded-xl shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
          <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
            <Image
              src="/assets/images/team/06.jpg"
              className="h-14 w-14 rounded-full shadow dark:shadow-gray-800"
              alt=""
              width={56}
              height={56}
            />
            <div className="ps-3">
              <a
                href=""
                className="text-[16px] font-medium hover:text-orange-500 duration-500"
              >
                Janisha Doll
              </a>
              <p className="text-slate-400 dark:text-white/60">C.E.O</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-slate-400 dark:text-white/60">
              {/* This is the fourth email I've sent to your support team. I am
              literally being held in jail for tax fraud. Please answer your damn
              emails, this is important. */}
            </p>
            <ul className="list-none flex mb-0 text-amber-400 mt-2">
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
           
              </li>
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
              </li>
              <li className="inline">
              <Icon path={mdiStar} size={1} />
              </li>
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
              </li>
              <li className="inline">
              <Icon  path={mdiStar} size={1} />
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
  
  )
}

export default Review
