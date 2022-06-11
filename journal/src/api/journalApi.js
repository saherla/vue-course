import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://vue-course-f379f-default-rtdb.firebaseio.com"
});

export default journalApi;
