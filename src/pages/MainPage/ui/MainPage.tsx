import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Counter} from 'entities/Counter';
import {Page} from 'shared/ui/Page/Page';

const MainPage: FC = () => {
    const {t} = useTranslation();
    return (
        <Page>
            {t('Main page')}
            <Counter/>
        </Page>
    );
}

export default MainPage;