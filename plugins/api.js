import axios from "axios";

const BASE_URL = process.env.BASE_URL;

export default function setup({ store }) {
  axios.interceptors.request.use(request => {
    if (request.url[0] == "/") {
      request.url = `${BASE_URL}${request.url}`;
    }

    request.headers["Accept"] = "application/json";
    if (store.getters["auth/loggined"]) {
      const credentials = store.getters["auth/credentials"];
      Object.assign(request.headers, credentials);
    }

    return request;
  });
}
