import '../styles/ArticleImage.css'
import Back from "../../../common/assets/articleWriting/back.png"
import { apiImage } from '../../../common/axiosInstance';

interface IArticleImage {
    image: string
}

export const ArticleImage = (params: IArticleImage) => {
    return (
        <div className="ArticleImage">
            <img className="ArticleImage__Image" src={params.image ? apiImage + params.image : Back} alt="" />
        </div>
    );
};
