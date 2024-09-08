import React from 'react'

export default function CardProduct({image,name,price}) {
  return (
    <div>
        <div className=""><img src={image} alt="" className='h-56 w-full' />
        
        <div className="">{name}</div>
        <div className="">{price}</div>
        </div>
    </div>
  )
}
