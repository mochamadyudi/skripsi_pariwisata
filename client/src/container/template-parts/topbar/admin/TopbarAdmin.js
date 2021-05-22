import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const TopbarAdmin = ()=> {
    return(
        <div>
            <p>Topbar</p>
        </div>
    )
}

TopbarAdmin.propTypes = {

}

const mapStateToProps = state => ({

})



export default connect(mapStateToProps, {})(React.memo(TopbarAdmin))