import { useEffect } from "react";

export default function ResizeListner(){
    useEffect(() => {
        const handleResize = () => {
            console.log('윈도우 크기 변경:', window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <p>창 크기 변경을 콘솔에서 확인하세요.</p>;
}   