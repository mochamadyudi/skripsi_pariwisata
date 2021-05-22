import React from 'react'
import {Redirect, Route} from "react-router-dom";
import {connect} from 'react-redux'
import MainVilla from "../../../container/template-parts/main/MainVilla";

/**
 *
 * @param Component
 * @param rest
 * @param is_auth
 * @param is_admin
 * @returns {JSX.Element}
 * @constructor
 */
const VillaRoute = ({component: Component, rest}) => (
    <Route
        {...rest}
        render={(props) => {
            return (
                <MainVilla>
                    <Component {...props}/>
                </MainVilla>
            )
        }}
    />

)
const mapStateToProps = state => ({
    is_admin: state.Admin.is_admin
})
export default connect(mapStateToProps, {})(VillaRoute)