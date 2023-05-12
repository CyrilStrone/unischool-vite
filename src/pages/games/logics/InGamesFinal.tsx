import { axiosInstance } from "../../../common/axiosInstance"

export interface IInGamesFinal {
    game_id: number,
    score: number,
    time: string
}

export const InGamesFinal = async (params: IInGamesFinal) => {
    return axiosInstance.post(
        `/game`, {
        "game_id": params.game_id,
        "score": params.score,
        "time": params.time
    })
        .then((res: any) => {  })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}
