import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Page} from '@/widgets/Page';


const AdminPanelPage: FC = () => {
    const { t } = useTranslation('about');
    return (
        <Page data-testid='AdminPanelPage'>
            {t('Admin page')}
        </Page>
    );
}

export default AdminPanelPage;