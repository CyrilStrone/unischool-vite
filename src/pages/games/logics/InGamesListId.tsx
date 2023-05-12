import { axiosInstance } from "../../../common/axiosInstance"

interface IInGamesListId{
    id:any
}
export const InGamesListId = async (params:IInGamesListId) => {
    return axiosInstance.get(
        `/game/${params.id}`)
        .then((res: any) => { return (res.data) })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}
