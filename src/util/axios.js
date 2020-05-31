import axios from "axios";
import url from "./url"
var instace =axios.create({
    baseURL: url,
    timeout: 4000,
    headers:{"Content-Type":"application/json"},
})
// 添加请求拦截器
instace.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers.token=localStorage.getItem("token")
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instace.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    console.log(error);
    if (!error.response) {
      alert("未登录或登录过期")
      localStorage.clear()
      window.location.reload()
      return Promise.reject("网络错误")
    }
    return Promise.reject(error);
  });
export default instace