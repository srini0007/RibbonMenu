// src/components/findTag.tsx

import React from 'react';
import { RibbonButtonGroup, RibbonDropdown, RibbonDropdownItem, RibbonDropdownMenu, RibbonIconButton, RibbonMenu } from '@metroui/ribbon-menu';
import { TDrop, TMinimizeElement } from './RibbonMinimizeView';
import {MifIcon} from "@metroui/icons";


function helper(dropItem:TDrop,ind:number){
  if(dropItem.type==='DropItem'){
    return (
      <RibbonDropdownItem caption={dropItem.label} className={dropItem.class} key={ind}>
          {dropItem.children}
      </RibbonDropdownItem>
    )
  }
  else if(dropItem.type==='RadioDrop'){
    return (
      <RibbonButtonGroup radio active={dropItem.active} >
        {dropItem.arr.map((item,index)=>(
          <RibbonDropdownItem caption={item.label} className={item.class} key={index}>
          {item.children}
      </RibbonDropdownItem>
        ))}
      </RibbonButtonGroup>
    )
  }
  else if(dropItem.type==='CheckDrop'){
    return (
      <RibbonButtonGroup active={dropItem.active} >
        {dropItem.arr.map((item,index)=>(
          <RibbonDropdownItem caption={item.label} className={item.class} key={index}>
          {item.children}
      </RibbonDropdownItem>
        ))}
      </RibbonButtonGroup>
    )
  }

}

export const FindTag = (element: TMinimizeElement) => {
  if (element.type === 'IconButton') {
    // console.log(element.onClick,"a");
    return (
      <RibbonIconButton title={element.title} icon={element.icon} className={element.class} caption={element.label} onClick={element.onClick}>
        {element.children}
      </RibbonIconButton>
    );
  }
  else if(element.type==='IconDropDown'){
    return (
        <RibbonDropdown>
            <RibbonIconButton title={element.title} icon={element.icon} className={element.class} caption={element.label} onClick={element.onClick}>
                {element.children}
            </RibbonIconButton>
            <RibbonDropdownMenu>
                {
                    element.arr.map((dropItem,ind)=>(
                      helper(dropItem,ind)
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
