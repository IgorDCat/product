import {MutableRefObject, useEffect} from 'react';

interface useInfiniteScrollOptions {
    callBack?: () => void;
    triggerRef: MutableRefObject<HTMLDivElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = (options: useInfiniteScrollOptions) => {
    const {callBack, wrapperRef, triggerRef} = options;
    
    useEffect(() => {
        const wrapperElem = wrapperRef.current;
        const triggerElem = triggerRef.current;
        let observer: IntersectionObserver | null = null;
        
        if(callBack) {
            const options = {
                root: wrapperElem,
                rootMargin: '0px',
                threshold: 1.0
            }

            observer = new IntersectionObserver(([entry]) => {
                if(entry.isIntersecting) {
                    callBack();
                }
            }, options);

            observer.observe(triggerElem);
        }
        

        return () => {
            if(observer && triggerElem) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElem);
            }
        }

    }, [callBack, triggerRef, wrapperRef])
}