import React, {forwardRef, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {LiveSearch} from "../../../../inc/redux/actions/topbar/search";
import form from "../../../../inc/redux/reducers/form";
import {useHistory} from 'react-router-dom';
const FormSearch = (props)=> {
    /**
     * @define - variable
     */
    let {LiveSearch,SearchRef} = props

    const history = useHistory()

    const [formdata,setFormdata] = useState({query:''})

    const handleChange = (e)=> {
        setFormdata({...formdata, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=> {
        e.preventDefault();
            let formData = new FormData()
            formData.append('query',formdata.query)
            LiveSearch(formData)
    }


    return(
        <div className="site-hero__form">
            <form action={`/search`} method="GET" className="site-hero__form-forms">
                <div className="site-hero__input-groups fa-center">
                    <input type="text" name="query" className="site-hero__input" spellCheck="false" autoComplete="off"/>
                    <input type="text" name="related" className="site-hero__input" spellCheck="false" autoComplete="off" hidden/>
                    <button className="site-hero__input-icon position-abs" id="js-btn" aria-expanded="false">
                        <i className={'mdi mdi-magnify'}/>
                    </button>
                </div>
            </form>
        </div>
    )
}

FormSearch.propTypes = {
    LiveSearch: PropTypes.func.isRequired
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {LiveSearch})(FormSearch)