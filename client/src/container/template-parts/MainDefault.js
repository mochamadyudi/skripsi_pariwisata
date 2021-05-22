import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Topbar from "./topbar/public/Topbar";

const MainDefault = (props)=> {
    return(
        <Fragment>
            <Topbar SearchRef={searchRef}/>
            <div className="site-main">
                {props.children}
            </div>
        </Fragment>
    )
}
MainDefault.propTypes = {
    children: PropTypes.element.isRequired
}
const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(React.memo(MainDefault))