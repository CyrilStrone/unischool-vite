import { createEvent, createStore } from "effector";
import { requestInProfile } from "../App";
import { accessTokenName, axiosInstance } from "./axiosInstance";
import { setUser } from "./UserHooks";

export const $accessToken = createStore<string>("")
export const setAccessToken = createEvent<string>()
$accessToken.on(setAccessToken, (_, val) => val)

$accessToken.updates.watch((token) => {
    localStorage.setItem(accessTokenName, (token));
    axiosInstance.defaults.headers.authorization = `Bearer ${token}`
    if(token){
        setUser(requestInProfile())
    }
});
  
export const UserLogout =()=>{
    setAccessToken("")
}