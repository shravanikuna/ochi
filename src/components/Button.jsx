import React from 'react'

const Button = ({btnname, bgcolor}) => {
  return (
      <button  color={bgcolor}  className='rounded-[30px]  font-["Neue_Montreal"] bg-[#212121] tracking-wide py-4 px-10 text-white w-max h-max'>
          {btnname}
    </button>
  )
}

export default Button