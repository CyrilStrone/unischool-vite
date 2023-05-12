import '../styles/ArticleText.css'

interface IArticleText{
    text:string
}

export const ArticleText = (params:IArticleText) => {
    return (
            <div className="ArticleText">
                {params.text}
            </div>
    );
};
