import axios from "axios";

export const accessTokenName = "accessTokenName"

export const axiosInstance = axios.create({
    baseURL: "http://26.74.162.51:3000/api",
    headers: {
		authorization: `Bearer ${localStorage.getItem(accessTokenName)}`
	},
});
export const apiImage = "http://26.74.162.51:3000/image/"