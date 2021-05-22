import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import {Authentication} from "../../../../../inc/redux/actions/login/Authentication";
import Lottie from "react-lottie";

const ElementModal = (props)=> {

    /**
     * @define - params in props
     */
    let {opt,menus,form,Authentication} = props


    /**
     * @define - State
     */
    const [formdata,setFormdata] = useState({
        username:'',
        password:''
    })

    const [loading,setLoading] = useState(false)

    /**
     * @define - Lottie Options
     */
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: require('../../../../../assets/lottie/spinner_loading.json'),
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    /**
     * @define - Handle
     * @param e
     */
    const handleChange = (e)=> {setFormdata({...formdata, [e.target.name]: e.target.value})}

    const handleSubmit = (e)=> {
        e.preventDefault()
        let formData = new FormData();
        formData.append('username', formdata.username)
        formData.append('password', formdata.password)
        Authentication(formData,setLoading)
    }



    switch (opt){
        case "msg":
            return (
                <nav className="modal-menus">
                    {menus.data.map((item,index)=> (
                        <li key={index} className="modal-menus__item flex">
                            <div className="modal-menus__item-itm left">
                                <div className="images-item"/>
                            </div>
                            <div className="modal-menus__item-itm right">

                            </div>
                        </li>
                    ))}
                </nav>
            );
        case "cart":
            return (
                <nav className="modal-menus">
                    {menus.data.map((item,index)=> (
                        <li key={index} className={`modal-menus__item flex`}>
                            <div className="modal-menus__item-itm left">
                                <div className="images-item"/>
                            </div>
                            <div className="modal-menus__item-itm right">

                            </div>
                        </li>
                    ))}
                </nav>
            )
        case "notify":
            return(
                <nav className="modal-menus">
                    {menus.data.map((item,index)=> (
                        <li key={index} className={`modal-menus__item flex`}>
                            <div className="modal-menus__item-itm left">
                                <div className="images-item"/>
                            </div>
                            <div className="modal-menus__item-itm right">

                            </div>
                        </li>
                    ))}
                </nav>
            )
        case "form":
            return(
                <form onSubmit={handleSubmit} action={"/tes"} className={'modal-form'}>
                    <div className="modal-form__input groups">
                        <label htmlFor="username"><p>Username</p></label>
                        <input type="text" name="username" onChange={handleChange} className="modal-form__input input" autoComplete="off" spellCheck="false"/>
                    </div>
                    <div className="modal-form__input groups">
                        <label htmlFor="password"><p>Password</p></label>
                        <input type="password" name="password" onChange={handleChange} className="modal-form__input input" autoComplete="off" spellCheck="false"/>
                    </div>
                    <button type="submit" className="btn btn-submit">
                        {
                            loading ? (
                                <div className="load-spinner">
                                    <Lottie options={defaultOptions}
                                            height={120}
                                            width={120}
                                            isStopped={false}
                                            isPaused={false}/>
                                </div>
                            ):"login"
                        }
                    </button>
                </form>
            )
    }
}
ElementModal.propTypes = {
    Authentication: PropTypes.func.isRequired
}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {Authentication})(ElementModal)