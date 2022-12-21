import axios from "axios";

export const APIHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: {
    toString() {
      return `Bearer ${localStorage.getItem("token")}`;
    },
  },
};

export const API = axios.create({
  
  baseURL: "https://petsback-production.up.railway.app/api/v1/animal",
  timeout: 25000,
  headers: APIHeaders,
});
