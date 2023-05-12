import { axiosInstance } from "../../../common/axiosInstance"
import { setCustomValidityShow } from "../../customValidity/organoids/CustomValidity"


export const InHeaderUser = async () => {
    return axiosInstance.get(
        `/profile/avatar`)
        .then((res: any) => { return (res.data.avatar) })
        .catch(() => {
            setCustomValidityShow("Ошибка сервера")
        })
}
