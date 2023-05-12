import '../styles/Blog.css'
import { CircleBackground } from "../../../ui/circlebackground/organoids/CircleBackground";
import { BlogList } from "../molecules/BlogList";
import { BlogTitle } from "../molecules/BlogTitle";
export const Blog = () => {
    return (
        <>
            <div className="Blog">
                <BlogTitle />
                <BlogList />
            </div>
            <CircleBackground />
        </>
    );
};
