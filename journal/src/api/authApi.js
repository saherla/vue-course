import axios from "axios";

const authApi = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
  params: {
    key: "AIzaSyC58viaNHOY9btE3Hk4CsvTv6-XM6s4fnk"
  }
});

export default authApi;
