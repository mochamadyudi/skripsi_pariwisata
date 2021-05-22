import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import FormSearch from "./FormSearch";
import {SITE_NAME} from "../../../../inc/types/types";
import Menus from "./menus";

const Topbar = (props)=> {

    /**
     * @define - Variable
     */
    let {SearchRef} = props

    return(
        <header className="site-hero" aria-expanded="false">
            <div className="site-hero__container fa-center">
                <div className="site-hero__branch">
                    <Link to={''}>
                        <h1 className={'site-hero__branch-title'}>{SITE_NAME}</h1>
                    </Link>
                </div>
                <FormSearch SearchRef={SearchRef}/>
                <Menus/>
            </div>
        </header>
    )
}


Topbar.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(Topbar)