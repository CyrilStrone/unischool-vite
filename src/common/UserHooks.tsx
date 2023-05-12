import { createEvent, createStore } from "effector";

export const $user= createStore<any>({})  
export const setUser = createEvent<any>()
$user.on(setUser, (_,val)=> val);

export interface ILevel{
    start:number
    end:number
    score:number
    index:number
}
export const $level= createStore<ILevel>({start:0,end:0,score:0,index:0})  
export const setLevel = createEvent<ILevel>()
$level.on(setLevel, (_,val)=> val);