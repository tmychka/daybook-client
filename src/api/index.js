 import axios from "axios";

const API_URL = false ? 'https://mydaybook.herokuapp.com' : 'http://localhost:5000';

// `baseURL` is prepended to URLs passed to axios
axios.defaults.baseURL = API_URL;

// POST with JSON content type
axios.defaults.headers.post["Content-Type"] = "application/json";

export const setAuthToken = (authToken) => {
  if (!authToken) return;

  axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
};

// Intercept all 401 Unauthorized responses before they are handled by `then` or `catch`
axios.interceptors.response.use(response => response, (error) => {
  if (error.response.status === 401) {
    document.dispatchEvent(new CustomEvent('logout'));
  } else {
    return Promise.reject(error);
  }
});

export default axios; // use http as name on import
