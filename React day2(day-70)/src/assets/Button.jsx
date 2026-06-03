import React from 'react'

const Button = (props) => {
  return (
    <div className='bg-amber-600 px-4 py-3 rounded m-2 w-50 text-lg font-bold text-white h-40'>
      {props.text}
    </div>
  )
}

export default Button
