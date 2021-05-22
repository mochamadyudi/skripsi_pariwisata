import React from 'react'
import {Redirect, Route} from "react-router-dom";
import {connect} from 'react-redux'

const PrivateRoute = ({component: Component, rest, is_auth})=>(
    <Route
        {...rest}
        render={(props)=>{
            return is_auth ? (
                <Component {...props}/>
            ) : <Redirect to="/notfound" />
        }
        }
    />

)
const mapStateToProps = state=> ({
    is_auth: state.users.is_auth
})
export default connect(mapStateToProps,{})(PrivateRoute)