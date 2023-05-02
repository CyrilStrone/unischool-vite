import { useNavigate } from "react-router-dom"
import { setAccessToken } from "../../../common/accessToken"
import { axiosInstance } from "../../../common/axiosInstance"

export interface IInAuthorization {
    email: string
    password: string
    navigate: any
}
export const InAuthorization = async (params: IInAuthorization) => {
    return axiosInstance.post(
        '/auth/login', {
        "email": params.email,
        "password": params.password,
    })
        .then((res: any) => {
            if (res.data.token) {
                setAccessToken(res.data.token);
            }
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}
