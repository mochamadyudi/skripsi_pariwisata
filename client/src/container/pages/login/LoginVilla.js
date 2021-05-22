import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const LoginVilla = ()=> {
    return(
        <div>
            <p>Login Villa</p>
        </div>
    )

}

LoginVilla.propTypes ={

}

const mapStateToProps = state=> ({

})

export default connect(mapStateToProps, {})(React.memo(LoginVilla))