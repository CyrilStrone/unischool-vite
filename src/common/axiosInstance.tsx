import axios, { AxiosError } from "axios";
import { setAccessToken } from "./accessToken";

export const accessTokenName = "UniSchoolToken"

export const axiosInstance = axios.create({
    baseURL: "http://26.74.162.51:3000/api",
    headers: {
		authorization: `Bearer ${localStorage.getItem(accessTokenName)}`
	},
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    console.log("error",error)
    if (error?.response?.status === 401) {
      console.log("401")
      setAccessToken("")
    }
  }
);


export const apiImage = "http://26.74.162.51:3000/image/"