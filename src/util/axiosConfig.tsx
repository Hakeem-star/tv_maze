import axios from "axios";
axios.defaults.adapter = require("axios/lib/adapters/http");

export const getShows = (id: string) => {
  const request = axios.create({
    baseURL: `https://api.tvmaze.com/shows/${id}`,
    url: "/",
    method: "get",
  })("");
  return request;
};
export const getCast = (id: string) => {
  const request = axios.create({
    baseURL: `https://api.tvmaze.com/shows/${id}/cast`,
    url: "/",
    method: "get",
  })("");
  return request;
};

export const getSchedule = axios.create({
  baseURL: "https://api.tvmaze.com/schedule/",
  method: "get",
});
