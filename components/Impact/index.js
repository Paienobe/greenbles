import React from 'react'
import I1 from '../../public/assets/Impact-1.png'
import Image from 'next/image'

function SocialImpact() {
  return (
    <div className='max-w-[1200px] mx-auto pt-[71px] pb-[146.22px]'>
      <div className='bg-tahiti-uni max-w-[60%] mx-auto py-[60px] pr-[70px] relative'>
        <div className='ml-[35%] w-[65%]'>
          <h1 className='font-[350] text-[20px] pb-[26px] text-tahiti-green'>
            {' '}
            Donating for Social Impact{' '}
          </h1>
          <p className='font-[300] text-md  pb-[21px]'>
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='font-[300] text-md  pb-[21px]'>
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='font-[300] text-md pb-[30px]'>
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <h2 className=' font-gbold text-[20px] leading-[12px] text-tahiti-green'>
            {' '}
            AMARA ODENIGBO{' '}
          </h2>
        </div>

        <div className='absolute top-[35%] left-[-130px]'>
          <Image src={I1} alt='impact-image' />
        </div>
      </div>
      {/* <div className='flex justify-center'>
        <div>
          <div className='bg-tahiti-uni max-w-[1000px]  pt-[78px] pb-[47px] relative'>
            <div className='max-w-[344px] mx-auto'>
              <h1 className='font-[350] text-[20px] pb-[26px] text-tahiti-green'>
                {' '}
                Donating for Social Impact{' '}
              </h1>
              <p className='font-[300] text-md  pb-[21px]'>
                {' '}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className='font-[300] text-md  pb-[21px]'>
                {' '}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className='font-[300] text-md pb-[30px]'>
                {' '}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <h2 className=' font-gbold text-[20px] leading-[12px] text-tahiti-green'>
                {' '}
                AMARA ODENIGBO{' '}
              </h2>

              <div className='absolute top-[153px] left-[-130px]'>
                <Image src={I1} alt='impact-image' />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default SocialImpact
