import { axiosInstance } from "../../../common/axiosInstance"

export interface IInSearchValue {
    title: string
}

export const InSearchValue = async (params: IInSearchValue) => {
    return axiosInstance.get(
        `/search/${params.title}`)
        .then((res: any) => { return (res.data) })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}
