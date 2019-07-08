import axios from "axios"
const axiosInstance =  axios.create({baseURL: ""})


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

