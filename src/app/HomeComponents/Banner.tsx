import Image from 'next/image'
import './style.css'

export default function Banner() {
  return (
    <section className='bg-banner py-10'>
      <div className='items-center grid grid-cols-1 md:grid-cols-2 mx-auto px-4 max-w-7xl'>
        {/* Left Side - Form */}
        <div>
          <h2 className='mb-6 font-bold text-[28px] text-gray-800 md:text-[40px]'>
            Minerva Institute of <br /> Paramedical Science
          </h2>

          <div className='bg-white shadow-md p-6 rounded-xl max-w-md'>
            <form>
              <div className='mb-4'>
                <input
                  type='text'
                  placeholder='Full Name'
                  className='p-3 border rounded-full outline-none w-full'
                />
              </div>
              <div className='mb-4'>
                <input
                  type='email'
                  placeholder='Email Address'
                  className='p-3 border rounded-full outline-none w-full'
                />
              </div>
              <div className='mb-4'>
                <input
                  type='tel'
                  placeholder='Phone No'
                  className='p-3 border rounded-full outline-none w-full'
                />
              </div>
              <button
                type='submit'
                className='bg-[#D62828] hover:bg-[#bb1f1f] py-3 rounded-full w-full font-semibold text-white transition'
              >
                Apply Today
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Image & CTA */}
        <div className='relative flex justify-start items-center mt-10 md:mt-0'>
          {/* Yellow semi-circle background */}
          <div>
            <div className="img-box1 style2">
              <div className="vs-circless">
              </div>
            </div>

            {/* Doctor Image */}
            <Image
              src='/home/banner.webp'
              alt='Doctor Banner'
              width={800}
              height={800}
              className='z-10 banner-img'
            />
          </div>

          {/* Online Class CTA */}
          <div className='right-6 bottom-6 z-20 absolute bg-[#001F3F] shadow-lg p-4 pr-10 pb-5 pl-10 rounded-xl max-w-xs text-white text-center home-ct-color'>
            <p className='font-semibold text-[30px] text-lg'>Online Class</p>
            <p className='mb-3 text-[18px] text-sm'>Click to start your journey</p>
            <button className='bg-[#D62828] px-4 py-2 rounded-full font-medium text-white text-sm'>
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
