import { apiImage, axiosInstance } from "../../../common/axiosInstance"

export interface IInAnotherProfile{
    id:number
}

export const InAnotherProfile = async (params:IInAnotherProfile) => {
    return axiosInstance.get(
        `/user/${params.id}`)
        .then((res: any) => { 
            let local = res.data;
            local.avatar = apiImage + local.avatar;
            return (local) })
        .catch(() => {
            window.location.pathname = "";
        })
}
