// src/components/findTag.tsx

import React from 'react';
import { RibbonButtonGroup, RibbonDropdown, RibbonDropdownItem, RibbonDropdownMenu, RibbonIconButton, RibbonMenu } from '@metroui/ribbon-menu';
import { TMinimizeElement } from './RibbonMinimizeView';

export const FindTag = (element: TMinimizeElement) => {
  if (element.type === 'IconButton') {
    console.log(element.onClick,"a");
    return (
      <RibbonIconButton className={element.class} caption={element.label} onClick={element.onClick}>
        {element.children}
      </RibbonIconButton>
    );
  }
  else if(element.type==='IconDropDown'){
    return (
        <RibbonDropdown>
            <RibbonIconButton caption={element.label} className={element.class}>
                {element.children}
            </RibbonIconButton>
            <RibbonDropdownMenu>
                {
                    element.arr.map((dropItem,ind)=>(
                        <RibbonDropdownItem caption={dropItem.label} className={dropItem.class} key={ind}>
                            {dropItem.children}
                        </RibbonDropdownItem>
                    ))
                }
            </RibbonDropdownMenu>
        </RibbonDropdown>
    )
    
  }
  else if(element.type==='RadioButton'){
    
    return (
        <RibbonButtonGroup style={{display:'flex',flexDirection: 'row'}} radio active={element.active}>
            {element.options.map((radioItem,ind)=>(
                 <RibbonIconButton className={radioItem.class} caption={radioItem.label} onClick={radioItem.onClick} key={ind}>
                 {radioItem.children}
               </RibbonIconButton>
            ))}
        </RibbonButtonGroup>
    )
  }
  else if(element.type==='CheckBox'){
    return (
        <RibbonButtonGroup style={{display:'flex',flexDirection: 'row'}} active={element.active}>
            {element.options.map((radioItem,ind)=>(
                 <RibbonIconButton className={radioItem.class} caption={radioItem.label} onClick={radioItem.onClick} key={ind}>
                 {radioItem.children}
               </RibbonIconButton>
            ))}
        </RibbonButtonGroup>
    )
  }
  
  return null;
};
