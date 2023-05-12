import '../styles/ArticleNewComm.css'
import { useState } from 'react';
import { setCustomValidityShow } from '../../../ui/customValidity/organoids/CustomValidity';
import { IInArticleNewComm, InArticleNewComm } from '../logics/InArticleNewComm';

interface IArticleNewComm {
    id: number
    postId: number
    requestInArcticle: any
}

export const ArticleNewComm = (params: IArticleNewComm) => {
    const [value, setValue] = useState<string>("")
    const requestInArticleNewComm = async (params: IInArticleNewComm) => {
        try {
            await InArticleNewComm({ ...params })
        } catch (error) {
            setCustomValidityShow("Ошибка сервера")
        }
    }
    const onCLickButton = () =>{
        if(value !== ""){
            setValue("");
            requestInArticleNewComm({ postId: params.id, text: value,requestInArcticle: params.requestInArcticle })
        }
    }
    return (
        <form onSubmit={e => { e.preventDefault(); onCLickButton(); }}  className="ArticleNewComm">
            <textarea value={value} placeholder={"Написать комментарий"} onChange={(event: any) => { setValue(event.target.value) }} className="ArticleNewComm__Area"></textarea>
            <input type="submit" className="ArticleNewComm__Button" value="Отправить" />
        </form>
    );
};
