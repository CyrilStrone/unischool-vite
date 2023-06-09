import '../styles/Article.css'
import { useEffect, useState } from "react";
import { CircleBackground } from "../../../ui/circlebackground/organoids/CircleBackground";
import { ArticleTitle } from "../molecules/ArticleTitle";
import { ArticleText } from "../molecules/ArticleText";
import { ArticleInfo } from "../molecules/ArticleInfo";
import { ArticleNewComm } from "../molecules/ArticleNewComm";
import { ArticleListComm } from "../molecules/ArticleListComm";
import { ArticleImage } from "../molecules/ArticleImage";
import { InArcticle } from "../logics/InArcticle";
import { useStore } from "effector-react";
import { $accessToken } from "../../../common/accessToken";
import { BackButton } from "../../../ui/backbutton/organoids/BackButton";

export const Article = () => {
    const accessToken = useStore($accessToken);
    const [id, setId] = useState<any>()
    const [value, setValue] = useState<any>()
    const requestInArcticle = async (id: number) => {
        setValue(await InArcticle({ id: id }))
    }
    useEffect(() => {
        if (id) {
            requestInArcticle(id)
        }
    }, [id])
    useEffect(() => {
        setId(window.location.pathname.split("/Article/:")[1])
    }, [])

    return (
        <>
            {value && <div className="Article">
            <BackButton link={"/Blog"} />
                <ArticleImage image={value.background} />
                <div className="Article__Base">
                    {value.content && value.content.map((e: any, id: number) =>
                        <div key={id} className="Article__Base__Item">
                            <ArticleTitle title={e.title} />
                            <ArticleText text={e.text} />
                        </div>
                    )}
                </div>
                <ArticleInfo authorId={value.author.id} firstName={value.author.firstName} lastName={value.author.lastName} avatar={value.author.avatar} like={value.like} commLength={value.comment.length} postId={id} requestInArcticle={requestInArcticle} />
                {accessToken && <ArticleNewComm id={value.id} postId={id} requestInArcticle={requestInArcticle} />}
                <ArticleListComm comment={value.comment} />
            </div>
            }
            <CircleBackground />
        </>
    );
};
