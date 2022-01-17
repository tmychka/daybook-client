import http, { setAuthToken } from '../../../api';

export { setAuthToken };

const api = {
  checkLogin() {
    return http.get('/check_login');
  },
  loginUser(user) {
    return http.post('/login', user);
  },
  createUser(user) {
    return http.post('/users', user);
  },
};

export default api;
