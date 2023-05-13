import { createEvent, createStore } from "effector"

export const $searchValue = createStore<any | null>(null)
export const setSearchValue = createEvent<any | null>()
$searchValue.on(setSearchValue, (_, val) => val)

export const $searchResult = createStore<any | null>(null)
export const setSearchResult = createEvent<any | null>()
$searchResult.on(setSearchResult, (_, val) => val)