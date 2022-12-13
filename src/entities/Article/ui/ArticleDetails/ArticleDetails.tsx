import CalendarIcon from '@/shared/assets/icons/calendar-icon.svg';
import EyeIcon from '@/shared/assets/icons/eye-icon.svg';
import {classNames} from '@/shared/lib/classNames/classNames';
import {DynamicModuleLoader, ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import {Avatar} from '@/shared/ui/Avatar';
import {Icon} from '@/shared/ui/Icon';
import {Skeleton} from '@/shared/ui/Skeleton';
import {HStack} from '@/shared/ui/Stack';
import {Text, TextAlign, TextSize, TextTheme} from '@/shared/ui/Text';
import React, {memo, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {ArticleBlockType} from '../../model/consts/articleConsts';
import {
    getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading
} from '../../model/selectors/getArticleDetails';
import {fetchArticleById} from '../../model/services/fetchArticleById/fetchArticleById';
import {articleDetailsReducer} from '../../model/slice/articleDetailsSlice';
import {ArticleBlock} from '../../model/types/article';
import {ArticleCodeBlockComponent} from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {ArticleImageBlockComponent} from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import {ArticleTextBlockComponent} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id?: string
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

    useInitialEffect(() => {
        if(id) {
            dispatch(fetchArticleById(id))
        }
    });

    let content;

    if(isLoading) {
        content = (<div>
            <Skeleton width={200} height={200} border='50%' className={cls.avatar}/>
            <Skeleton width={700} height={32} className={cls.title}/>
            <Skeleton width={400} height={26}/>
            <Skeleton width='90vw' height={200}/>
            <Skeleton width='90vw' height={200}/>
        </div>)
    } else if(error) {
        content = (<Text
            title={t('Some error has occurred')}
            theme={TextTheme.ERROR}
            align={TextAlign.CENTER}
        />)
    } else {
        content = (<>
            <HStack justify='center' max>
                <Avatar src={data?.img} size={200} className={cls.avatar}/>
            </HStack>
            <Text
                title={data?.title}
                text={data?.subtitle}
                className={cls.title}
                size={TextSize.L}
            />
            <HStack align='center' gap='5'>
                <Icon Svg={EyeIcon}/>
                <Text text={String(data?.views)}/>
            </HStack>
            <HStack align='center' gap='5'>
                <Icon Svg={CalendarIcon}/>
                <Text text={data?.createdAt}/>
            </HStack>
            {data?.blocks && data?.blocks.map(renderBlock)}
        </>)
    }

    return (<DynamicModuleLoader reducers={reducers}>
        <div className={classNames('', {}, [className])}>
            {content}
        </div>
    </DynamicModuleLoader>);
})