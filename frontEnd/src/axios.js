import axios from "axios"
const baseUrl = (process.env.VUE_APP_BASE_URL)? process.env.VUE_APP_BASE_URL: ""

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

