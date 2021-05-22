/**
 * CONFIGURATION
 */
export const IP_BACKEND         = process.env.BACKEND
export const PORT               = process.env.PORT


/**
 * -------------------------------------------------------------------------------------
 * @author - Mochamad Yudi Sobari
 * @desc - options global website
 * @define - {{ ROOT }}
 */

export const CHANGE_DIRECTION_TO_LTR           = "CHANGE_DIRECTION_TO_LTR"
export const CHANGE_DIRECTION_TO_RTL           = "CHANGE_DIRECTION_TO_RTL"
export const CHANGE_SIDEBAR_VISIBILITY         = "CHANGE_SIDEBAR_VISIBILITY"
export const CHANGE_MOBILE_SIDEBAR_VISIBILITY  = "CHANGE_MOBILE_SIDEBAR_VISIBILITY"

export const ROOT_API              = "http://localhost:5000"
export const HEADERS    = {
    headers:{
        "Content-Type": "application/json"
    }
}
/**
 * @define - {{ END ROOT }}
 * -------------------------------------------------------------------------------------
 */

/**
 * @author - Mochamad Yudi Sobari
 * @desc - SITE NAME
 */
export const SITE_NAME                  ="Skripsiku"


/**
 * @author - Mochamad Yudi Sobari
 * @desc - Themes dark/light
 * @type {string}
 */
export const CHANGE_THEME_TO_DARK              = "CHANGE_THEME_TO_DARK"
export const CHANGE_THEME_TO_LIGHT             = "CHANGE_THEME_TO_LIGHT"

/**
 * @author - Mochamad Yudi Sobari
 * @desc - Notification Pusher
 * @type {string}
 */
export const SET_NOTIF                         = "SET_NOTIF"

/**
 * @author - Mochamad Yudi Sobari
 * @desc - Modal
 * @type {string}
 */
export const SHOW_MODAL                        = "SHOW_MODAL"

/**
 * @author - Mochamad Yudi Sobari
 * @define - Alert
 * @desc - Alert
 * @type {string}
 */
export const SET_ALERT                          = "SET_ALERT"
export const REMOVE_ALERT                       = "REMOVE_ALERT"

/**
 * @author - Mochamad Yudi Sobari
 * @define - Topbar
 * @desc - cart
 * @type {string}
 */
export const TOPBAR_CART_MODAL                   = "TOPBAR_CART_MODAL"
export const TOPBAR_CART_GET_SUCCESS            = "TOPBAR_CART_GET_SUCCESS"
export const TOPBAR_CART_GET_BOOKING_NOT_FOUND  = "TOPBAR_CART_GET_BOOKING_NOT_FOUND"
export const TOPBAR_CART_GET_TICKET_NOT_FOUND   = "TOPBAR_CART_GET_TICKET_NOT_FOUND"
export const TOPBAR_CART_GET_ERROR              = "TOPBAR_CART_GET_ERROR"
export const TOPBAR_CART_SET_MAX_BOOKING        = "TOPBAR_CART_SET_MAX_BOOKING"
export const TOPBAR_CART_SET_PAGES_BOOKING      = "TOPBAR_CART_SET_PAGES_BOOKING"
export const TOPBAR_CART_SET_MAX_TICKET         = "TOPBAR_CART_SET_MAX_TICKET"
export const TOPBAR_CART_SET_PAGES_TICKET       = "TOPBAR_CART_SET_PAGES_TICKET"

/**
 * @author - Mochamad Yudi Sobari
 * @define - Topbar
 * @desc - Notify
 * @type {string}
 */
export const TOPBAR_NOTIFY_MODAL       = "TOPBAR_NOTIFY_MODAL"

/**
 * @author - Mochamad Yudi Sobari
 * @define - Topbar
 * @desc - message
 * @type {string}
 */
export const TOPBAR_MSG_MODAL       = "TOPBAR_MSG_MODAL"

/**
 * @author - Mochamad Yudi Sobari
 * @define - Topbar
 * @desc - authentication
 * @type {string}
 */

export const TOPBAR_AUTH_MODAL       = "TOPBAR_AUTH_MODAL"

/**
 * @author - Mochamad Yudi Sobari
 * @define - Topbar
 * @desc - form (search)
 * @type {string}
 */
export const TOPBAR_FORM_FOCUS                  = "TOPBAR_FORM_FOCUS"
export const TOPBAR_FORM                        = "TOPBAR_FORM_FOCUS"
export const TOPBAR_FORM_BLUR                   = "TOPBAR_FORM_BLUR"
export const TOPBAR_FORM_ERROR                  = "TOPBAR_FORM_ERROR"
export const TOPBAR_FORM_MODAL                  = "TOPBAR_FORM_MODAL"
export const TOPBAR_FORM_MODAL_CLOSE            = "TOPBAR_FORM_MODAL_CLOSE"


/**
 * @author - Mochamad Yudi Sobari
 * @define - Sidebar
 * @desc -
 * @type {string}
 */
export const SIDEBAR_COLLAPSE_HARGA             = "SIDEBAR_COLLAPSE_HARGA"
export const SIDEBAR_COLLAPSE_OTHER             = "SIDEBAR_COLLAPSE_OTHER"
export const SIDEBAR_COLLAPSE_LOCATION          = "SIDEBAR_COLLAPSE_LOCATION"

/**
 * @author - Mochamad Yudi sobari
 * @define - AUTHENTICATION
 * @type {string}
 */

export const IS_AUTHENTICATED                   = "IS_AUTHENTICATED"
export const AUTH_SUCCESS                       = "AUTH_SUCCESS"
export const AUTH_ERROR                         = "AUTH_ERROR"
export const USER_LOAD                          = "USER_LOAD"
export const IS_LOGGED_OUT                      = "IS_LOGGED_OUT"

/**
 * @author - Mochamad Yudi Sobari
 * @define - LANG
 * @desc   - language
 * @type {string}
 */
export const LANG_ID                            = "LANG_ID"
export const LANG_EN                            = "LANG_EN"