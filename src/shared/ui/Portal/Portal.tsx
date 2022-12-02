import {FC, ReactNode} from 'react';
import {createPortal} from 'react-dom';

interface PortalProps {
    targetElem?: HTMLElement;
    disablePortal?: boolean;
    children?: ReactNode
}

export const Portal: FC<PortalProps> = (props) => {
    const {children, targetElem = document.body, disablePortal} = props;

    if(disablePortal) {
        return <>{children}</>
    }

    return createPortal(children, targetElem)
}