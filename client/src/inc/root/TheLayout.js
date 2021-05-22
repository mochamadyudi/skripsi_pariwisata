import React, {createRef} from 'react'

import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Route, Switch} from "react-router-dom";
import Topbar from "../../container/template-parts/topbar/public/Topbar";
import TheSearch from "../../container/pages/search/TheSearch";
const Home = ()=> {
    return (
        <div className="container">
            <div style={{border:'1px solid red',width:'100%',height:'500px'}}>

            </div>
        </div>

    )
}

const TheLayout = ()=> {
    const searchRef = createRef()
    return(
        <React.Fragment>
            <div className="site-main">
                <Topbar SearchRef={searchRef}/>
                <Switch>
                    <Route name="home" path="/" exact component={Home}/>
                    <Route name="search" path="/search" exact component={TheSearch}/>
                </Switch>
            </div>

        </React.Fragment>
    )
}

TheLayout.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps , {})(React.memo(TheLayout))