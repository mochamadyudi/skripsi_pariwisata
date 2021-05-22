import axiosInstance from "../../../helper/AxiosInstance";
import {AUTH_ERROR, AUTH_SUCCESS, HEADERS, USER_LOAD} from "../../../types/types";
import {setAlert} from "../alert/SetAlert";
import {ModalMenus} from "../topbar/menus";
import SetAuthToken from "../../../utils/SetAuthToken";

/**
 *
 * @constructor
 */
export const LoadUser = ()=> async dispatch =>{
    SetAuthToken()
    await axiosInstance.get('/api/v1/auth/load-user',HEADERS)
        .then((res)=> {
            dispatch({
                type: USER_LOAD,
                payload: res.data
            });
        })
        .catch((err)=> {
            dispatch({
                type: AUTH_ERROR
            });
        })

}

/**
 * @param formdata
 * @param setLoading
 * @returns {function(*): Promise<*|undefined>}
 * @constructor
 */
export const Authentication = (formdata, setLoading) => async dispatch => {
    setLoading(true)
    let object = {}
    formdata.forEach((val, i) => {
        object[i] = val
    })
    if (object.username === "" && object.password === "") {
        setLoading(false)
        return dispatch(setAlert('Tidak boleh Kosong', 'danger'))
    }
    if (object.username === "") {
        setLoading(false)
        return dispatch(setAlert('Username tidak boleh kosong', 'danger'))
    }
    if (object.password === "") {
        setLoading(false)
        return dispatch(setAlert('Password tidak boleh Kosong', 'danger'))
    }

    await axiosInstance.post('/api/v1/auth/login', {email: object.username, password: object.password})
        .then((res) => {
            if (res.status === 200) {
                if (typeof(res.data.errors) !== "undefined"){
                    dispatch({type: AUTH_ERROR})
                    setLoading(false)
                    dispatch(setAlert(typeof (res.data.errors) !== "undefined" ? res.data.errors : 'Error', 'danger'))
                }else{
                    dispatch(ModalMenus('login'))
                    dispatch(setAlert(res.data.msg , 'success'))
                    dispatch({
                        type: AUTH_SUCCESS,
                        payload: res.data
                    })
                    setLoading(false)
                }
            }
        })
        .catch((err) => {
            setLoading(false)
            dispatch({
                type: AUTH_ERROR,
                payload: ''
            })
            dispatch(setAlert(typeof (err) !== "undefined" ? err : 'Error', 'danger'))
        })
}