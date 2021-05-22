import React, {createRef} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Topbar from "../../container/template-parts/topbar/public/Topbar";
import ModalDefault from "../../container/template-parts/modal/ModalDefault";

const Main = (props)=> {
    let {children,opt_themes, opt_direction} = props

    return(
        <div className={`${opt_themes} ${opt_direction}-support`} dir={opt_direction}>
            {children}
        </div>
    )
}

Main.propTypes = {
    children : PropTypes.element.isRequired
}

const mapStateToProps = state => ({
    opt_themes: state.opt.opt_themes,
    opt_direction:  state.opt.opt_direction
})

export default connect(mapStateToProps , {})(Main)