import axios from "axios";
import { notification } from "ant-design-vue";

function request(options) {
  return axios(options).then(res => {
    return res;
  }).catch(error => {
    const { response: { status, statusText } } = error;

    notification.error({
      message: status,
      description: statusText
    });

    // By doing so, code will not get into axios.then logic
    return Promise.reject(error);
  });
}

export default request;