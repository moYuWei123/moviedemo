import axios from "axios"
import qs from "qs"
axios.defaults.baseURL = 'http://59.110.138.169'
axios.defaults.timeout = 5000
axios.interceptors.request.use(function (config) {
    // 在发起请求请做一些业务处理  
    // 如开启loading  对请求的参数做处理 添加token等
    // 例  在请求的时候开启elementui的loading
  if(config.method == "post"){
      config.data = qs.stringify(config.data);
	   // loadings.close();
  }
  
  console.log(config)
    return config;
}, function (error) {
    // 对请求失败做处理
    return Promise.reject(error);
});
axios.interceptors.response.use(function (config) {
    // 在请求之后做处理 如关闭loading
  // 对返回过来的数据进行过滤操作
    return config.data;
}, function (error) {
    // 对请求失败做处理
    // loadings.close();
    return Promise.reject(error);
});
export default axios