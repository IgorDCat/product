import React, { Suspense } from "react";
import {Modal} from "shared/ui/Modal/Modal";
import {LoginFormLazy} from "features/AuthByUserName/ui/LoginForm/LoginFormLazy";
import {Loader} from "shared/ui/Loader/Loader";

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