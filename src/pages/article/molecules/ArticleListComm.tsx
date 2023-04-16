import { useState } from 'react';
import '../styles/ArticleListComm.css'
import DefaulUser from '../../../common/assets/article/defaultUser 2.png'
import { apiImage } from '../../../common/axiosInstance';
import { NavLink } from 'react-router-dom';
interface IArticleListComm {
    comment: any
}
export const ArticleListComm = (params: IArticleListComm) => {
    return (
        <div className='ArticleListComm__Gen'>
            {params.comment && params.comment.map((e: any, id: number) =>
                <div key={id} className="ArticleListComm">
                    <div className='ArticleListComm__Info'>
                        <img className='ArticleListComm__Info__Image' src={apiImage + e.user.avatar} alt="" />
                        <NavLink to={`/AnotherProfile/:${e.user.id}`} className='ArticleListComm__Info__Name'>{e.user.firstName + " " + e.user.lastName}</NavLink>
                    </div>
                    <div className="ArticleListComm__Area">{e.text}</div>
                </div>
            )}
        </div>

    );
};
