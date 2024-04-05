import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className="relative z-0 bg-primary">
        <div className=' min-h-96 bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <section className="first-letter:relative w-full h-screen mx-auto">
        <div className="absolute inset-0 top-[120px]  
        max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
          <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-">
            Hi, I'm <span className='text-[#915EFF]'>Navdeep Singh</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>
      
        
       </section>
        
        </div>
       
      </div>

      {/* about 2 start  */}

      <section className="md:pt-[112px] pt-16 relative" id="about">
  <div className="container">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[90px] items-center">
      <div className="relative space-y-4 md:space-y-0">
        <div>
          <img
            src="/assets/img/about/1.jpg"
            className="mx-auto dark:hidden"
            alt=""
          />
          <img
            src="/assets/img/about/2.jpg"
            className="mx-auto hidden dark:block"
            alt=""
          />
        </div>
        <div className="top-[120px] -left-20 md:absolute">
          <div className="flex gap-[17px] items-center pt-[25px] pr-[30px] pb-[21px] pl-[26px] bg-white dark:bg-semilight shadow-[25px_0px_65px_rgba(54,32,152,0.11)] rounded-lg">
            <h3 className="text-[50px] text-[#1cbe59]">
              <span
                className="dizme_tm_counter stop"
                data-from={0}
                data-to={18}
                data-speed={2000}
              >
                18
              </span>
            </h3>
            <span className="name text-lg font-secondary leading-[1.3] font-medium">
              Years of
              <br />
              Success
            </span>
          </div>
        </div>
        <div className="bottom-[70px] -right-[30px] md:absolute">
          <div className="flex gap-[17px] items-center pt-[25px] pr-[30px] pb-[21px] pl-[26px] bg-white dark:bg-semilight shadow-[25px_0px_65px_rgba(54,32,152,0.11)] rounded-lg">
            <h3 className="text-[50px] text-[#6e50f0] dark:text-[#f0c45c]">
              <span
                className="dizme_tm_counter stop"
                data-from={0}
                data-to={9}
                data-speed={2000}
              >
                9
              </span>
              K
            </h3>
            <span className="name text-lg font-secondary leading-[1.3] font-medium">
              Total
              <br />
              Projects
            </span>
          </div>
        </div>
      </div>
      <div className="text-center md:text-left">
        <div className="mb-[25px] lg:max-w-[440px]">
          <p
            className="text-custom text-xl md:text-2xl font-medium font-secondary wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp"
            }}
          >
            I'm a Designer
          </p>
          <h3
            className="md:text-[48px] text-[35px] leading-[1.25] mt-1.5 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp"
            }}
          >
            I Can Design Anything You Want
          </h3>
        </div>
        <p
          className="text-muted dark:text-darkmuted lg:max-w-[485px] leading-[30px] mb-[47px] wow fadeInUp"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationName: "fadeInUp"
          }}
        >
          Hello there! I'm a web designer, and I'm very passionate and dedicated
          to my work. With 20 years experience as a professional web developer,
          I have acquired the skills and knowledge necessary to make your
          project a success. I enjoy every step of the design process, from
          discussion and collaboration.
        </p>
        <div
          className="wow fadeInUp"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationName: "fadeInUp"
          }}
        >
          <a href="#contact" className="btn-custom">
            Hire Me
          </a>
        </div>
      </div>
    </div>
  </div>
  <div
    className="left-10 top-5 absolute hidden lg:block wow fadeInLeft"
    data-wow-duration="1s"
    style={{
      visibility: "visible",
      animationDuration: "1s",
      animationName: "fadeInLeft"
    }}
  >
    <img src="/assets/brushes/about/1.png" alt="" />
  </div>
  <div
    className="-bottom-[50px] right-0 absolute hidden lg:block wow fadeInRight"
    data-wow-duration="1s"
    style={{
      visibility: "visible",
      animationDuration: "1s",
      animationName: "fadeInRight"
    }}
  >
    <img src="/assets/brushes/about/2.png" alt="" />
  </div>
</section>

    </div>
  )
}

export default page
