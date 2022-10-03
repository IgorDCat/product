import {ReactNode} from "react";
import {createPortal} from "react-dom";

interface PortalProps {
	children: ReactNode;
    targetElem?: HTMLElement
}

export const Portal = (props: PortalProps) => {
    const {children, targetElem = document.createElement("div")} = props

    return createPortal(children, targetElem)
}