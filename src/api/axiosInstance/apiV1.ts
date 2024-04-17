import { notifications } from "@mantine/notifications";
import axios from "axios";
import Cookies from "js-cookie";

const API_URL = import.meta.env.VITE_API_URL;

const apiV1Instance = axios.create({
  baseURL: API_URL,
  headers: {},
});

apiV1Instance.interceptors.request.use((config) => {
  // get access token from cookie (browser)
  const accessTokenCookieVal = Cookies.get("id");
  config.headers["Authorization"] = "Bearer " + accessTokenCookieVal;

  return config;
});

apiV1Instance.interceptors.response.use((config) => {
  if (config.data?.exception) {
    notifications.show({
      message: config.data?.exception,
      color: "red",
      title: "Error",
    });
    throw new Error(config.data?.exception);
  }

  return config;
});

export { apiV1Instance };
