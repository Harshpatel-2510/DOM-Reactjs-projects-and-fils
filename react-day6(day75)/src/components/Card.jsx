import React from 'react'

const Card = (props) => {
  return (
    <div className='w-[23vw] py-8 px-8 rounded-xl text-center flex items-center flex-col bg-white text-black'>
      <img className="h-24 w-24 rounded-full object-center object-cover" src={props.elem.userimage} alt="" />
      <h1 className='text-2xl mt-2 font-semibold'>{props.elem.userName}</h1>
      <h5 className='text-base text-blue-500 font-semibold my-3'>{props.elem.userRole}</h5>
      <p className='text-sm font-medium leading-tight'>{props.elem.userdescription}</p>
      <button onClick={()=>{
        props.deleteElement(props.idx)
      }} className='px-4 py-2 rounded active:scale-95 bg-red-500 text-white font-semibold mt-3'>Remove</button>
    </div>
  )
}

export default Card