import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const DashboardAdmin = ()=> {
    return(
        <div>
            <p>Dashboard Admin</p>
        </div>
    )
}

DashboardAdmin.propTypes = {

}

const mapStateToProps = state => ({

})

export default  connect(mapStateToProps, {})(React.memo(DashboardAdmin))