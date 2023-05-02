import '../styles/ArticleWriting.css'
import { useState } from 'react';
import defaultBack from '../../../common/assets/articleWriting/back.png'
import { CircleBackground } from '../../../ui/circlebackground/organoids/CircleBackground';
import { useNavigate } from 'react-router-dom';
import { IInArticleWriting, InArticleWriting } from '../logics/InArticleWriting';

export const ArticleWriting = () => {
    const navigate = useNavigate();

    const requestInArticleWriting = async (params: IInArticleWriting) => {
        await InArticleWriting({ ...params })
    }
    const onCLickButton = () => {
        if (value.background && value.content[0].title && value.content[0].text && value.description && value.title) {
            requestInArticleWriting(value)
        }
    }
    const [valueBackground, setValueBackground] = useState<any>("")
    const [value, setValue] = useState<IInArticleWriting>(
        {
            background: "",
            title: "",
            description: "",
            navigate:navigate,
            content: [
                { title: "", text: "" }
            ]
        })
    const handleAddContent = () => {
        const newContent = { title: "", text: "" };
        setValue((prevState: IInArticleWriting) => ({
            ...prevState,
            content: [...prevState.content, newContent],
        }));
    };
    const updateContent = (index: number, key: string, newValue: any) => {
        setValue((prevState: IInArticleWriting) => ({
            ...prevState,
            content: prevState.content.map((item: any, i: number) =>
                i === index ? { ...item, [key]: newValue } : item
            )
        }));
    };

    const handleAvatarCover = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("efefef")
        if (event.target.files && event.target.files.length > 0 && event.target.files[0] !== value.background) {
            setValue({
                ...value,
                background: event.target.files[0],
            });
            setValueBackground(URL.createObjectURL(event.target.files[0]));
        }
    };
    return (
        <><div className="ArticleWriting">
            <div className="ArticleWriting__Title">
                Написание статьи
            </div>
            <div className="ArticleWriting__CoverBlock ArticleWriting__Block">
                <div className="ArticleWriting__SubTitle">
                    Обложка статьи
                </div>
                <label htmlFor="label" style={{ backgroundImage: `url(${valueBackground ? valueBackground : defaultBack})` }} className="ArticleWriting__CoverBlock__Label" />
                <input
                    id="label"
                    type="file"
                    onChange={handleAvatarCover}
                    accept="image/*"
                />
            </div>
            <div className="ArticleWriting__TitleBlock ArticleWriting__Block">
                <div className="ArticleWriting__SubTitle">
                    Заголовок статьи
                </div>
                <input type="text" maxLength={40} onChange={(event: any) => {
                    setValue((prevState: any) => ({
                        ...prevState,
                        title: event.target.value
                    }))
                }} value={value.title} className="ArticleWriting__TitleBlock__Input ArticleWriting__Input" />
            </div>
            <div className="ArticleWriting__TitleBlock ArticleWriting__Block">
                <div className="ArticleWriting__SubTitle">
                    Описание статьи
                </div>
                <input type="text" maxLength={40} onChange={(event: any) => {
                    setValue((prevState: any) => ({
                        ...prevState,
                        description: event.target.value
                    }))
                }} value={value.description} className="ArticleWriting__TitleBlock__Input ArticleWriting__Input" />
            </div>
            {
                value.content.map((e: any, index: any) =>
                    <div key={index} className="ArticleWriting__Block__General">
                        <div className="ArticleWriting__SubTitleBlock ArticleWriting__Block">
                            <div className="ArticleWriting__SubTitle">
                                Подзаголовок статьи
                            </div>
                            <input type="text" maxLength={40} onChange={(event: any) => { updateContent(index, "title", event.target.value); }} value={e.title} className="ArticleWriting__SubTitleBlock__Input ArticleWriting__Input" />
                        </div>
                        <div className="ArticleWriting__AfterSubtitleBlock ArticleWriting__Block">
                            <div className="ArticleWriting__SubTitle">
                                Текст после подзаголовка
                            </div>
                            <textarea onChange={(event: any) => { updateContent(index, "text", event.target.value); }} value={e.value} className="ArticleWriting__AfterSubtitleBlock__Input ArticleWriting__Input" />
                        </div>
                    </div>
                )
            }
            <div className="ArticleWriting__Button__Bar">
                <div className="ArticleWriting__Button" onClick={() => { handleAddContent() }}>
                    Добавить заголовок
                </div>
                <div className="ArticleWriting__Button" onClick={onCLickButton}>
                    Завершить
                </div>
            </div>
        </div>
            <CircleBackground />
        </>
    );
};
