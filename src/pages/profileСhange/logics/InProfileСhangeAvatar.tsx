import { axiosInstance } from "../../../common/axiosInstance"
export interface IInProfileСhangeAvatar {
    file: any;
}
export const InProfileСhangeAvatar = async (params: IInProfileСhangeAvatar) => {
    const formData = new FormData();
    formData.append("image", params.file);
    return axiosInstance.put(
        `/profile/image`,
        formData
    )
        .then((res: any) => {
        })
        .catch(() => {
            console.log("IInProfileСhangeAvatar error")
        })
}
