import axios from 'axios'
import jwt from 'jsonwebtoken'
import {ROOT_API} from "../types/types";

let headers = {}
let body = {}

// const source = axios.CancelToken.source();
const axiosInstance = axios.create({
    baseURL: ROOT_API,
    headers:{
        ...headers,
        "Authorization":localStorage.getItem("token"),
    },
    data:{
        ...body
    }
})
axiosInstance.isCancel = axios.isCancel;

axiosInstance.interceptors.response.use(
    (res)=>

        new Promise((resolve,reject)=>{
            resolve(res)
        }),
    (err)=>{
        if (!err.response){
            return new Promise((resolve,reject)=> {
                reject(err)
            })
        }
        if  (err.response.status === 401){
            console.log('error')
        }else{
            return new Promise((resolve,reject)=> {
                reject(err)
            })
        }
    }

)

export default axiosInstance;