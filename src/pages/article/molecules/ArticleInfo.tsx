import { useEffect, useState } from 'react';
import '../styles/ArticleInfo.css'
import Defaultuser from '../../../common/assets/article/defaultUser.png'
import DisLike from '../../../common/assets/article/like.svg'
import Like from '../../../common/assets/article/dislike.svg'
import Comm from '../../../common/assets/article/comm.svg'
import { NavLink } from 'react-router-dom';
import { IInArcticleLike, InArcticleLike } from '../logics/InArcticleLike'
import { apiImage } from '../../../common/axiosInstance';
import { IInArcticleLikeCheck, InArcticleLikeCheck } from '../logics/InArcticleLikeCheck';
import { useStore } from 'effector-react';
import { $accessToken } from '../../../common/accessToken';
interface IArticleInfo {
    authorId: number
    firstName: string
    lastName: string
    avatar: string
    like: number
    commLength: number
    postId: number
    requestInArcticle: any
}
export const ArticleInfo = (params: IArticleInfo) => {
    const [check, setCheck] = useState<boolean>(false)
    const accessToken = useStore($accessToken);
    const requestInArcticleLike = async (params: IInArcticleLike) => {
        await InArcticleLike({ ...params })
    }
    const requestInArcticleLikeCheck = async (params: IInArcticleLikeCheck) => {
        await InArcticleLikeCheck({ ...params })
    }
    const onCLickButton = () => {
        if (accessToken) {
            if (check) {
                requestInArcticleLike({ postId: params.postId, delete: true, requestInArcticle: params.requestInArcticle })
                setCheck(false)
            } else {
                requestInArcticleLike({ postId: params.postId, delete: false, requestInArcticle: params.requestInArcticle })
                setCheck(true)
            }
        }
    }
    useEffect(() => {
        requestInArcticleLikeCheck({ postId: params.postId, setCheck: setCheck })
    }, [])
    return (
        <div className="ArticleInfo">
            <div className="ArticleInfo__Header">
                <img src={params.avatar ? apiImage + params.avatar : Defaultuser} alt="" />
                <div className='ArticleInfo__Header__name'>{params.firstName + " " + params.lastName}</div>
                <NavLink to={`/AnotherProfile/:${params.authorId}`} className='ArticleInfo__Header__link'>Смотреть профиль</NavLink>
            </div>
            <div className="ArticleInfo__Footer">
                <div className="ArticleInfo__Footer__like" onClick={onCLickButton}>
                    <img src={check ? Like : DisLike} alt="" />
                    {params.like}
                </div>
                <div className="ArticleInfo__Footer__comm">
                    <img src={Comm} alt="" />
                    {params.commLength}
                </div>
            </div>
        </div>
    );
};
