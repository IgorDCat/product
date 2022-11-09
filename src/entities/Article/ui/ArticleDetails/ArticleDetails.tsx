import React, {memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import {useTranslation} from 'react-i18next';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {articleDetailsReducer} from '../../model/slice/articleDetailsSlice';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {fetchArticleById} from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import {useSelector} from 'react-redux';
import {
    getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading
} from '../../model/selectors/getArticleDetails';
import {TextAlign, TextCustom, TextSize, TextTheme} from 'shared/ui/Text/TextCustom';
import {Skeleton} from 'shared/ui/Skeleton/Skeleton';
import {Avatar} from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye-icon.svg';
import CalendarIcon from 'shared/assets/icons/calendar-icon.svg';
import {Icon} from 'shared/ui/Icon/Icon';
import {ArticleBlock, ArticleBlockType} from '../../model/types/article';
import {ArticleCodeBlockComponent} from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {ArticleImageBlockComponent} from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import {ArticleTextBlockComponent} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {useInitialEffect} from 'shared/lib/hooks/UseInitialEffect/UseInitialEffect';

interface ArticleDetailsProps {
    className?: string;
    id: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo(({
    className,
    id
}: ArticleDetailsProps) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const data = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch(block.type) {
            case ArticleBlockType.CODE:
                return <ArticleCodeBlockComponent block={block} className={cls.block} key={block.id}/>;
            case ArticleBlockType.IMAGE:
                return <ArticleImageBlockComponent block={block} className={cls.block} key={block.id}/>;
            case ArticleBlockType.TEXT:
                return <ArticleTextBlockComponent block={block} className={cls.block} key={block.id}/>;
        }
    }, []);

    useInitialEffect(() => dispatch(fetchArticleById(id)));

    let content;

    if(isLoading) {
        content = (<div className={cls.skelWrap}>
            <Skeleton width={200} height={200} border='50%' className={cls.avatar}/>
            <Skeleton width={700} height={32} className={cls.title}/>
            <Skeleton width={400} height={26}/>
            <Skeleton width='90vw' height={200}/>
            <Skeleton width='90vw' height={200}/>
        </div>)
    } else if(error) {
        content = (<TextCustom
            title={t('Some error has occurred')}
            theme={TextTheme.ERROR}
            align={TextAlign.CENTER}
        />)
    } else {
        content = (<>
            <div className={cls.avatarWrapper}>
                <Avatar src={data?.img} size={200} className={cls.avatar}/>
            </div>
            <TextCustom
                title={data?.title}
                text={data?.subtitle}
                className={cls.title}
                size={TextSize.L}
            />
            <div className={cls.articleInfo}>
                <Icon Svg={EyeIcon}/>
                <TextCustom text={String(data?.views)}/>
            </div>
            <div className={cls.articleInfo}>
                <Icon Svg={CalendarIcon}/>
                <TextCustom text={data?.createdAt}/>
            </div>
            {data?.blocks && data?.blocks.map(renderBlock)}
        </>)
    }

    return (<DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            {content}
        </div>
    </DynamicModuleLoader>);
})