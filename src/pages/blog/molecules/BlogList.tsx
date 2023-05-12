import { useEffect } from "react";
import { BlogListItem } from "../atomes/BlogListItem";
import { $blogValue, IBlogValue } from "../logics/BlogValue";
import { useStore } from "effector-react";
import { InBlogList } from "../logics/InBlogList";

export const BlogList = () => {
    const blogValue = useStore($blogValue);
    const requestBlogList= async () => {
        await InBlogList()
    }
    useEffect(()=>{
        requestBlogList()
    },[])
    return (
        <div className="BlogList">
            {blogValue && blogValue.map((e: IBlogValue,id:number) =>
                <BlogListItem key={id} title={e.title} description={e.description} id={id} background={e.background} articleId={e.id} />
            )}
        </div>
    );
};
