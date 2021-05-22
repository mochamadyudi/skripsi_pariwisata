import {
    TOPBAR_AUTH_MODAL,
    TOPBAR_CART_GET_BOOKING_NOT_FOUND,
    TOPBAR_CART_GET_ERROR,
    TOPBAR_CART_GET_SUCCESS, TOPBAR_CART_GET_TICKET_NOT_FOUND, TOPBAR_CART_MODAL,
    TOPBAR_CART_SET_MAX_BOOKING,
    TOPBAR_CART_SET_MAX_TICKET,
    TOPBAR_CART_SET_PAGES_BOOKING,
    TOPBAR_CART_SET_PAGES_TICKET, TOPBAR_MSG_MODAL, TOPBAR_NOTIFY_MODAL
} from "../../types/types";

const initialState = {
    cart: {
        is_open: false,
        booking: {
            is_found: false,
            limit: 10,
            page: 1,
            total: 0,
            data: []
        },
        ticket: {
            is_found: false,
            limit: 10,
            page: 1,
            total: 0,
            data: []
        }
    },
    notify: {
        is_open: false,
        data: []
    },
    message: {
        is_open: false,
        data: []
    },
    users:{
        is_auth: false,
        data:[]
    }
}

export default function (state = initialState, action) {
    let {type, payload} = action
    switch (type) {
        /**
         * @define - set Cart
         */
        case TOPBAR_CART_MODAL:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    is_open: !state.cart.is_open
                },
                notify: {
                    ...state.notify,
                    is_open: false
                },
                message: {
                    ...state.message,
                    is_open: false
                },
                users: {
                    ...state.users,
                    is_auth: false
                }
            }
        case TOPBAR_CART_GET_SUCCESS:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    booking: {
                        ...state.cart.booking,
                        is_found: payload.booking.found,
                        total: payload.booking.total,
                        data: payload.booking.data
                    },
                    ticket: {
                        ...state.cart.ticket,
                        is_found: payload.ticket.found,
                        total: payload.ticket.total,
                        data: payload.data.ticket,
                    }
                }
            }
        case TOPBAR_CART_GET_BOOKING_NOT_FOUND:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    booking: {
                        ...state.cart.booking,
                        is_found: false,
                        total: 0,
                        data: []
                    }
                }
            }
        case TOPBAR_CART_GET_TICKET_NOT_FOUND:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    ticket: {
                        ...state.cart.ticket,
                        is_found: false,
                        total: 0,
                        data: []

                    }
                }
            }
        case TOPBAR_CART_GET_ERROR:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    booking: {
                        ...state.cart.booking,
                        is_found: false,
                        total: 0,
                        data: []
                    },
                    ticket: {
                        ...state.cart.ticket,
                        is_found: false,
                        total: 0,
                        data: [],
                    }
                }
            }
        case TOPBAR_CART_SET_MAX_BOOKING:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    booking: {
                        ...state.cart.booking,
                        limit: payload
                    }
                }
            }
        case TOPBAR_CART_SET_PAGES_BOOKING:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    booking: {
                        ...state.cart.booking,
                        page: payload
                    }

                }
            }
        case TOPBAR_CART_SET_MAX_TICKET:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    ticket: {
                        ...state.cart.ticket,
                        limit: payload
                    }
                }
            }
        case TOPBAR_CART_SET_PAGES_TICKET:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    ticket: {
                        ...state.cart.ticket,
                        page: payload
                    }
                }
            }

        /**
         * @author - Mochamad Yudi Sobari
         * @define - Notify
         */

        /**
         * @degine - Notify OPEN
         */
        case TOPBAR_NOTIFY_MODAL:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    is_open: false
                },
                notify: {
                    ...state.notify,
                    is_open: !state.notify.is_open
                },
                message: {
                    ...state.message,
                    is_open: false
                },
                users: {
                    ...state.users,
                    is_auth: false
                }
            }
        case TOPBAR_MSG_MODAL:
            return{
                ...state,
                cart: {
                    ...state.cart,
                    is_open: false
                },
                notify: {
                    ...state.notify,
                    is_open: false
                },
                message: {
                    ...state.message,
                    is_open: !state.message.is_open
                },
                users: {
                    ...state.users,
                    is_auth: false
                }
            }
        case TOPBAR_AUTH_MODAL:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    is_open: false
                },
                notify: {
                    ...state.notify,
                    is_open: false
                },
                message: {
                    ...state.message,
                    is_open: false
                },
                users: {
                    ...state.users,
                    is_auth: !state.users.is_auth
                }
            }
        default:
            return state;

    }
}