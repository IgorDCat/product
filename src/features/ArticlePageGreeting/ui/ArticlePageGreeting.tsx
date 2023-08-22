import React from 'react';
import {Modal} from '@/shared/ui/Modal';
import {useTranslation} from 'react-i18next';
import {useJsonSettings} from '@/entities/User';
import {useState} from 'react';
import {useEffect} from 'react';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {saveJsonSettings} from '@/entities/User';
import {useCallback} from 'react';

export const ArticlePageGreeting = () => {
    const {t} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const {isFirstVisitArticles} = useJsonSettings();
    const dispatch = useAppDispatch();

    const onCloseModal = useCallback(() => {
        setIsOpen(false)
    }, [])
    
    useEffect(() => {
        if(isFirstVisitArticles) {
            setIsOpen(true);
            dispatch(saveJsonSettings({isFirstVisitArticles: false}))
        }
    }, [dispatch, isFirstVisitArticles])
    
    return (
        <Modal
            isOpen={isOpen}
            onClose={onCloseModal}
        >
            {t('Welcome to articles page')}
        </Modal>
    );
};