import { axiosInstance } from "../../../common/axiosInstance"

export const InGamesList = async () => {
    return axiosInstance.get(
        `/game`)
        .then((res: any) => { return (res.data) })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}
