import React, {createRef, useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import ModalBadge from "../modal/ModalBadge";
import {ModalMenus} from "../../../../../inc/redux/actions/topbar/menus";

const Menus = (props) => {

    /**
     * @define - Props
     * @desc - Define Variable
     */
    let {cart, notify, message, users, ModalMenus, is_auth, loading, avatar} = props

    const [load, setLoad] = useState(false)

    const [opt_menus, setOpt_menus] = useState({
        cart: {
            data: []
        },
        msg: {
            data: []
        },
        notify: {
            data: []
        },
        login: {
            data: []
        }
    })

    useEffect(() => {
        if (!load) {
            setOpt_menus({
                ...opt_menus,
                cart: {
                    data: [
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {}
                    ]
                },
                msg: {
                    data: [
                        {},
                        {},
                        {}
                    ]
                },
                notify: {
                    data: [
                        {}
                    ]
                },
                login: {
                    data: []
                }
            })
            setLoad(true)
        }
    })

    /**
     * handle
     */

    const handleClick = (query) => {
        // if (is_auth){
        ModalMenus(query)
        // }
    }


    return (
        <nav className="site-hero__menus fa-center">

            <div className="menu-icons fa-center">
                {
                    !loading && (
                        <React.Fragment>
                            <div className={`site-hero__notification ${is_auth === true ? '' : 'disabled'}`}>
                                <button
                                    className={`btn btn-primary ${cart.is_open ? 'active' : ''}`}
                                    title="cart"
                                    type="button"
                                    name="cart"
                                    aria-selected="false"
                                    onClick={() => {
                                        if (is_auth) {

                                            handleClick('cart')
                                        }
                                    }}
                                >
                                    <i className={`mdi mdi-${is_auth ? "cart" : "cart-off"}`}/>
                                </button>
                                <ModalBadge
                                    status={cart.is_open}
                                    title={'Carts'}
                                    opt_switch={'cart'}
                                    menus={opt_menus.cart}
                                />
                            </div>
                            <div className={`site-hero__notification ${is_auth === true ? '' : 'disabled'}`}>
                                <button
                                    className={`btn btn-primary ${message.is_open ? 'active' : ''}`}
                                    title="message"
                                    type="button"
                                    name="message"
                                    aria-selected="false"
                                    onClick={() => {
                                        if (is_auth) {

                                            handleClick('msg')
                                        }
                                    }}
                                >
                                    <i className={`mdi mdi-message-bulleted${is_auth === true ? '' : '-off'}`}/>
                                </button>
                                <ModalBadge
                                    status={message.is_open}
                                    title={'Message'}
                                    opt_switch={'msg'}
                                    menus={opt_menus.msg}
                                />
                            </div>
                            <div className="site-hero__notification">
                                <button
                                    className={`btn btn-primary ${notify.is_open ? 'active' : ''}`}
                                    title="notify"
                                    type="button"
                                    name="notify"
                                    aria-selected="false"
                                    onClick={() => {
                                        handleClick('notify')
                                    }}>
                                    <i className="mdi mdi-bell"/>
                                </button>
                                <ModalBadge
                                    status={notify.is_open}
                                    title={'Notification'}
                                    opt_switch={'notify'}
                                    menus={opt_menus.notify}
                                />
                            </div>
                        </React.Fragment>
                    )}
            </div>

            <div className="menu-users fa-center">
                {
                    !loading && (
                        is_auth ?
                            <div className="user-active">
                                <img src={avatar} alt=""/>
                            </div>
                            :
                            <button
                                className={`btn btn-auth ${notify.is_open ? 'active' : ''}`}
                                title="Button Login"
                                type="button"
                                name="btn_login"
                                aria-selected="false"
                                onClick={() => {
                                    handleClick('login')
                                }}
                            >
                                Login
                            </button>
                    )
                }
                <ModalBadge
                    status={users.is_auth}
                    title={'Login'}
                    opt_switch={'form'}
                    menus={false}
                />
            </div>
        </nav>
    )
}

Menus.propTypes = {
    ModalMenus: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    notify: state.topbar.notify,
    cart: state.topbar.cart,
    message: state.topbar.message,
    users: state.topbar.users,
    is_auth: state.users.is_auth,
    loading: state.users.loading,
    avatar: state.users.avatar
})

export default connect(mapStateToProps, {ModalMenus})(Menus)