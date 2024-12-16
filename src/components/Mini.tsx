import React from 'react'

const Mini = ({ heading, para }: { heading: string, para: string }) => {
  return (
    <div className='h-auto w-full max-w-md flex flex-col gap-2 px-4'>
      <h1 className='font-semibold text-xl md:text-2xl lg:text-3xl text-center md:text-left'>
        {heading}
      </h1>
      <p className='text-sm md:text-lg lg:text-xl text-gray-400 text-center md:text-left'>
        {para}
      </p>
    </div>
  )
}

export default Mini
