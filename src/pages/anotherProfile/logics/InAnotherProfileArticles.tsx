import { apiImage, axiosInstance } from "../../../common/axiosInstance"
import { setCustomValidityShow } from "../../../ui/customValidity/organoids/CustomValidity"

interface IInAnotherProfileArticles{
    id:number
}

export const InAnotherProfileArticles = async (params:IInAnotherProfileArticles) => {
    return axiosInstance.get(
        `/post/author/${params.id}`)
        .then((res: any) => { 
            return (res.data) })
        .catch(() => {
            // setCustomValidityShow("Ошибка сервера")
        })
}
