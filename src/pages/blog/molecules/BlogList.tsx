import { useEffect } from "react";
import { BlogListItem } from "../atomes/BlogListItem";
import { $blogValue, IBlogValue } from "../logics/BlogValue";
import { useStore } from "effector-react";
import { InBlogList } from "../logics/InBlogList";
import { $searchResult, setSearchValue } from "../logics/SearchValue";

export const BlogList = () => {
    const blogValue = useStore($blogValue);
    const searchResult = useStore($searchResult);
    const requestBlogList = async () => {
        await InBlogList()
    }
    useEffect(() => {
        requestBlogList()
        return () => {
            setSearchValue(null)
          }
    }, [])
    
    return (
        <div className="BlogList">
            {blogValue ? searchResult ? searchResult.map((e: IBlogValue, id: number) =>
                <BlogListItem key={id} title={e.title} description={e.description} id={id} background={e.background} articleId={e.id} />
            ) : blogValue.map((e: IBlogValue, id: number) =>
                <BlogListItem key={id} title={e.title} description={e.description} id={id} background={e.background} articleId={e.id} />
            ) : null}
        </div>
    );
};
