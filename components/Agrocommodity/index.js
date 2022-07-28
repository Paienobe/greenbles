import React from 'react'
import styles from './agro.module.css'
import A1 from '../../public/assets/agr-1.png'
import video from '../../public/assets/video.png'
import icon1 from '../../public/assets/carrot.svg'
import icon2 from '../../public/assets/tractor.svg'
import icon3 from '../../public/assets/corn2.svg'
import Image from 'next/image'

function Agro() {
  return (
    <div className='container mx-auto bg-tahiti-uni min-h-[1004px] pt-[78px] relative'>
      <div className='absolute top-[0]'>
        <Image src={icon1} alt='icon' />
      </div>

      <div className='absolute top-[172px] right-[42px]'>
        <Image src={icon2} alt='icon' />
      </div>

      <div className=''>
        <div className=''>
          <h1 className='pb-[23px] text-lg text-[#c4c4c4] text-center'>
            {' '}
            MAXIMIZE YOUR POTENTIALS AND FINANCES{' '}
          </h1>
          <h2 className='text-tahiti-secondary text-2xl max-w-[464px] text-center mx-auto'>
            {' '}
            Learn the secrets of Agripreneurship, these people have got the
            key.​
          </h2>
        </div>

        <div className='max-w-[1000px] mx-auto'>
          <div className='flex gap-[16px] py-[50px] sm:flex-col'>
            <div className='basis-1/3'>
              <div className=''>
                <h1 className='text-center text-tahiti-green text-4xl font-[700] pb-[18px]'>
                  {' '}
                  3091{' '}
                </h1>
                <p className=' font-[350] text-[#5b5b5b] text-center text-md'>
                  {' '}
                  REGISTERED ENROLL{' '}
                </p>
              </div>
            </div>
            <div className='basis-1/3'>
              <div className=''>
                <h1 className='text-center text-tahiti-green text-4xl font-[700] pb-[18px]'>
                  {' '}
                  1927{' '}
                </h1>
                <p className=' font-[350] text-[#5b5b5b] text-center text-md'>
                  {' '}
                  FARMERS NETWORK{' '}
                </p>
              </div>
            </div>
            <div className='basis-1/3'>
              <div className=''>
                <h1 className='text-center text-tahiti-green text-4xl font-[700] pb-[18px]'>
                  {' '}
                  100%{' '}
                </h1>
                <p className=' font-[350] text-[#5b5b5b] text-center text-md'>
                  {' '}
                  SUCCESS RATE{' '}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-[1000px] mx-auto'>
          <div className='flex gap-[25px] py-[50px] sm:flex-col md:px-4 '>
            <div className='bg-[#ffffff] basis-1/2 shadow-9xl flex pl-[39px] pr-[58px] pt-[44px] pb-[37px] sm:p-4 sm:justify-between sm:m-3 '>
              <div className='w-[15%]'>
                <Image src={A1} className='' alt='agric' />
              </div>
              <div className='w-[85%]'>
                {' '}
                <h3 className='text-[16px]  pb-[33px]'>
                  {' '}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </h3>
                <h1 className='text-tahiti-green'> AMARA ODENIGBO</h1>
              </div>
            </div>
            <div className='bg-[#ffffff] basis-1/2 shadow-9xl flex pl-[39px] pr-[58px] pt-[44px] pb-[37px] sm:p-4 sm:justify-between sm:m-3'>
              <div className='w-[15%] sm:w-8'>
                <Image src={A1} className='' alt='agric' />
              </div>
              <div className='w-[85%]'>
                {' '}
                <h3 className='text-[16px]  pb-[33px]'>
                  {' '}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </h3>
                <h1 className='text-tahiti-green'> AMARA ODENIGBO</h1>
              </div>
            </div>
          </div>

          <h1 className='text-[14px] text-[#5b5b5b] text-center pb-[21px]'>
            {' '}
            CREATE FINANCIAL WEALTH THROUGH AGRICULTURE{' '}
          </h1>
          <h2 className='text-tahiti-green text-[33px] leading-[30px] tracking-[-0.01em] pb-[52px] text-center'>
            {' '}
            The Birth of Agrocommodity
          </h2>

          <div className='max-w-[762px] relative mx-auto z-[0]'>
            <div className='absolute top-[-59px] left-[-71px] z-[4]'>
              <Image src={icon3} alt='corn image' />
            </div>
            <Image src={video} alt='video section' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agro
