import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const LoginAdmin = ()=> {
    return(
        <div>
            <p>Login Admin</p>
        </div>
    )

}

LoginAdmin.propTypes ={

}

const mapStateToProps = state=> ({

})

export default connect(mapStateToProps, {})(React.memo(LoginAdmin))