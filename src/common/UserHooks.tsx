import { createEvent, createStore } from "effector";

export const $user= createStore<any>({firstName:"Ванька",lastName:"1"})  
export const setUser = createEvent<any>()
$user.on(setUser, (_,val)=> val);
