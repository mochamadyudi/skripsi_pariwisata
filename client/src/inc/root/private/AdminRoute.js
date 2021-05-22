import React from 'react'
import {Redirect, Route} from "react-router-dom";
import {connect} from 'react-redux'
import MainAdmin from "../../../container/template-parts/main/MainAdmin";

const AdminRoute = ({component: Component, rest}) => (
    <Route
        {...rest}
        render={(props) => {
            return (
                <MainAdmin>
                    <Component {...props}/>
                </MainAdmin>
            )
        }}
    />

)

const mapStateToProps = state => ({
    is_admin: state.Admin.is_admin
})
export default connect(mapStateToProps, {})(AdminRoute)