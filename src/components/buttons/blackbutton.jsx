import React from 'react'

const BlackButton = ({logo,title,onclick}) => {
  return (
    <button
    onClick={onclick}
     className='flex items-center justify-center gap-2 bg-black text-white  text-button-p px-4 py-1 rounded-lg cursor-pointer'>
        {logo}
        {title}
    </button>
  )
}

export default BlackButton 