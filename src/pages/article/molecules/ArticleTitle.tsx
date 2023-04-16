import '../styles/ArticleTitle.css'
interface IArticleTitle{
    title:string
}
export const ArticleTitle = (params:IArticleTitle) => {
    return (
            <div className="ArticleTitle">
                {params.title}
            </div>
    );
};
