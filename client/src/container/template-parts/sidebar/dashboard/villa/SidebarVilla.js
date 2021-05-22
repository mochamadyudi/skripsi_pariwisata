import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const SidebarVilla = ()=> {
    return(
        <div className="sidebar-villa">
            <p>Sidebar Villa</p>
        </div>
    )
}

SidebarVilla.propTypes ={

}
const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(React.memo(SidebarVilla))