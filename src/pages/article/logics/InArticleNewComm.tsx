import { axiosInstance } from "../../../common/axiosInstance"

export interface IInArticleNewComm {
    postId: number
    text: string
    requestInArcticle: any
}
export const InArticleNewComm = async (params: IInArticleNewComm) => {
    return axiosInstance.post(
        `/comment`, {
        "postId": params.postId,
        "text": params.text
    })
        .then((res: any) => { params.requestInArcticle(params.postId) })
        .catch(() => {
            console.log("InArcticle error")
        })
}
