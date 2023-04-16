import { apiImage, axiosInstance } from "../../../common/axiosInstance"

export const InProfile = async () => {
    return axiosInstance.get(
        `/profile`)
        .then((res: any) => { 
            let local = res.data;
            local.avatar = apiImage + local.avatar;
            return (local) })
        .catch(() => {
            console.log("InProfile error")
        })
}
