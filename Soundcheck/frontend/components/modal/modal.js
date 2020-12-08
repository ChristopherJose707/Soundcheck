import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import SignUpFormContainer from '../session/signup_form_container';

const Modal = ({modal, closeModal}) => {
    if (!modal) {
        return null;
    }
    let component;

    switch(modal) {
        case 'login':
            component = <LoginFormContainer />
            break;
        case 'signup': 
            component = <SignUpFormContainer />
            break;
        default: 
            return null;
    }

    return (
        <div className="modal-background" onMouseDown={closeModal}>
            <button className="modal-close-button" onClick={closeModal}>X</button>
            <div className="modal-child" onMouseDown={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
};

export default Modal; 