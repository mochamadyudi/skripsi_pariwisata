import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Sidebar from "../../template-parts/sidebar/search/index.";

const TheSearch = (props) => {
    /**
     * @desc - Define props
     */
    let {} = props
    return (
        <div className="container top">
            <div className="site-main__wrapper flex">
                <Sidebar/>
            </div>
        </div>
    )
}

TheSearch.propTypes = {}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {})(TheSearch)