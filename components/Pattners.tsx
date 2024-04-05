import Image from 'next/image'
import React from 'react'

const Pattners = () => {
  return (
    <section className="py-6 border-t border-b border-gray-100 dark:border-gray-700">
    <div className="container relative">
      <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
        <div className="mx-auto py-4">
          <Image src="/assets/images/team/amazon.svg" className="h-6" alt="" />
        </div>
        <div className="mx-auto py-4">
          <Image src="/assets/images/team/google.svg" className="h-6" alt="" />
        </div>
        <div className="mx-auto py-4">
          <Image src="/assets/images/team/lenovo.svg" className="h-6" alt="" />
        </div>
        <div className="mx-auto py-4">
          <Image src="/assets/images/team/paypal.svg" className="h-6" alt="" />
        </div>
        <div className="mx-auto py-4">
          <Image src="/assets/images/team/shopify.svg" className="h-6" alt="" />
        </div>
        <div className="mx-auto py-4">
          <Image src="/assets/images/team/spotify.svg" className="h-6" alt="" />
        </div>
      </div>
      {/*end grid*/}
    </div>
    {/*end container*/}
  </section>
  
  )
}

export default Pattners
