import { axiosInstance } from "../../../common/axiosInstance"
import { setCustomValidityShow } from "../../../ui/customValidity/organoids/CustomValidity"

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
                // setCustomValidityShow("Ошибка сервера")
            })
    } else {
        return axiosInstance.delete(
            `/like/post/${params.postId}`)
            .then((res: any) => { params.requestInArcticle(params.postId) })
            .catch(() => {
                // setCustomValidityShow("Ошибка сервера")
            })
    }
}
