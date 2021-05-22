import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import TopbarVilla from "../topbar/villa/TopbarVilla";
import SidebarVilla from "../sidebar/dashboard/villa/SidebarVilla";

const MainVilla = (props)=> {
    return(
        <div className={'site-villa'}>
            <TopbarVilla/>
            <SidebarVilla/>
            {props.children}
        </div>
    )
}

MainVilla.propTypes = {
    children : PropTypes.element.isRequired
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(React.memo(MainVilla))