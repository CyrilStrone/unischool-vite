import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { apiImage } from "../../../common/axiosInstance";
import { $userAuthorization } from "../../../common/UserHooks";
import { InAnotherProfileArticles } from "../logics/InAnotherProfileArticles";
import "../styles/AnotherProfileArticles.css"
interface IAnotherProfileArticles {
    id: number,
}
export const AnotherProfileArticles = (params: IAnotherProfileArticles) => {
    const userAuthorization = useStore($userAuthorization);
    const [value, setValue] = useState<any>()
    const requestInAnotherProfile = async (id: number) => {
        setValue(await InAnotherProfileArticles({ id: id }))
    }
    useEffect(() => {
        if (userAuthorization && params.id) {
            requestInAnotherProfile(params.id)
        }
    }, [userAuthorization])
    return (
        <div className="AnotherProfileArticles">
            <div className="AnotherProfileArticles__Title">
                Статьи
            </div>
            {value && value.map((e: any, id: number) =>
                <div key={id} className="AnotherProfileArticles__Item">
                    <img src={apiImage + e.background} className="AnotherProfileArticles__Item__background" alt="" />
                    <div className="AnotherProfileArticles__Item__Info">
                        <div className="AnotherProfileArticles__Item__Info__title">
                            {e.title}
                        </div>
                        <div className="AnotherProfileArticles__Item__Info__description">
                            {e.description}
                        </div>
                        <NavLink to={`/Article/:${e.id}`} className="AnotherProfileArticles__Item__Info__id">
                            Читать
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    );
};
