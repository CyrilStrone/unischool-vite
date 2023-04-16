import { axiosInstance } from "../../../common/axiosInstance"
export interface IInProfileСhange {
    firstName: string;
    lastName: string;
    about: string;
}
export const InProfileСhange = async (params: IInProfileСhange) => {
    return axiosInstance.put(
        `/profile`, {
        "firstName": params.firstName,
        "lastName": params.lastName,
        "about": params.about,
    })
        .then((res: any) => {
        })
        .catch(() => {
            console.log("InProfileСhange error")
        })
}
