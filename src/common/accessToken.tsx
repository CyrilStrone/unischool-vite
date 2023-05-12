import { createEvent, createStore } from "effector";
import { InProfile } from "../pages/profile/logics/InProfile";
import { accessTokenName, axiosInstance } from "./axiosInstance";
import { setUser } from "./UserHooks";

export const $accessToken = createStore<string>("")
export const setAccessToken = createEvent<string>()
$accessToken.on(setAccessToken, (_, val) => val)

$accessToken.updates.watch(async (token) => {
    localStorage.setItem(accessTokenName, (token));
    axiosInstance.defaults.headers.authorization = `Bearer ${token}`
    if(token){
        setUser(await InProfile())
    }
});
  
export const UserLogout =()=>{
    setAccessToken("")
}