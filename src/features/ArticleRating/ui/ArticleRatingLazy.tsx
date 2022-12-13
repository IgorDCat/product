import {ArticleRatingProps} from './ArticleRating';
import {Skeleton} from '@/shared/ui/Skeleton';
import React, {Suspense} from 'react';

const ArticleRatingAsync = React.lazy(() => import('./ArticleRating'));

export const ArticleRatingLazy = (props: ArticleRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width='100%' height={120}/>}>
            <ArticleRatingAsync {...props}/>
        </Suspense>
    )
}