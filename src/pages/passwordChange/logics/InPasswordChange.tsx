import { NavigateFunction, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../common/axiosInstance"
export interface IInPasswordChange{
    currentPassword:string;
    newPassword:string;
    newPasswordRepeat:string;
    navigate: NavigateFunction
}

export const InPasswordChange = async (params:IInPasswordChange) => {
    return axiosInstance.put(
        `/profile/updPass`,{
            "currentPassword": params.currentPassword,
            "newPassword": params.newPassword,
        })
        .then((res: any) => { 
            if (res.data) {
                params.navigate("/Profile")
            }
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}