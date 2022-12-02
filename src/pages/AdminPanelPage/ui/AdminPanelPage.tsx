import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Page} from 'widgets/Page/Page';


const AdminPanelPage: FC = () => {
    const { t } = useTranslation('about');
    return (
        <Page>
            {t('Admin page')}
        </Page>
    );
}

export default AdminPanelPage;