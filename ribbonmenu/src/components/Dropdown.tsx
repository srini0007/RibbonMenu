import React, { useState, useRef, useEffect } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { RibbonDropdown, RibbonDropdownItem, RibbonDropdownMenu, RibbonIconButton } from '@metroui/ribbon-menu';
import { TbRefresh } from "react-icons/tb";
import { TMinimizeElement } from './RibbonMinimizeView';
import { DropdownFindTag } from './DropdownFIndTag';



interface IDropdownProps {
  elements:TMinimizeElement[];
}

function Dropdown({ elements }:IDropdownProps){

  const dropdownRef = useRef<HTMLDivElement>(null);
    console.log("fk",elements);
  return (
    <div className="inline-block text-left" ref={dropdownRef}>
    <RibbonDropdown>

      <RibbonIconButton 
        className="p-2 hover:bg-gray-200 rounded" 
      >
        <BsThreeDots size={24} />
      </RibbonIconButton>

    
          
    <RibbonDropdownMenu className='extra-dropdown'>
    {elements.map((element, index) => (
        // <RibbonDropdown>
       
        // <RibbonDropdownItem className='relative' key={index} onClick={element.type==='IconButton' && element.onClick} caption={element.label} >
        //     <div className='flex items-center '>

        //     <TbRefresh />
        //     <span className='ml-4'>{element.label}</span>
        //     </div>
        // </RibbonDropdownItem>
        // <RibbonDropdownMenu className='custom-dropdown'>
            // <RibbonDropdownItem  caption='gasdsadg' />
        // </RibbonDropdownMenu>
        // </RibbonDropdown>
        // <RibbonDropdownItem caption={element} />
        DropdownFindTag(element)
    ))}
    </RibbonDropdownMenu>
 
    </RibbonDropdown>

    </div>
  );
};

export default Dropdown;
