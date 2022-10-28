import {FC} from 'react';
import {createPortal} from 'react-dom';

interface PortalProps {
    targetElem?: HTMLElement;
    disablePortal?: boolean;
}

export const Portal: FC<PortalProps> = (props) => {
    const {children, targetElem = document.body, disablePortal} = props;

    if(disablePortal) {
        return <>{children}</>
    }

    return createPortal(children, targetElem)
}