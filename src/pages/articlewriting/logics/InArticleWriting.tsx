import { axiosInstance } from "../../../common/axiosInstance"

export interface IInArticleWriting {
    title: string
    description: string
    background: any
    content: any
    navigate: any
}

export const InArticleWriting = async (params: IInArticleWriting) => {
    const formData = new FormData();
    formData.append("title", params.title);
    formData.append("description", params.description);
    formData.append("background", params.background);
    formData.append('content', JSON.stringify(params.content));
    return axiosInstance.post(
        '/post', formData)
        .then((res: any) => {
            params.navigate(`/Article/:${res.data.id}`);
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}
