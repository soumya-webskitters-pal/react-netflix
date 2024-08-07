//import modal module css
import "../modals/Modal.css";

import { createPortal }        from "react-dom";
import { useState, useEffect } from 'react'

const Modal = ({
    Title,
    children,
    onClose,
    settings: {
        modalClass = '',
        darkMode = false,
        footer = false
    } = {}
}) => {

    const [fadeIn, setfadeIn] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setfadeIn(true);
        }, 5);
        return () => clearTimeout(timer);
    }, []);
    const [isVisible, setIsVisible] = useState(true);
    
    const handleClose = () => {
        setIsVisible(false); // Update the state variable to hide the modal
        onClose({ isVisible: false, index: -1 });
    };

    return createPortal(
        <>
            <div
                //Background of the modal
                className={`modal_backdrop ${fadeIn ? 'active' : 'disabled'} ${darkMode ? 'dark' : 'light'}`}
                onClick={handleClose}
            />
            <div className={`page_modal ${fadeIn ? 'show' : 'hidden'} ${modalClass} ${darkMode ? 'dark' : 'light'}`}>
                <div className="modal_dialog">
                    <div className="modal_wrapper container">
                        <div className="modal_inner">
                            <div className="modal_header">
                                {Title ? <h2>{Title}</h2> : null}
                                <button onClick={handleClose} className={`modal_closeBtn ${darkMode ? 'dark' : 'light'}`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" fill="currentColor" /></svg></button>
                            </div>
                            <div className="modal_body">
                                {children}
                            </div>
                            {footer ? <div className="modal_footer">
                                <button onClick={handleClose} className={`modal_closeBtn ${darkMode ? 'dark' : 'light'}`}>Close</button>
                            </div> : null}
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.body);
};
export default Modal;



