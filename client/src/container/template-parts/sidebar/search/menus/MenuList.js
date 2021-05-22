/**
 * @author - Mochamad Yudi Sobari
 * @desc - Menu item for sidebar Search
 */

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const MenuList = (props)=> {
    /**
     * @desc - Define props
     */
    let {title,url,icon} = props

    return(
        <div className="menu search fa-center">
            <div className="menu-icon">
                <i className={`mdi mdi-${icon}`}/>
            </div>
            <div className="menu-title">
                <p>{title}</p>
            </div>
            <div className="menu-chevron">

            </div>
        </div>

    )
}

MenuItem.propTypes ={

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(MenuList)