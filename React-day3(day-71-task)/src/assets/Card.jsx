import React from 'react'

const Card = ({user}) => {
    console.log(user)
  return (
    <div className='bg-black h-100 w-80 rounded-lg p-2 text-white'>
      <div className='h-35 w-full rounded-lg relative'>
        <img
            src={user.coverImage}
            alt="cover"
            className='h-full w-full object-cover rounded-lg'
        />
        <div className='absolute bottom-[-35px] inset-x-29 size-18 rounded-[50px] object-fit'>
            <img
                src={user.userImage}
                alt="profile"
                className='size-18 rounded-full border-4 border-white object-cover'
            />
        </div>
      </div>
      
      <div className='h-5 w-full flex items-center justify-center mt-10 text-2xl'>
        <h2>{user.fullName}</h2>
      </div>

      <div className='h-18 pt-1 w-full flex items-center justify-center'>
        <h5>{user.smellDescription}</h5>
      </div>
      
      <div className='h-18 pl-5 pr-5 ml-3 mr-3 flex items-center justify-between back_color'>
        <div className='pl-5 flex flex-col items-center justify-center'>
            <div className='text-2xl'><i className="ri-heart-3-fill"></i></div>
            <div>{user.likesCount}</div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='text-2xl'><i className="ri-upload-line"></i></div>
            <div>{user.postCount}</div>
        </div>
        <div className='pr-5 flex flex-col items-center justify-center'>
            <div className='text-2xl'><i className="ri-eye-line"></i></div>
            <div>{user.viewsCount}</div>
        </div>
      </div>

      <div className='text-2xl flex items-center justify-evenly pt-3'>
        <i class="ri-instagram-line"></i>
        <i class="ri-telegram-2-line"></i>
        <i class="ri-github-fill"></i>
      </div>

    </div>
  )
}

export default Card
