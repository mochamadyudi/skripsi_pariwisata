import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import TopbarAdmin from "../topbar/admin/TopbarAdmin";
import SidebarAdmin from "../sidebar/dashboard/admin/SidebarAdmin";

const MainAdmin = (props)=> {
    let {children} = props
    return(
        <div className={'site-admin'}>
            <TopbarAdmin/>
            <SidebarAdmin/>
            <div>
                {children}
            </div>
        </div>
    )
}

MainAdmin.propTypes = {
    children: PropTypes.element.isRequired
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(React.memo(MainAdmin))