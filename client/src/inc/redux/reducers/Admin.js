import {
    TOPBAR_AUTH_MODAL,
    TOPBAR_CART_GET_BOOKING_NOT_FOUND,
    TOPBAR_CART_GET_ERROR,
    TOPBAR_CART_GET_SUCCESS, TOPBAR_CART_GET_TICKET_NOT_FOUND, TOPBAR_CART_MODAL,
    TOPBAR_CART_SET_MAX_BOOKING,
    TOPBAR_CART_SET_MAX_TICKET,
    TOPBAR_CART_SET_PAGES_BOOKING,
    TOPBAR_CART_SET_PAGES_TICKET, TOPBAR_MSG_MODAL, TOPBAR_NOTIFY_MODAL, USER_LOAD
} from "../../types/types";
import {
    AUTH_SUCCESS,
    AUTH_ERROR
} from "../../types/types";

const initialState = {
    is_auth: false,
    is_admin: false,
    token:null,
    email:null,
    avatar:null,
    date_created:null,
    loading:true,
}

export default function (state = initialState, action) {
    let {type, payload} = action
    switch (type) {
        default:
            return state;

    }
}