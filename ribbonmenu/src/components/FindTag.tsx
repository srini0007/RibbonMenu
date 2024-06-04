// src/components/findTag.tsx

import React from 'react';
import { RibbonDropdown, RibbonDropdownItem, RibbonIconButton, RibbonMenu } from '@metroui/ribbon-menu';
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
//   else if(element.type==='IconDropDown'){
//     return (
//         <RibbonDropdown>
//             <RibbonIconButton caption={element.label} className={element.class}>
//                 {element.children}
//             </RibbonIconButton>
//             <RibbonMenu>
//                 {
//                     element.arr.map(dropItem=>(
//                         <RibbonDropdownItem caption={dropItem.label} className={dropItem.class}>
//                             {dropItem.children}
//                         </RibbonDropdownItem>
//                     ))
//                 }
//             </RibbonMenu>
//         </RibbonDropdown>
//     )
//   }
  return null;
};
