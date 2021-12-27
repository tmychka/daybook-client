import http from '../../../api'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createSession(username, password) {
    return http.post("/session", { username, password });
  },
  deleteSession() {
    return http.delete("/session", {});
  },
  createUser(user) {
    return http.post("/users", user);
  }
};
