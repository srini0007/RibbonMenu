import React from "react";
import logo from './logo.svg'
import { BsFillAlarmFill } from "react-icons/bs";
import { TbRefresh } from "react-icons/tb";
import { BsDisplayportFill } from "react-icons/bs";
import { useState } from "react";
import {
    RibbonMenu,
    RibbonTab,
    RibbonTabGroup,
    RibbonTabSubGroup,
    RibbonTabDivider,
    RibbonButton,
    RibbonIconButton,
    RibbonToolButton,
    RibbonButtonGroup,
    RibbonDropdown,
    RibbonDropdownMenu,
    RibbonDropdownItem,
    RibbonDropdownCheckItem,
    RibbonDropdownDivider,
    RibbonSplitButton} from '@metroui/ribbon-menu';
import { GiBarbedWire } from "react-icons/gi";
import './App.css';
import DropdownCheckbox from "./components/DropdownCheckbox";
import RibbonCustomCheckbox from "./components/RibbonCustomCheckbox";
import RibbonRadio from "./components/RibbonRadio";
import SetReactIcon from "./components/SetReactIcon";
import SetReactSmallIcon from './components/SetReactSmallIcon';
import { FaSave } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";
import RibbonMinimize from "./components/RibbonMinimize";
import useElementWidth from "./hooks/useElementWidth";
import RibbonMinimizeView, {  TMinimizeElement } from "./components/RibbonMinimizeView";

const App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedRadio,setSelectedRadio] = useState<string>("srini");
  const options = [
    { label: 'Off', value: 'off' },
    { label: 'For Everyone', value: 'everyone' },
    { label: 'Just Mine', value: 'mine' },
  ];
  
  const handleSelectionChange = (selectedValue: string) => {
    console.log('Selected value:', selectedValue);
  };
  

  const handleCheckboxChange = (checked: boolean) => {
    console.log(checked)
    setIsChecked(checked);
  };
  
  const handleRadioChange= (option:string)=>{
    console.log(option);
    setSelectedRadio(option);
  }
  const [limit,setLimit] = useState(window.innerWidth-200);
  window.addEventListener('resize',()=>{

    setLimit(window.innerWidth-200);
  })
  const [isMinimized,setIsMinimized] = useState(false);
  const totalWidth = useElementWidth('.find-width', [isMinimized]);

  // console.log(totalWidth,limit);

  const minimizeElements:TMinimizeElement[] = [
    {type:"IconDropDown",
      label:"hello",
      children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    arr:[{label:"hi",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    },{label:"klo",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    }]
    },
    {
    type:"IconButton",
    label:"Refresh",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    class:'find-width',
    onClick:()=>{alert('ho')},
  },{
    type:"IconButton",
    label:"Refresh",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    class:'find-width'
  },{
    type:"IconButton",
    label:"Refresh",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    class:'find-width'
  },{
    type:"IconButton",
    label:"Refresh",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    class:'find-width'
  },{
    type:"IconButton",
    label:"Refresh",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    class:'find-width'
  },{
    type:"IconButton",
    label:"Refresh",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    class:'find-width'
  },{
    type:"IconButton",
    label:"Refresh",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    class:'find-width'
  },{
    type:"IconButton",
    label:"Refresh",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    class:'find-width'
  },{
    type:"IconButton",
    label:"Refresh",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    class:'find-width'
  },{
    type:"IconButton",
    label:"Refresh",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    class:'find-width'
  },{
    type:"IconButton",
    label:"Refresh",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    class:'find-width'
  },{
    type:"IconButton",
    label:"Refresh",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    class:'find-width'
  },{
    type:"IconButton",
    label:"Refresh",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    class:'find-width'
  },{
    type:"IconButton",
    label:"Refresh",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    class:'find-width'
  },{
    type:"IconButton",
    label:"Refresh",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    class:'find-width'
  },{
    type:"IconButton",
    label:"Refresh",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    class:'find-width'
  },{
    type:"IconButton",
    label:"Refresh",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    class:'find-width'
  },{
    type:"IconButton",
    label:"Refresh",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    class:'find-width'
  },{
    type:"IconButton",
    label:"Refresh",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    class:'find-width'
  },{
    type:"IconButton",
    label:"Refresh",
    children:<SetReactSmallIcon>
    <TbRefresh className="big-icons text-black" />
  </SetReactSmallIcon>,
    class:'find-width'
  },]


  // console.log(isMinimized);
    return (
              <>
              <RibbonMenu >
                  <RibbonTab label="Home" mode="default">
                    { isMinimized===false && 
                      <>
                      <RibbonTabGroup title="">
                        <RibbonButton  caption="Refresh" title="Refresh current window" onClick={()=>{alert('Refresh Button was Clicked!')}}>
                          <SetReactIcon>
                            <TbRefresh className="big-icons text-black" />
                          </SetReactIcon>
                        </RibbonButton>
                          
                        <RibbonButton caption="View Alarm" title="" onClick={()=>{alert('alarm Button was Clicked!')}}>
                          <SetReactIcon>
                            <BsFillAlarmFill className="big-icons text-black" />
                          </SetReactIcon>
                        </RibbonButton>
                        <RibbonButton caption="OTDR" title="" onClick={()=>{alert('alarm Button was Clicked!')}}>
                          <SetReactIcon>
                            <BsDisplayportFill className="big-icons text-black" />
                          </SetReactIcon>
                        </RibbonButton>
                      </RibbonTabGroup>

                      <RibbonTabGroup title="Topogological link">
                          <RibbonDropdown>
                            <RibbonButton caption="Create TL">
                              <SetReactIcon>
                                <GiBarbedWire className="big-icons" />
                              </SetReactIcon>
                            </RibbonButton>
                            <RibbonDropdownMenu>
                              <RibbonDropdownItem caption="Windows 10" onClick={(e:any)=>{console.log(e)}}/>
                              <RibbonDropdownItem caption="Windows 11"/>
                              <RibbonDropdownItem caption="Office 365"/>
                            </RibbonDropdownMenu>
                          </RibbonDropdown>
                          <RibbonButton caption="Delete TL">
                            <SetReactIcon>
                              <GiBarbedWire className="big-icons" />
                            </SetReactIcon>
                          </RibbonButton>
                          <RibbonButton caption="Toggle TL">
                            <SetReactIcon>
                              <GiBarbedWire className="big-icons" />
                            </SetReactIcon>
                          </RibbonButton>
                      </RibbonTabGroup>
                      <RibbonTabGroup title="Circuit">
                          <RibbonTabSubGroup style={{width:"280px"}}>
                            <RibbonDropdown>
                              <RibbonIconButton caption="Create Circuit">
                                <SetReactSmallIcon>
                                  <GiBarbedWire className="w-3 h-3" />
                                </SetReactSmallIcon>
                              </RibbonIconButton>
                              <RibbonDropdownMenu>
                                <RibbonDropdownItem caption="Create Circuit from source and destination">
                                  {/* <SetReactSmallIcon>
                                    <GiBarbedWire className="w-3 h-3" />
                                  </SetReactSmallIcon> */}
                                </RibbonDropdownItem>
                               
                              </RibbonDropdownMenu>
                            </RibbonDropdown>
                              <RibbonIconButton caption="view circuit or tunnel/pw/services">
                                <SetReactSmallIcon>
                                  <GiBarbedWire className="w-3 h-3" />
                                </SetReactSmallIcon>
                              </RibbonIconButton>
                              <RibbonIconButton caption="view VCG circuit">
                                <SetReactSmallIcon>
                                  <GiBarbedWire className="w-3 h-3" />
                                </SetReactSmallIcon>
                              </RibbonIconButton>
                          </RibbonTabSubGroup>
                      </RibbonTabGroup>

                      <RibbonTabGroup title="Switch/Tunnel">
                        <RibbonTabSubGroup style={{width:"150px"}}>

                          <RibbonIconButton caption="NE Properties">
                            <SetReactSmallIcon>
                              <GiBarbedWire className="w-3 h-3" />
                            </SetReactSmallIcon>
                          </RibbonIconButton>
                          <RibbonIconButton caption="TL Properties">
                            <SetReactSmallIcon>
                              <GiBarbedWire className="w-3 h-3" />
                            </SetReactSmallIcon>
                          </RibbonIconButton>
                          <RibbonIconButton caption="Manage L1 port">
                            <SetReactSmallIcon>
                              <GiBarbedWire className="w-3 h-3" />
                            </SetReactSmallIcon>
                          </RibbonIconButton>
                        </RibbonTabSubGroup>
                          

                      </RibbonTabGroup>
                      <RibbonTabGroup title="NE">
                      <RibbonTabSubGroup style={{width:"150px"}}>

                        <RibbonIconButton caption="NE Properties">
                          <SetReactSmallIcon>
                            <GiBarbedWire className="w-3 h-3" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
                        <RibbonIconButton caption="TL Properties">
                          <SetReactSmallIcon>
                            <GiBarbedWire className="w-3 h-3" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
                        <RibbonIconButton caption="Manage L1 port">
                          <SetReactSmallIcon>
                            <GiBarbedWire className="w-3 h-3" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
                      </RibbonTabSubGroup>
                      <RibbonTabSubGroup style={{width:"150px"}}>

                        <RibbonIconButton caption="NE Properties">
                          <SetReactSmallIcon>
                            <GiBarbedWire className="w-3 h-3" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
                        <RibbonIconButton caption="TL Properties">
                          <SetReactSmallIcon>
                            <GiBarbedWire className="w-3 h-3" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
                        <RibbonIconButton caption="Manage L1 port">
                          <SetReactSmallIcon>
                            <GiBarbedWire className="w-3 h-3" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
                      </RibbonTabSubGroup>
                    </RibbonTabGroup>
                    <RibbonTabGroup title="">
                      <RibbonButton caption="Save" title="Save current window" onClick={()=>{alert('Save Button was Clicked!')}}>
                        <SetReactIcon>
                          <FaSave className="big-icons" />
                        </SetReactIcon>
                      </RibbonButton>
                      <RibbonTabSubGroup style={{width:"150px"}}>
                        <RibbonIconButton caption="NE Properties">
                          <SetReactSmallIcon>
                            <GiBarbedWire className="w-3 h-3" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
                        <RibbonIconButton caption="NE Properties">
                          <SetReactSmallIcon>
                            <GiBarbedWire className="w-3 h-3" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
                        <RibbonIconButton caption="NE Properties">
                          <SetReactSmallIcon>
                            <GiBarbedWire className="w-3 h-3" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
                      </RibbonTabSubGroup>
                      <RibbonTabSubGroup style={{width:"150px"}}>
                        <RibbonIconButton caption="NE Properties">
                          <SetReactSmallIcon>
                            <GiBarbedWire className="w-3 h-3" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
                        <RibbonIconButton caption="NE Properties">
                          <SetReactSmallIcon> 
                            <GiBarbedWire className="w-3 h-3 text-black" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
                      </RibbonTabSubGroup>
                    </RibbonTabGroup>
                    </>
                    
                    }
                    {
                      isMinimized===true &&
                      <>
                        <RibbonTabGroup className={'minimize-height'}>
                          <RibbonMinimizeView elements={minimizeElements} limit={limit}/>
                        {/* <RibbonIconButton className="find-width" caption="Refresh" title="Refresh current window" onClick={()=>{alert('Refresh Button was Clicked!')}}>
                          <SetReactSmallIcon>
                            <TbRefresh className="big-icons text-black" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
                        <RibbonIconButton className="find-width" caption="Refresh" title="Refresh current window" onClick={()=>{alert('Refresh Button was Clicked!')}}>
                          <SetReactSmallIcon>
                            <TbRefresh className="big-icons text-black" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
                        <RibbonIconButton className="find-width" caption="Refresh" title="Refresh current window" onClick={()=>{alert('Refresh Button was Clicked!')}}>
                          <SetReactSmallIcon>
                            <TbRefresh className="big-icons text-black" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
                        <RibbonIconButton className="find-width" caption="Refresh" title="Refresh current window" onClick={()=>{alert('Refresh Button was Clicked!')}}>
                          <SetReactSmallIcon>
                            <TbRefresh className="big-icons text-black" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
                        <RibbonIconButton className="find-width" caption="Refresh" title="Refresh current window" onClick={()=>{alert('Refresh Button was Clicked!')}}>
                          <SetReactSmallIcon>
                            <TbRefresh className="big-icons text-black" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
                        <RibbonIconButton className="find-width"  caption="Refresh" title="Refresh current window" onClick={()=>{alert('Refresh Button was Clicked!')}}>
                          <SetReactSmallIcon>
                            <TbRefresh className="big-icons text-black" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
                        <RibbonIconButton className="find-width"  caption="Refresh" title="Refresh current window" onClick={()=>{alert('Refresh Button was Clicked!')}}>
                          <SetReactSmallIcon>
                            <TbRefresh className="big-icons text-black" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
                        <RibbonIconButton className="find-width" caption="Refresh" title="Refresh current window" onClick={()=>{alert('Refresh Button was Clicked!')}}>
                          <SetReactSmallIcon>
                            <TbRefresh className="big-icons text-black" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
          
                        <RibbonIconButton className="find-width"  caption="Refresh" title="Refresh current window" onClick={()=>{alert('Refresh Button was Clicked!')}}>
                          <SetReactSmallIcon>
                            <TbRefresh className="big-icons text-black" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
                        <RibbonIconButton className="find-width"  caption="Refresh" title="Refresh current window" onClick={()=>{alert('Refresh Button was Clicked!')}}>
                          <SetReactSmallIcon>
                            <TbRefresh className="big-icons text-black" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
                        <RibbonIconButton className="find-width"  caption="Refresh" title="Refresh current window" onClick={()=>{alert('Refresh Button was Clicked!')}}>
                          <SetReactSmallIcon>
                            <TbRefresh className="big-icons text-black" />
                          </SetReactSmallIcon>
                        </RibbonIconButton>
                        <RibbonIconButton className="find-width" caption="Refresh" title="Refresh current window" onClick={()=>{alert('Refresh Button was Clicked!')}}>
                          <SetReactSmallIcon>
                            <TbRefresh className="big-icons text-black" />
                          </SetReactSmallIcon>
                        </RibbonIconButton> */}
                      </RibbonTabGroup>

                      </>
                    }
                    <RibbonMinimize isMinimized={isMinimized} onClick={()=>setIsMinimized((prev:boolean)=>(!prev))}/>
                  </RibbonTab>
                  <RibbonTab label="Topology">
                    <RibbonTabGroup>
                      <RibbonButton  caption="Refresh" title="Refresh current window" onClick={()=>{alert('Refresh Button was Clicked!')}}>
                          <SetReactIcon>
                            <TbRefresh className="big-icons text-black" />
                          </SetReactIcon>
                        </RibbonButton>
                    </RibbonTabGroup>
                  </RibbonTab>
              </RibbonMenu>
              </>

                
    )
}

export default App;