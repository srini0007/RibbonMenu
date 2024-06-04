// src/components/MeasureWidth.tsx

import React, { useEffect, useRef } from 'react';

interface IMeasureWidthProps {
  element: JSX.Element;
  onMeasured: (width: number) => void;
}

function MeasureWidth({ element, onMeasured }:IMeasureWidthProps){
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      onMeasured(elementRef.current.offsetWidth);
    }
  }, [onMeasured]);

  return (
    <div ref={elementRef} style={{ position: 'absolute', top: '-9999px', left: '-9999px', visibility: 'hidden' }}>
      {element}
    </div>
  );
};

export default MeasureWidth;
