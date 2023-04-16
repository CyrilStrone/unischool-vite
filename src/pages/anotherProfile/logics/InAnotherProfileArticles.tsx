import { apiImage, axiosInstance } from "../../../common/axiosInstance"

interface IInAnotherProfileArticles{
    id:number
}
export const InAnotherProfileArticles = async (params:IInAnotherProfileArticles) => {
    return axiosInstance.get(
        `/post/author/${params.id}`)
        .then((res: any) => { 
            return (res.data) })
        .catch(() => {
            console.log("InAnotherProfileArticles error")
        })
}
