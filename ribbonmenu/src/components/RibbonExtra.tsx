import React from 'react'


interface IRibbonExtra{

    onClick?:any,
    [key:string]:any
}

function RibbonExtra({onClick,...rest}:IRibbonExtra) {
  return (
    <button className='flex items-center justify-center fixed top-6 hover:rounded right-14 h-6 w-6 text-2xl p-0 m-0 hover:bg-blue-200' onClick={onClick} {...rest}>
        ...
    </button>
  )
}

export default RibbonExtra