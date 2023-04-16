import { axiosInstance } from "../../../common/axiosInstance"


export const InHeaderUser = async () => {
    return axiosInstance.get(
        `/profile/avatar`)
        .then((res: any) => { return (res.data.avatar) })
        .catch(() => {
            console.log("InHeaderUser error")
        })
}
