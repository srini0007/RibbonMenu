import React from 'react'
import { TMinimizeElement, TDropItem } from './RibbonMinimizeView';
import { RibbonButtonGroup, RibbonDropdown, RibbonDropdownDivider, RibbonDropdownItem, RibbonDropdownMenu } from '@metroui/ribbon-menu'





export const DropdownFindTag=(element:TMinimizeElement)=>{

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
                        <RibbonDropdownItem key={ind} caption={dropItem.children?undefined:dropItem.label} onClick={dropItem.onClick} target={dropItem.target} hotkey={dropItem.hotkey} className={dropItem.class} >
                        <div className='flex items-center '>
                            {dropItem.children}
                            <span className='ml-4'>{dropItem.label}</span>
                        </div>
                    </RibbonDropdownItem>
                    ))}
                </RibbonDropdownMenu>
            </RibbonDropdown>
        )
    }
    else if(element.type==='RadioButton'){
        return (
            <>
            <RibbonDropdownDivider />
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
            <RibbonDropdownDivider />

            </>
           
    
        )
    }
    else if(element.type==='CheckBox'){
        return (
            <>
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
        <RibbonDropdownDivider />

        </>
        )
    }
    return null;
}