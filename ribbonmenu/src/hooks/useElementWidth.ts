import { useEffect, useState } from 'react';

const useElementWidth = (selector: string, dependencies: any[] = []) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const elements = document.querySelectorAll(selector);
        let totalWidth = 0;
        elements.forEach(element => {
            const elementRect = element.getBoundingClientRect();
            totalWidth += elementRect.width;
        });
        setWidth(totalWidth);
    }, dependencies);

    return width;
};

export default useElementWidth;
