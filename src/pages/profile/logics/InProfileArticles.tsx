import { apiImage, axiosInstance } from "../../../common/axiosInstance"
import { setCustomValidityShow } from "../../../ui/customValidity/organoids/CustomValidity"

interface IInProfileArticles{
    id:number
}
export const InProfileArticles = async (params:IInProfileArticles) => {
    return axiosInstance.get(
        `/post/author/${params.id}`)
        .then((res: any) => { 
            return (res.data) })
        .catch(() => {
            // setCustomValidityShow("Ошибка сервера")
        })
}
