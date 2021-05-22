import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const LoginUser = ()=> {
    return(
        <div>
            <p>Login Users</p>
        </div>
    )

}

LoginUser.propTypes ={

}

const mapStateToProps = state=> ({

})

export default connect(mapStateToProps, {})(React.memo(LoginUser))