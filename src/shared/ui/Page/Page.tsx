import React, {memo, MutableRefObject, ReactNode, useRef} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import {useInfiniteScroll} from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

interface PageProps {
    className?: string;
    children?: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
    const {className, children, onScrollEnd} = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callBack: onScrollEnd
    })

    return (
        <section className={classNames(cls.Page, {}, [className])} ref={wrapperRef}>
            {children}
            <div ref={triggerRef}/>
        </section>
    );
})