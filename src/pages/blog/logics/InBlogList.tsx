import { axiosInstance } from "../../../common/axiosInstance"
import { setBlogValue } from "./BlogValue"

export const InBlogList = async () => {
    return axiosInstance.get(
        `/post`)
        .then((res: any) => { setBlogValue(res.data) })
        .catch(() => {
            console.log("InBlogList error")
        })
}
