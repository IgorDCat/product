import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Page} from '@/widgets/Page';
import {Counter} from '@/entities/Counter';
import {VStack} from '@/shared/ui/Stack';

const MainPage: FC = () => {
    const {t} = useTranslation();
    return (
        <Page>
            <VStack gap='10'>
                {t('Main page')}
                <Counter/>
            </VStack>
        </Page>
    );
}

export default MainPage;