import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {ListBox} from 'shared/ui/ListBox/ListBox';
import {Page} from 'widgets/Page/Page';

const MainPage: FC = () => {
    const {t} = useTranslation();
    return (
        <Page>
            {t('Main page')}
            <ListBox onChange={(value: string) => {}} defaultValue={'select item'} value={undefined} label={'select: '}
                items={[
                    {value: '123', content: '123'},{value: '234', content: '234'},{value: '345', content: '345', disabled: true},
                ]}
            />
        </Page>
    );
}

export default MainPage;