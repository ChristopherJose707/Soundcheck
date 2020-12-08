export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = modal => {  // modal will either be "login" or "signup"
    return ({
        type: OPEN_MODAL,
        modal
    })
};

export const closeModal = () => {
    return ({
        type: CLOSE_MODAL
    })
};