import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const MainUsers = (props)=> {
    return(
        <div>
            <p>User Dashboard</p>
            {props.children}
        </div>
    )
}

MainUsers.propTypes = {
    children : PropTypes.element.isRequired
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(React.memo(MainUsers))