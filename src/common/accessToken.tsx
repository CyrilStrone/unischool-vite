import { createEvent, createStore } from "effector";
import { accessTokenName } from "./axiosInstance";
import { setUserAuthorization } from "./UserHooks";

export const $accessToken = createStore<string>("")
export const setAccessToken = createEvent<string>()
$accessToken.on(setAccessToken, (_, val) => val)

$accessToken.updates.watch((token) => {
    localStorage.setItem(accessTokenName, token);
});
  
export const UserLogout =()=>{
    localStorage.setItem(accessTokenName, "");
    setUserAuthorization(false)
}