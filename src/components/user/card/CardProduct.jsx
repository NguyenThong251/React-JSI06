import { Button } from '@mantine/core'
import React from 'react'
import { TbHeart,TbShoppingCart  } from "react-icons/tb"; 
export default function CardProduct() {
  return (
        <div className="card group border-2 border-orange-200 rounded-3xl overflow-hidden">
            <div className="hover:bg-orange-200 pb-5 relative overflow-hidden ">
                <div className="flex justify-end ">
            <TbHeart className='h-8 w-8 me-5 mt-5' />
                </div>
                <img src="https://pettie.wpengine.com/wp-content/uploads/2023/05/shop-1-1000x1000.webp" alt="" />
                <div className="absolute bottom-5  left-1/2 -translate-x-1/2 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">

                <button className='bg-orange-600 py-3 px-6 rounded-3xl'>
                    <span className='text-white font-semibold '>ADD TO CART</span>
                    <span className='hidden'><TbShoppingCart className='h-5 w-5'/></span>
                </button>
                </div>
            </div>
            
        </div>
  )
}


