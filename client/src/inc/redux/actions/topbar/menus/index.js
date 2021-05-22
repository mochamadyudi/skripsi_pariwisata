import {TOPBAR_CART_MODAL, TOPBAR_MSG_MODAL, TOPBAR_NOTIFY_MODAL} from "../../../../types/types";


export const ModalMenus = (query) => async dispatch => {
    switch (query){
        case "cart":
            dispatch({
                type:TOPBAR_CART_MODAL,
            });
            break;
        case "notify":
            dispatch({
                type:TOPBAR_NOTIFY_MODAL,
            });
            break;
        case "msg":
            dispatch({
                type:TOPBAR_MSG_MODAL,
            });
            break;
        case "login":
            dispatch({
                type:"TOPBAR_AUTH_MODAL"
            })
    }
}