import axios from "axios";
import { notification } from "ant-design-vue";

function request(options) {
  return axios(options).then(res => {
    return res;
  }).catch(error => {
    const { response: { status, statusText } } = error;

    notification.error({
      // Customized error notification with html tags, namely Vuejs jsx supportive
      // Repository: https://github.com/vuejs/jsx
      // eslint-disable-next-line no-unused-vars
      message: h => (
        <div>
          Request Error <span style="color:red;">{ status }</span> : { options.url }
        </div>
      ),
      description: statusText
    });

    // By doing so, code will not get into axios.then logic
    return Promise.reject(error);
  });
}

export default request;