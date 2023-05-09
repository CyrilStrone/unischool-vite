import { apiImage, axiosInstance } from "../../../common/axiosInstance"

export const InProfile = async () => {
    return axiosInstance.get(
        `/profile`)
        .then((res: any) => {
            if (res.data) {
                let local = res.data;
                local.avatar = apiImage + local.avatar;
                return (local)
            }
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}
