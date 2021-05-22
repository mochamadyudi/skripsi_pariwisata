import React, {Fragment, useEffect} from 'react'
import {Switch, Route} from "react-router-dom";
import Main from "./Main";

import NotFound from "./404";
import TheLayout from "./TheLayout";
import AdminRoute from "./private/AdminRoute";
import DashboardAdmin from "../../container/pages/admin/Dashboard";
import LoginUser from "../../container/pages/login/Login";
import LoginAdmin from "../../container/pages/login/LoginAdmin";
import LoginVilla from "../../container/pages/login/LoginVilla";
import VillaRoute from "./private/VillaRoute";


const Routes = () => {

    return (
        <Main>
            <Switch>
                <Route exact name="Login" path="/login" component={LoginUser}/>
                <Route exact name="Login" path="/admin/login" component={LoginAdmin}/>
                <AdminRoute exact path={"/admin"} component={DashboardAdmin}/>
                <VillaRoute exact path={"/villa"} component={DashboardAdmin}/>
                <Route exact name="Login" path="/villa/login" component={LoginVilla}/>
                <Route exact  name="Public" render={(props) => <TheLayout {...props}/>}/>
                <Route name="Not Found" path="/404" component={NotFound}/>
            </Switch>
        </Main>
    )
}

export default Routes