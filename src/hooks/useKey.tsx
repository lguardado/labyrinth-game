import { useRef, useEffect } from "react";

const useKey = (key: string, callback: any) => {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    });

    useEffect(() => {
        function handleKeyPress(event: any) {
            if (event.code === key) {
                callbackRef.current(event);
            }
        }

        document.addEventListener('keydown', handleKeyPress)
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [key]);
}

export default useKey;