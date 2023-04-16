import { createEvent, createStore } from "effector"

export const $searchValue = createStore("")
export const setSearchValue = createEvent<string>()
$searchValue.on(setSearchValue, (_, val) => val)
