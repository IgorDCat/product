import React, {memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import {ArticleImageBlock} from '../../model/types/article';
import {TextCustom, TextAlign} from 'shared/ui/Text/TextCustom';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const {className, block} = props;
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt={block?.title || ''} className={cls.img}/>
            {block.title && (
                <TextCustom text={block.title} align={TextAlign.CENTER}/>
            )}
        </div>);
})