import { useNavigate } from "react-router-dom"
import { setAccessToken } from "../../../common/accessToken"
import { axiosInstance } from "../../../common/axiosInstance"

export interface IInRegistration {
    email: string
    password: string
    firstName: string
    lastName: string
    login: string
    role: string
    navigate: any
}
export const InRegistration = async (params: IInRegistration) => {
    return axiosInstance.post(
        'auth/registration', {
        "email": params.email,
        "password": params.password,
        "firstName": params.firstName,
        "lastName": params.lastName,
        "login": params.login,
        "role": params.role
    })
        .then((res: any) => {
            if (res.data.token) {
                setAccessToken(res.data.token);
            }
        })
        .catch((error: any) => {
            throw new Error(error.response.data.message);
        })
}
