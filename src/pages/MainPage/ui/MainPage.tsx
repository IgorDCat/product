import {RatingCard} from '@/entities/Rating';
import {StarRating} from '@/shared/ui/StarRating/StarRating';
import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Page} from '@/widgets/Page/Page';

const MainPage: FC = () => {
    const {t} = useTranslation();
    return (
        <Page>
            {t('Main page')}
            <RatingCard title='Как вам статья?' hasFeedback feedbackTitle={'Оставьте отзыв'}/>
        </Page>
    );
}

export default MainPage;