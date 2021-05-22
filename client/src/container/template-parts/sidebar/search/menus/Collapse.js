/**
 * @author - Mochamad Yudi Sobari
 * @version - v.0.0.1
 * @desc - Collapse for Sidebar Search
 */
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const Collapse = (props)=> {
    /**
     * @desc - Define props
     */
    let {children,icons,title} = props
    const [collapse,setCollapse] = useState(false)
    return(
        <div className={`collapse ${typeof(props.element) !== 'undefined' ? props.element:''}`}>
            <div className="collapse-layout">
                <div className="collapse-layout__header flex">
                    <div className={`collapse-layout__header-icons fa-fj-center`}>
                        <i className={`mdi mdi-${icons}`}/>
                    </div>
                    <div className="collapse-layout__header-title fa-fj-center">
                        <h3 className={`collapse-title`}>{title}</h3>
                    </div>
                </div>
                <div className={`collapse-layout__content`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

Collapse.propTypes = {

}
const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(Collapse)