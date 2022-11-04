import React, {memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import {ArticleTextBlock} from '../../model/types/article';
import {TextCustom} from 'shared/ui/Text/TextCustom';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const {className, block} = props;
    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])} key={block.id}>
            {block.title &&
                <TextCustom title={block.title} className={cls.title}/>
            }
            {block.paragraphs.map((p, index) =>
                <TextCustom text={p} key={index} className={cls.paragraph}/> )
            }
        </div>);
})