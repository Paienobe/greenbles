// import { Header } from 'antd/lib/layout/layout'
import Image from 'next/image'
import Header from '@/components/Header'
import { FaTrash } from 'react-icons/fa'
import React from 'react'
import item1 from '../public/assets/product-img-1.jpg'
import item2 from '../public/assets/product-img-2.jpg'
import item3 from '../public/assets/product-img-3.jpg'

const items = [
  {
    id: 1,
    itemImage: item1,
    description: 'Lorem ipsum dolor sans derif la',
    price: 'N50,000',
  },
  {
    id: 2,
    itemImage: item2,
    description: 'Lorem ipsum dolor sans derif la',
    price: 'N50,000',
  },
  {
    id: 3,
    itemImage: item3,
    description: 'Lorem ipsum dolor sans derif la',
    price: 'N50,000',
  },
]

const Cart = () => {
  return (
    <div>
      <Header />
      <div className='min-h-screen flex items-start justify-between bg-tahiti-uni py-20 px-14 sm:flex-col sm:px-4'>
        <div className='items-list w-[70%] bg-white p-4 rounded sm:w-full'>
          <h1 className='font-bold text-2xl'>
            Your Shopping Cart ({items.length})
          </h1>
          <div className=''>
            {items.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`flex item-center justify-center w-full border border-transparent ${
                    index !== items.length - 1 &&
                    'border-b-tahiti-uni border-b-2'
                  } sm:flex-col`}
                >
                  <div className='w-[50%] flex items-center justify-between sm:w-full sm:pb-4'>
                    <div className='image_container w-[33%] '>
                      <Image src={item.itemImage} />
                    </div>
                    <h2 className='w-[63%] font-bold'>{item.description}</h2>
                  </div>

                  <div className='w-[50%] flex items-center justify-between sm:w-full sm:pb-4'>
                    <div className='flex justify-between items-center w-2/3'>
                      <div className='buttons flex items-stretch border border-gray-500 w-[8rem]'>
                        <button className='bg-gray-400 w-1/3 p-2'>+</button>
                        <button className='bg-white-400 w-1/3 p-2 outline-none'>
                          1
                        </button>
                        <button className='bg-gray-400 w-1/3 p-2'>-</button>
                      </div>

                      <h2>{item.price}</h2>
                    </div>

                    <FaTrash />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className='w-[25%] bg-white p-4 rounded sm:w-full sm:mt-6'>
          <h2 className='font-semibold text-xl'>Order</h2>
          <div className='flex items-center justify-between'>
            <p className='font-bold'>Subtotal</p>
            <p>N150,000</p>
          </div>
          <div className='flex items-center justify-between'>
            <p className='font-bold'>Discount</p>
            <p>N5,000</p>
          </div>
          <div className='flex items-baseline justify-between border border-l-0 border-r-0'>
            <p className='pt-4 font-bold'>Total</p>
            <p>N155,000</p>
          </div>

          <div className='mt-4'>
            <button className='block w-full p-3 bg-tahiti my-2 text-base font-bold text-white'>
              CHECKOUT
            </button>
            <button className='block w-full p-3 border border-tahiti bg-white my-2 text-base font-bold text-tahiti'>
              BACK TO THE TOP
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart