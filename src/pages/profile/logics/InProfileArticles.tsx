import { apiImage, axiosInstance } from "../../../common/axiosInstance"

interface IInProfileArticles{
    id:number
}
export const InProfileArticles = async (params:IInProfileArticles) => {
    return axiosInstance.get(
        `/post/author/${params.id}`)
        .then((res: any) => { 
            return (res.data) })
        .catch(() => {
            console.log("InProfileArticles error")
        })
}
