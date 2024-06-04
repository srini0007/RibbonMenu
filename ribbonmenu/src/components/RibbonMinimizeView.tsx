// src/components/RibbonMinimizeView.tsx

import React, { useEffect, useRef, useState } from 'react';
import { FindTag } from './FindTag';
import MeasureWidth from './MeasureWidth';
import RibbonMinimize from './RibbonMinimize';
import RibbonExtra from './RibbonExtra';
import Dropdown from './Dropdown';
export type TMinimizeElement =   | {
    type: 'IconButton';
    label?: string;
    class?: string;
    children?: any;
    onClick?:any;
  }
| {
    type: 'IconDropDown';
    label?: string;
    class?: string;
    children?: any;
    arr: {label?:string,
        class?:string,
        children?:any,
        onClick?:any,
    }[]; 
  };

interface IRibbonMinimizeElement {
  elements: TMinimizeElement[];
  limit?: number;
}

function RibbonMinimizeView({ elements, limit }:IRibbonMinimizeElement) {
  const [measuredWidths, setMeasuredWidths] = useState<JSX.Element[] | any>([]);
  const [validElements, setValidElements] = useState<JSX.Element[] | any>([]);
  const [maxIndex,setMaxIndex]= useState(0);
  const [extraElements, setExtraElements] = useState<TMinimizeElement[]>([]);
  const [openExtra,setOpenExtra] = useState(false);
  const widthLimit = limit || 1000000;

  useEffect(() => {
    const widths: number[] = [];
    const handleMeasurement = (index: number) => (width: number) => {
      widths[index] = width;
      if (widths.length === elements.length) {
        const cumulativeWidths = widths.map((w, i) => widths.slice(0, i + 1).reduce((a, b) => a + b, 0));
        const filteredElements = elements.filter((_, i) => cumulativeWidths[i] <= widthLimit);
        setValidElements(filteredElements.map(FindTag));

        let lastIndex = 0;
        for (let i = 0; i < cumulativeWidths.length; i++) {
          if (cumulativeWidths[i] <= widthLimit) {
            lastIndex = i;
          } else {
            break;
          }
        }
        setMaxIndex(lastIndex);

        const extra = elements.filter((_, i) => cumulativeWidths[i] > widthLimit);
        setExtraElements(extra);
      
      }
    };

    
    const measuringElements = elements.map((element, index) => {
      const elementTag = FindTag(element);
      return elementTag && <MeasureWidth key={index} element={elementTag} onMeasured={handleMeasurement(index)} />;
    });

    setMeasuredWidths(measuringElements as any);
  }, [elements, widthLimit]);
    console.log(maxIndex);
  return (
    <>
      {measuredWidths}
      {validElements}
      {/* {
        (elements.length-1)>maxIndex && 
        <RibbonExtra onClick={()=>(setOpenExtra((prev:boolean)=>!prev))}/>
      } */}
      {
        extraElements.length>0 &&
        <Dropdown
            items={extraElements.map((element) => ({
              label: element.label || '',
              onClick: () => console.log(`${element.label} clicked`),
            })
        )} 
        />
      }
    </>
  );
};

export default RibbonMinimizeView;
