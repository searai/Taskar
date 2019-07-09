import axios from "axios"
const bUrl = (process.env.NODE_ENV === "production") ? "" : "http://localhost:5000"
const axiosInstance =  axios.create({baseURL: bUrl})

axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(localStorage.getItem("token")){
        config.headers = {authorization: `Bearer ${localStorage.getItem("token")}`}
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


export default  axiosInstance

