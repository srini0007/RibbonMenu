import React from 'react'

interface IRibbonRadio{
    option:string,
    label:string,
    value:string,
    onChange :any,
    className?:string,
}


function RibbonRadio({option,label,value,onChange,className}:IRibbonRadio) {
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
      };
  return (
    <div className={`flex space-x-2  ${className}`} >
        <input type='radio' checked={option===value} value={value} onChange={handleRadioChange}/>
        <label >
            {label}
        </label>
    </div>
  )
}

export default RibbonRadio