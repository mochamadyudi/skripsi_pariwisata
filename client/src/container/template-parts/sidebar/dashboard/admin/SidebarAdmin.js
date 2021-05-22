import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const SidebarAdmin = ()=> {
    return(
        <div>
            <p>Sidebar Admin</p>
        </div>
    )
}

SidebarAdmin.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(React.memo(SidebarAdmin))