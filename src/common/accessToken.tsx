import { createEvent, createStore } from "effector";
import { accessTokenName, axiosInstance } from "./axiosInstance";

export const $accessToken = createStore<string>("")
export const setAccessToken = createEvent<string>()
$accessToken.on(setAccessToken, (_, val) => val)

$accessToken.updates.watch((token) => {
    axiosInstance.defaults.headers.authorization = `Bearer ${token}`
    localStorage.setItem(accessTokenName, token);
});
  
export const UserLogout =()=>{
    setAccessToken("")
}