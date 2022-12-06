import React, {memo, MutableRefObject, ReactNode, useRef, UIEvent} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import {useInfiniteScroll} from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {getScrollByPath, scrollSaverActions} from '@/features/ScrollSaver';
import {useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {StateSchema} from '@/app/providers/StoreProvider';
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import {useThrottle} from '@/shared/lib/hooks/useThrottle/useThrottle';

interface PageProps {
    className?: string;
    children?: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
    const {className, children, onScrollEnd} = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const {pathname} = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname))

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callBack: onScrollEnd
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaverActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname
        }))
    }, 500)

    return (
        <main
            className={classNames(cls.Page, {}, [className])}
            ref={wrapperRef}
            onScroll={onScroll}
        >
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef}/> : null}
        </main>
    );
})