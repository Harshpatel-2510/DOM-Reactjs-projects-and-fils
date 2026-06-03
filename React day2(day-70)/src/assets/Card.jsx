import React from 'react'

const Card = (props) => {
  console.log(props);
  
  return (
    <div className='bg-white m-2 border-2 border-red-500 px-5 py-3 w-fit rounded'>
        <h1 className='text-2xl font-semibold text-black'>
            {props.user}
        </h1>
    </div>
  )
}

export default Card
