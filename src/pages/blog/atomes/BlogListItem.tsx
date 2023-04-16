import '../styles/BlogListItem.css'
import Back from "../../../common/assets/blog/Back.png"
import { NavLink } from 'react-router-dom'
import { apiImage } from '../../../common/axiosInstance'

export interface IBlogListItem {
    title: string
    description: string
    id: number
    articleId: number
    background: string
}
export const BlogListItem = (params: IBlogListItem) => {


    return (
        params.id == 0 ?
            <div className="BlogListItem__First BlogListItem">
                <div className="BlogListItem__background">
                    <img src={apiImage+params.background} alt="" />
                </div>
                <div className="BlogListItem__Info">
                    <div className="BlogListItem__Info__title">
                        {params.title}
                    </div>
                    <div className="BlogListItem__Info__description">
                        {params.description}
                    </div>
                    <NavLink to={`/Article/:${params.articleId}`} className="BlogListItem__Info__id">
                        Читать
                    </NavLink>
                </div>
            </div> :
            <div className="BlogListItem">
                <div className="BlogListItem__background">
                    <img src={apiImage+params.background} alt="" />
                </div>
                <div className="BlogListItem__Info">
                    <div className="BlogListItem__Info__title">
                        {params.title}
                    </div>
                    <div className="BlogListItem__Info__description">
                        {params.description}
                    </div>
                    <NavLink to={`/Article/:${params.articleId}`} className="BlogListItem__Info__id">
                        Читать
                    </NavLink>
                </div>
            </div>
    )
};
