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
    is_verification: false,
    token:localStorage.getItem("token"),
    email:null,
    avatar:null,
    date_created:null,
    loading:true,
}

export default function (state = initialState, action) {
    let {type, payload} = action
    switch (type) {
        case USER_LOAD:
            return{
                ...state,
                is_auth: true,
                is_verification: payload.is_active,
                email: payload.email,
                token:localStorage.getItem("token"),
                avatar:payload.avatar,
                date_created:payload.date,
                loading:false,
            }
        case AUTH_SUCCESS:
            localStorage.setItem("token", payload.token);
            return{
                ...state,
                is_auth: true,
                is_verification: payload.is_verification,
                token:payload.token,
                email: payload.email,
                avatar:payload.avatar,
                date_created:payload.date,
                loading:false,
            }
        case AUTH_ERROR:
            localStorage.removeItem("token");
            return{
                ...state,
                is_auth: false,
                is_verification: false,
                token:null,
                email: null,
                avatar:null,
                date_created:null,
                loading:false,
            }
        default:
            return state;

    }
}