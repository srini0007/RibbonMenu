import React from 'react'
import { TMinimizeElement, TDropItem, TDrop } from './RibbonMinimizeView';
import { RibbonButtonGroup, RibbonDropdown, RibbonDropdownDivider, RibbonDropdownItem, RibbonDropdownMenu } from '@metroui/ribbon-menu'


function dropDownHelper(dropItem:TDrop,ind:number){
    if(dropItem.type==='DropItem'){
        return (
            <RibbonDropdownItem key={ind} caption={dropItem.children?undefined:dropItem.label} onClick={dropItem.onClick} target={dropItem.target} hotkey={dropItem.hotkey} className={dropItem.class} >
                <div className='flex items-center '>
                    {dropItem.children}
                    <span className='ml-4'>{dropItem.label}</span>
                </div>
            </RibbonDropdownItem>
        )
      }
      else if(dropItem.type==='RadioDrop'){
        return (
          <RibbonButtonGroup radio active={dropItem.active} >
            {dropItem.arr.map((item,index)=>(
                <RibbonDropdownItem key={ind} caption={item.children?undefined:item.label} onClick={item.onClick} target={item.target} hotkey={item.hotkey} className={item.class} >
                <div className='flex items-center '>
                    {item.children}
                    <span className='ml-4'>{item.label}</span>
                </div>
                </RibbonDropdownItem>
                    ))}
          </RibbonButtonGroup>
        )
      }
      else if(dropItem.type==='CheckDrop'){
        return (
          <RibbonButtonGroup active={dropItem.active} >
             {dropItem.arr.map((item,index)=>(
                <RibbonDropdownItem key={ind} caption={item.children?undefined:item.label} onClick={item.onClick} target={item.target} hotkey={item.hotkey} className={item.class} >
                <div className='flex items-center '>
                    {item.children}
                    <span className='ml-4'>{item.label}</span>
                </div>
                </RibbonDropdownItem>
            ))}
          </RibbonButtonGroup>
        )
      }
}


export const DropdownFindTag=(element:TMinimizeElement,first:boolean,last:boolean,prev:boolean)=>{

    if(element.type==='IconButton'){
        return (
            <RibbonDropdownItem caption={element.children?undefined:element.label} className={element.class} onClick={element.onClick} target={element.target} hotkey={element.hotkey} >
                <div className='flex items-center '>
                    {element.children}
                    <span className='ml-4'>{element.label}</span>
                </div>
            </RibbonDropdownItem>
        )
    }
    else if(element.type==='IconDropDown'){
        return (
            <RibbonDropdown >
                <RibbonDropdownItem caption={element.children?undefined:element.label} onClick={element.onClick} target={element.target} hotkey={element.hotkey} className={element.class} >
                    <div className='flex items-center '>
                        {element.children}
                        <span className='ml-4'>{element.label}</span>
                    </div>
                </RibbonDropdownItem>
                <RibbonDropdownMenu>
                    { element.arr.map((dropItem,ind)=>(
                        ( dropItem.type==='DropItem' &&
                        <RibbonDropdownItem key={ind} caption={dropItem.children?undefined:dropItem.label} onClick={dropItem.onClick} target={dropItem.target} hotkey={dropItem.hotkey} className={dropItem.class} >
                        <div className='flex items-center '>
                            {dropItem.children}
                            <span className='ml-4'>{dropItem.label}</span>
                        </div>
                        </RibbonDropdownItem>
                        )
                    ))}
                </RibbonDropdownMenu>
            </RibbonDropdown>
        )
    }
    else if(element.type==='RadioButton'){
        return (
            <>
            {(!first && !prev )&&
            <RibbonDropdownDivider />}
            <RibbonButtonGroup radio active={element.active}>
                {element.options.map((dropRadioItem,ind)=>(
                    <RibbonDropdownItem key={ind} caption={dropRadioItem.children?undefined:dropRadioItem.label} className={dropRadioItem.class} onClick={dropRadioItem.onClick} target={dropRadioItem.target} hotkey={dropRadioItem.hotkey} >
                        <div className='flex items-center '>
                            {dropRadioItem.children}
                            <span className='ml-4'>{dropRadioItem.label}</span>
                        </div>
                
                    </RibbonDropdownItem>
                )
            )}
            </RibbonButtonGroup>
            { !last &&
            <RibbonDropdownDivider />
            }
            </>
           
    
        )
    }
    else if(element.type==='CheckBox'){
        console.log(prev,first);
        return (
            <> 
            {  !prev  && !first &&
            <RibbonDropdownDivider />}
            <RibbonDropdownDivider />
        <RibbonButtonGroup active={element.active}>
            {element.options.map((dropRadioItem,ind)=>(
                <RibbonDropdownItem key={ind} caption={dropRadioItem.children?undefined:dropRadioItem.label} className={dropRadioItem.class} onClick={dropRadioItem.onClick} target={dropRadioItem.target} hotkey={dropRadioItem.hotkey} >
                    <div className='flex items-center '>
                        {dropRadioItem.children}
                        <span className='ml-4'>{dropRadioItem.label}</span>
                    </div>
                </RibbonDropdownItem>
            )
        )}
        </RibbonButtonGroup>
         { !last &&
            <RibbonDropdownDivider />
            }

        </>
        )
    }
    return null;
}