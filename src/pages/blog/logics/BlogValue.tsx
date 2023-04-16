import { createEvent, createStore } from "effector"

export interface IBlogValue{
    authorId: number
    background: string
    createdDate: string
    description: string
    editDate: string
    id: number
    title: string
}
export const $blogValue = createStore<IBlogValue[]>([])
export const setBlogValue = createEvent<IBlogValue[]>()
$blogValue.on(setBlogValue, (_, val) => val)