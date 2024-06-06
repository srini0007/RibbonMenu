import React from 'react';
import { TDrop, TDropItem, TMinimizeElement, TOptionItem } from '../components/RibbonMinimizeView';
import {MifIcon} from "@metroui/icons";


var miniElements:TMinimizeElement[]=[];


function rec(jsx:React.ReactNode){

    if(React.isValidElement(jsx)){
        if(jsx.key==='unwanted' || jsx.key===null){
            if(jsx.props.children!==null && jsx.props.children!==undefined){
                const arr=jsx.props.children;
                // console.log(jsx.props.children.length===undefined,jsx);
                if(jsx.props.children.length===undefined){
                    rec(jsx.props.children);
                }
                else if(typeof arr==='object'){
                    // console.log(jsx.props.children);
                    arr.map((child:React.ReactNode)=>{
                        if(React.isValidElement(child))
                            rec(child);
                    })
                }
            }
        }
        else{
            console.log(jsx);
            if(jsx.key==='IconButton'){
                let temp: TMinimizeElement = {type:'IconButton',
                    children:jsx.props.children,
                    label:jsx.props.caption,
                    onClick:jsx.props.onClick,
                    title:jsx.props.title,
                    icon:jsx.props.icon,
                }
                miniElements.push(temp);
            }
            else if(jsx.key==='IconDropdown'){
                console.log(jsx);
                let optionArr:TDrop[]=[];
                const tempArr= jsx.props.children[1].props.children;
                tempArr.map((dropItem:React.ReactNode)=>{
                    if(React.isValidElement(dropItem)){
                        let tempObj:TDrop;
                        if(dropItem.key==='RadioButton'){
                            const options=dropItem.props.children;
                            let newArr:TOptionItem[]=[];
                            options.map((radioOption:React.ReactNode)=>{
                                if(React.isValidElement(radioOption)){

                                    let temp={
                                        label:radioOption.props.caption,
                                        onClick:radioOption.props.onClick,
                                        children:radioOption.props.children,
                                    }
                                    newArr.push(temp);
                                }
                            })
                            tempObj={
                                type:'RadioDrop',
                                active:(dropItem.props.active?(dropItem.props.active.length===undefined?dropItem.props.active:dropItem.props.active[0]):null),
                                arr:newArr,
                            }
                        }
                        else if(dropItem.key==='CheckBox'){
                            const options=dropItem.props.children;
                            let newArr:TOptionItem[]=[];
                            options.map((checkOption:React.ReactNode)=>{
                                if(React.isValidElement(checkOption)){

                                    let temp={
                                        label:checkOption.props.caption,
                                        onClick:checkOption.props.onClick,
                                        children:checkOption.props.children,
                                    }
                                    newArr.push(temp);
                                }
                            })
                            tempObj={
                                type:'CheckDrop',
                                active:(dropItem.props.active),
                                arr:newArr,
                            }
                        }
                        else{
                            tempObj= {
                                type:"DropItem",
                                label:dropItem.props.caption,
                                onClick:dropItem.props.onClick,
                                children:dropItem.props.children,
                            }
                        }
                        optionArr.push(tempObj)
                    }
                })

                let temp:TMinimizeElement = {
                    type:'IconDropDown',
                    label:jsx.props.children[0].props.caption,
                    children:jsx.props.children[0].props.children,
                    onClick:jsx.props.children[0].props.onClick,
                    title:jsx.props.children[0].props.title,
                    icon:jsx.props.children[0].props.icon,
                    arr:optionArr
                }
                // console.log(temp);
                miniElements.push(temp);
            }
            else if(jsx.key==='RadioButton'){
                // console.log(jsx);

                let optionArr:TOptionItem[]=[];
                const arr= jsx.props.children;
                arr.map((radioOption:React.ReactNode)=>{
                    
                    if(React.isValidElement(radioOption)){
                        let tempObj={
                            label:radioOption.props.caption,
                            children:radioOption.props.children,
                            onClick:radioOption.props.onClick,
                        }
                        optionArr.push(tempObj);
                    }
                })
                let tempObj:TMinimizeElement={
                    type:'RadioButton',
                    active:(jsx.props.active?(jsx.props.active.length===undefined?jsx.props.active:jsx.props.active[0]):null),
                    options:optionArr
                }
                miniElements.push(tempObj);
            }
            else if(jsx.key==='CheckBox'){
                let optionArr:TOptionItem[]=[];
                const arr= jsx.props.children;
                arr.map((radioOption:React.ReactNode)=>{
                    
                    if(React.isValidElement(radioOption)){
                        let tempObj={
                            label:radioOption.props.caption,
                            children:radioOption.props.children,
                            onClick:radioOption.props.onClick,
                        }
                        optionArr.push(tempObj);
                    }
                })
                let tempObj:TMinimizeElement={
                    type:'CheckBox',
                    active:(jsx.props.active),
                    options:optionArr
                }
                miniElements.push(tempObj);
            }

        }
        
    }
}

export const convertJsxToArr= (jsx:React.ReactNode)=>{
    rec(jsx);
    console.log(miniElements);
    const dup =miniElements;
    miniElements= [];
    return dup;
    // return React.Children.map(jsx,(child)=>{
    //     if(React.isValidElement(child)){
    //         const type = child.type as React.ElementType;
    //         const typeName = (typeof type === 'string') ? type : (type.displayName || type.name || 'Unknown');
    //         console.log(child);
    //         console.log(typeof child.props.children[0].props.children[0].props.onClick);
    //     }
    // })
}