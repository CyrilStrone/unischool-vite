import { axiosInstance } from "../../../common/axiosInstance"

export interface IInArcticleLikeCheck {
    postId: number
    setCheck: any
}
export const InArcticleLikeCheck = async (params: IInArcticleLikeCheck) => {
    return axiosInstance.get(
        `/like/check/${params.postId}`)
        .then((res: any) => {
            if (res.data.likeCheck) {
                params.setCheck(true)
            } else {
                params.setCheck(false)
            }
        })
        .catch(() => {
            console.log("InArcticleLikeCheck error")
        })
}
