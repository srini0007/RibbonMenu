import React, { useEffect } from "react";
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
import { convertJsxToArr } from './utility/jsxToArr';
import {MifIcon} from "@metroui/icons";
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedRadio,setSelectedRadio] = useState<string>("srini");
  const options = [
    { label: 'Off', value: 'off' },
    { label: 'For Everyone', value: 'everyone' },
    { label: 'Just Mine', value: 'mine' },
  ];
  const [miniElements,setMiniElements]= useState<TMinimizeElement[]>([]);
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

  const temp =
  <>
        <section className={`container-fluid`}>
            <div className={`container text-center`}>
                <h1>Ribbon Menu for React</h1>
                <h3 className={`m-0`}>Copyright 2022 by <a href="https://korzh.com">Korzh.com</a></h3>
                <h5 className={`m-0`}>Component sponsored by <a href={`https://octostar.co/`}>Octostar.co</a> </h5>
            </div>

            <div className={`container window no-overflow`} style={{height: "800px"}}>
                <div className={`window-caption`}>
                    <span className={`caption-title`}>Ribbon Menu For React Demo</span>
                    <div className={`caption-buttons`}>
                        <span className={`caption-button btn-min`}></span>
                        <span className={`caption-button btn-max`}></span>
                        <span className={`caption-button btn-clo`}></span>
                    </div>
                </div>
                <div style={{overflow: "auto"}}>
                    <div>
                        <RibbonMenu>
                            <RibbonTab mode="static" label="Home"></RibbonTab>
                            <RibbonTab label="File">
                                <RibbonTabGroup title="Push Buttons"> 
                                    <RibbonButton key={"IconButton"} caption="Mail" icon="mif-envelop" title="Write Mail" onClick={()=>{alert('Mail Button was Clicked!')}}/>
                                    <RibbonButton key={"IconButton"} caption="Share" icon="mif-share"/>
                                    <RibbonDropdown key={"IconDropdown"}>
                                        <RibbonButton  caption="Apps" icon="mif-apps" title="Applications"/>
                                        <RibbonDropdownMenu>
                                            <RibbonDropdownItem caption="Windows 10" onClick={(e:any)=>{console.log(e)}}/>
                                            <RibbonDropdownItem caption="Windows 11"/>
                                            <RibbonDropdownItem caption="Office 365"/>
                                            <RibbonButtonGroup key={"CheckBox"} active={2}>
                                                <RibbonDropdownItem caption="Windows 10" onClick={(e:any)=>{console.log(e)}}/>
                                                <RibbonDropdownItem caption="Windows 11"/>
                                                <RibbonDropdownItem caption="Office 365"/>
                                            </RibbonButtonGroup>
                                            <RibbonButtonGroup key={'RadioButton'} active={[2]} radio>
                                                <RibbonDropdownItem caption="Windows 10"/>
                                                <RibbonDropdownItem caption="Windows 11"/>
                                                <RibbonDropdownItem caption="Office 365"/>
                                            </RibbonButtonGroup>
                                        </RibbonDropdownMenu>
                                    </RibbonDropdown>
                                </RibbonTabGroup>

                                <RibbonTabGroup title="Icon and Tool buttons">
                                    <RibbonTabSubGroup style={{width: '70px'}}>
                                        <RibbonIconButton  key={"IconButton"} caption="Mail" icon="mif-envelop"/>
                                        <RibbonIconButton  key={"IconButton"} caption="Share" icon="mif-share"/>
                                        <RibbonDropdown key={'IconDropdown'}>
                                            <RibbonIconButton caption="Rocket" icon="mif-rocket"/>
                                            <RibbonDropdownMenu>
                                                <RibbonDropdownItem caption="Windows 10"/>
                                                <RibbonDropdownItem caption="Windows 11"/>
                                                <RibbonDropdownItem caption="Office 365"/>
                                            </RibbonDropdownMenu>
                                        </RibbonDropdown>
                                    </RibbonTabSubGroup>
                                </RibbonTabGroup>


                                <RibbonTabGroup title="Button Groups">

                                    <RibbonButtonGroup key={'RadioButton'} radio  style={{width: "200px", maxHeight: "88px", }}>
                                        <RibbonIconButton caption="List" icon="mif-list"/>
                                        <RibbonIconButton caption="Gear" icon="mif-cog"/>
                                        <RibbonIconButton caption="Barcode" icon="mif-barcode"/>
                                        <RibbonIconButton caption="Bell" icon="mif-bell"/>
                                        <RibbonIconButton caption="Cast" icon="mif-cast"/>
                                        <RibbonIconButton caption="Calculator" icon="mif-calculator2"/>
                                    </RibbonButtonGroup>

                                    <RibbonButtonGroup key={'CheckBox'} style={{width: "100px"}}>
                                        <RibbonIconButton caption="Italic" icon="mif-italic" title="Set italic text"/>
                                        <RibbonIconButton caption="Bold" icon="mif-bold"/>
                                        <RibbonIconButton caption="Underline" icon="mif-underline"/>
                                    </RibbonButtonGroup>

                                

                                </RibbonTabGroup>
                            </RibbonTab>
                            <RibbonTab label="Edit"></RibbonTab>
                            <RibbonTab label="View"></RibbonTab>
                        </RibbonMenu>
                    </div>
                </div>
            </div>
        </section>
  </>
useEffect(()=>{
  setMiniElements(convertJsxToArr(temp));

},[])
console.log("a",miniElements);
  // console.log(isMinimized);
    return (
            <div style={{overflow: "auto"}}>
              <div>
              <RibbonMenu >
                  <RibbonTab label="Home" mode="default">
                    { isMinimized===false && 
                      <>
                      <RibbonTabGroup title="">
                        <RibbonButton icon="fas fa-home"  caption="Refresh" title="Refresh current window" onClick={()=>{alert('Refresh Button was Clicked!')}}>
                          {/* <SetReactIcon>
                            <TbRefresh className="big-icons text-black" />
                          </SetReactIcon> */}
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
                          <RibbonMinimizeView elements={miniElements} limit={limit}/>
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
              </div>
              </div>

                
    )
}

export default App;