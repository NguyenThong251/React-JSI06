import React from 'react'

export default function InputForm({name,typeInput}) {
  return (
  <label >
    <h3 className='text-orange-600'>{name}</h3>
    <input type={typeInput} className='border-2' />
    </label>
  )
}
