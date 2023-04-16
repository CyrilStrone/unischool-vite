import { axiosInstance } from "../../../common/axiosInstance"

export interface IInArcticle{
    id:number
}
export const InArcticle = async (params:IInArcticle) => {
    return axiosInstance.get(
        `/post/${params.id}`)
        .then((res: any) => { return (res.data) })
        .catch(() => {
            console.log("InArcticle error")
        })
}
