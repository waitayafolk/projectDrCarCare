import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_MY_ENV_VARIABLE,
  timeout: 30000,
})

const RequestInterceptor = {
  _config: (config) => {
    const getParse = JSON.parse(localStorage.getItem('token')) || null;
    config.headers['Authorization'] = `${getParse}`;

    return config;
  },
  _error: (error) => {
    Promise.reject(error);
  },
};

const ResponseInterceptor = {
  _response: (response) => {
    const { data } = response
    return data;
  },
  _error: (error) => {
    return Promise.reject(error);
  },
};

// API Request interceptor
service.interceptors.request.use(
  (config) => RequestInterceptor._config(config),
  (error) => RequestInterceptor._error(error)
);

service.interceptors.response.use(
  (response) => ResponseInterceptor._response(response),
  (error) => ResponseInterceptor._error(error)
);

export default service