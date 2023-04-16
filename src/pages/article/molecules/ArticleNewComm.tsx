import { useState } from 'react';
import { IInArticleNewComm, InArticleNewComm } from '../logics/InArticleNewComm';
import '../styles/ArticleNewComm.css'
interface IArticleNewComm {
    id: number
    postId: number
    requestInArcticle: any
}
export const ArticleNewComm = (params: IArticleNewComm) => {
    const [value, setValue] = useState<string>("")
    const requestInArticleNewComm = async (params: IInArticleNewComm) => {
        await InArticleNewComm({ ...params })
    }
    const onCLickButton = () =>{
        if(value !== ""){
            setValue("");
            requestInArticleNewComm({ postId: params.id, text: value,requestInArcticle: params.requestInArcticle })
        }
    }
    return (
        <div className="ArticleNewComm">
            <textarea value={value} placeholder={"Написать комментарий"} onChange={(event: any) => { setValue(event.target.value) }} className="ArticleNewComm__Area"></textarea>
            <div className="ArticleNewComm__Button" onClick={onCLickButton}
                >
                Отправить
            </div>
        </div>
    );
};
