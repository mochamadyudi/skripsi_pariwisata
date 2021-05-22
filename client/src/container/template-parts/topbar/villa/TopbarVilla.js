import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const TopbarVilla = ()=> {
    return(
        <div className="villa-header">
            <p>Header</p>
        </div>
    )
}

TopbarVilla.propTypes = {

}

const mapStateToProps = state=> ({

})

export default connect(mapStateToProps, {})(React.memo(TopbarVilla))