import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://vue-course-f379f-default-rtdb.firebaseio.com"
});

journalApi.interceptors.request.use((config) => {
  config.params = {
    auth: localStorage.getItem("idToken")
  };
  return config;
});

export default journalApi;
