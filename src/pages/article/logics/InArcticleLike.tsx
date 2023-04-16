import { axiosInstance } from "../../../common/axiosInstance"

export interface IInArcticleLike {
    postId: number
    delete: boolean
    requestInArcticle: any
}
export const InArcticleLike = async (params: IInArcticleLike) => {
    if (!params.delete) {
        return axiosInstance.post(
            `/like/post/${params.postId}`)
            .then((res: any) => { params.requestInArcticle(params.postId) })
            .catch(() => {
                console.log("InArcticleLike error")
            })
    } else {
        return axiosInstance.delete(
            `/like/post/${params.postId}`)
            .then((res: any) => { params.requestInArcticle(params.postId) })
            .catch(() => {
                console.log("InArcticleLike error")
            })
    }
}
