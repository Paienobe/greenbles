import React from 'react'

function Footer() {
  return (
    <div className=' bg-[#ffffff]'>
      <div className='pt-[111px] pb-[114px] sm:py-12'>
        <div>
          <div className='max-w-[1187px] mx-auto py-[43px]'>
            <div className='flex justify-between pt-5 sm:flex-col'>
              <div className='max-w-[243px] sm:ml-8'>
                <h1 className='text-base leading-[19px] font-bold pb-[28px] sm:pb-3'>
                  {' '}
                  OFFICE ADDRESS{' '}
                </h1>
                <p className='pb-5 text-[#323232] font-semibold leading-[22px] text-sm'>
                  {' '}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>

              <div className='sm:ml-8 sm:my-4'>
                <h2 className='text-sm  font-bold pb-[28px] leading-[19px] sm:pb-0'>
                  NAVIGATION
                </h2>

                <ul>
                  <li className='text-sm font-normal leading-[22px]'> Home</li>
                  <li className='text-sm font-normal leading-[22px]'>
                    {' '}
                    About Us
                  </li>

                  <li className='text-sm font-normal leading-[22px]'>
                    {' '}
                    Products
                  </li>
                  <li className='text-sm font-normal leading-[22px]'>
                    {' '}
                    Social impact
                  </li>
                </ul>
              </div>

              <div className='sm:ml-8 sm:my-4'>
                <h2 className='text-sm  font-bold pb-[28px] leading-[19px] sm:pb-0'>
                  INFORMATION
                </h2>

                <ul>
                  <li className='text-sm font-normal leading-[22px]'>
                    {' '}
                    Contact
                  </li>
                  <li className='text-sm font-normal leading-[22px]'>
                    {' '}
                    Terms of use
                  </li>
                  <li className='text-sm font-normal leading-[22px]'>
                    {' '}
                    Privacy Policy
                  </li>
                </ul>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
