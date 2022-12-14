import React, { Suspense } from 'react';
import {Modal} from '@/shared/ui/Modal';
import {LoginFormLazy} from '../LoginForm/LoginFormLazy';
import {Loader} from '@/shared/ui/Loader';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const {className, isOpen, onClose} = props;

    return (
        <Modal
            className={className}
            isOpen={isOpen}
            onClose={onClose}
        >
            <Suspense fallback={<Loader/>}>
                <LoginFormLazy onSuccess={onClose}/>
            </Suspense>
        </Modal>
    );
}