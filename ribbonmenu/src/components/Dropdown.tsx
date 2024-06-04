import React, { useState, useRef, useEffect } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { RibbonDropdown, RibbonDropdownItem, RibbonDropdownMenu, RibbonIconButton } from '@metroui/ribbon-menu';
import { TbRefresh } from "react-icons/tb";



interface IDropdownProps {
  items: { label: string, onClick: () => void }[];
}

function Dropdown({ items }:IDropdownProps){

  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <div className="inline-block text-left" ref={dropdownRef}>
    <RibbonDropdown>

      <RibbonIconButton 
        className="p-2 hover:bg-gray-200 rounded" 
      >
        <BsThreeDots size={24} />
      </RibbonIconButton>

    
          
    <RibbonDropdownMenu>
    {items.map((item, index) => (
        // <RibbonDropdown>

        <RibbonDropdownItem className='relative' key={index} onClick={item.onClick} >
            <div className='flex items-center '>

            <TbRefresh />
            <span className='ml-4'>{item.label}</span>
            </div>
        </RibbonDropdownItem>
        // <RibbonDropdownMenu className='custom-dropdown'>
            // <RibbonDropdownItem  caption='gasdsadg' />
        // </RibbonDropdownMenu>
        // </RibbonDropdown>
    ))}
    </RibbonDropdownMenu>
 
    </RibbonDropdown>

    </div>
  );
};

export default Dropdown;
