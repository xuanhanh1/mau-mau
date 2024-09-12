import { log } from "console";
import axios from "axios";
// const config = require("./default.json");

export default function callApi(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body?: any,
  contentType = "application/json; charset=utf8; odata.metadata=minimal; odata.streaming=true"
) {
  let isServer = typeof window === "undefined";
  if (isServer) {
    let token = null;
    if (token) {
      return axios({
        headers: {
          "Content-Type": contentType,
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          url: window.location.pathname,
        },
        method: method,
        url: `${process.env.BASE_URL}/${endpoint}`,
        data: body,
      });
    } else {
      return axios({
        headers: {
          "Content-Type": contentType,
          Accept: "application/json",
        },
        method: method,
        url: `${process.env.BASE_URL}/${endpoint}`,
        data: body,
      });
    }
  } else {
    let token = null;
    if (token) {
      return axios({
        headers: {
          "Content-Type": contentType,
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          url: window.location.pathname,
        },
        method: method,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`,
        data: body,
      });
    } else {
      return axios({
        headers: {
          "Content-Type": contentType,
          Accept: "application/json",
        },
        method: method,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`,
        data: body,
      });
    }
  }
}
