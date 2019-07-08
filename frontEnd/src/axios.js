import axios from "axios"
require('dotenv').config()
const baseUrl = process.env.BASE_URL
console.log(baseUrl)

const axiosInstance =  axios.create({baseURL: baseUrl})


axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(localStorage.getItem("token")){
        config.headers = {authorization: `Bearer ${this.getToken}`}
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


export default  axiosInstance

