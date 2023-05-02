import { createEvent, createStore } from "effector";

export const $userName= createStore<string>("Даня Булгаков")  
export const setUserName = createEvent<string>()
$userName.on(setUserName, (_,val)=> val);



