import { createEvent, createStore } from "effector";
import { $accessToken } from "./accessToken";
import { accessTokenName, axiosInstance } from "./axiosInstance";
import Ava from './assets/profile/Ava.png'

export const $userAuthorization = createStore<boolean>(false)
export const setUserAuthorization = createEvent<boolean>()
$userAuthorization.on(setUserAuthorization, (_,val)=> val);

export const $userName= createStore<string>("Даня Булгаков")  
export const setUserName = createEvent<string>()
$userName.on(setUserName, (_,val)=> val);


$accessToken.updates.watch((token) => {
    if (token) {
        axiosInstance.defaults.headers.authorization = `Bearer ${token}`;
        setUserAuthorization(true)
      }else{
        setUserAuthorization(false)
      }
});

