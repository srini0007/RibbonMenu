import React from 'react'
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";

interface IRibbonMinimize{
    isMinimized:boolean,
    onClick?:()=>any,

    [key:string]:any

}

function RibbonMinimize({isMinimized,onClick,...rest}:IRibbonMinimize) {
  return (
    <>
    {isMinimized ?(
        <FaChevronDown onClick={onClick} {...rest} className="absolute bottom-2 right-6 hover:bg-blue-200 hover:rounded p-1 h-[20px] w-[20px]"/>
        ):(
        <FaChevronUp onClick={onClick} {...rest} className="absolute bottom-2 right-6 hover:bg-blue-200 hover:rounded p-1 h-[20px] w-[20px]"/>
        )
    }
    </>
  )
    

}

export default RibbonMinimize