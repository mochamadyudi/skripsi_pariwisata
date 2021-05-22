import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Authentication} from "../../../../../inc/redux/actions/login/Authentication";
import ElementModal from "./ElementModal";

const ModalBadge = (props) => {

    /**
     * @define - Params in props
     */
    let {title, menus, opt_switch, status} = props

    const RefModal = useRef()

    useEffect(()=> {
        if (!status){
            RefModal.current.classList.remove("active")
        }else{
            RefModal.current.classList.add("active")
        }
    })

    const ElementOpt = (opt_switch,menus)=>{
        switch (opt_switch){
            case "msg":
                return <ElementModal opt="msg" menus={menus}/>
            case "cart":
                return <ElementModal opt="cart" menus={menus}/>
            case "notify":
                return <ElementModal opt="notify" menus={menus}/>
            case "form":
                return <ElementModal opt="form" menus={menus}/>
        }
    }

    return(
        <div className="modal modal-badge hero" ref={RefModal}>
            <div className="modal-hero">
                <div className="modal-hero__title flex">
                    <h3 className="modal-title badge">{title}</h3>
                    <button type="button" title="modal-close" className="modal-hero__btn">
                        <i className="mdi mdi-close"/>
                    </button>
                </div>
                <div className="modal-hero__content">
                    {ElementOpt(opt_switch,menus)}
                </div>
            </div>
        </div>
    )
}

ModalBadge.propTypes ={
    Authentication: PropTypes.func.isRequired
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {Authentication})(ModalBadge)