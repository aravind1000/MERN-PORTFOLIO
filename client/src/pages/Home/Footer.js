import React from 'react'

function Footer() {
  return (
    <div className='py-10'>
      <div className='h-[1px] w-full bg-gray-700'>
      </div>
      <div className='flex items-center justify-center flex-col mt-10 '>
        <h1>
          {new Date().getFullYear()} &copy; Stay Connected
        </h1>
      </div>
    </div>
  )
}

export default Footer
